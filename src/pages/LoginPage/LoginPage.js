import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FormInput } from "../../components/FormInput/FormInput";
import "./LoginPage.scss";
import JumbotronImage from "../../assets/img/jumbotron.png";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

export const LoginPage = () => {
  const [info, setInfo] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const axios = require("axios");

  const handleLogin = (e) => {
    e.preventDefault();

    const EMAIL_VALIDATION = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
    const email = e.target.elements.formEmail.value;
    const pass = e.target.elements.formPassword.value;

    // input validation
    if (
      email === "" ||
      pass === "" ||
      !EMAIL_VALIDATION.test(email) ||
      pass.length < 6
    ) {
      showAlert(
        "danger",
        "Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital."
      );
      return;
    }

    axios
      .post("https://rent-car-appx.herokuapp.com/admin/auth/login", {
        email: email,
        password: pass,
      })
      .then((res) => {
        if (res.status === 201) {
          // save token to local storage
          localStorage.setItem("accountData", JSON.stringify(res.data));

          // notification
          showAlert("success", "Login Berhasil!");

          // redirect to dashboard
          if (res.data.role === "admin") {
            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          }

          if (res.data.role === "user") {
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          showAlert("danger", "Email atau Password salah");
        } else if (err.response.status === 404) {
          showAlert("danger", "Email atau Password salah");
        }
      });
  };

  const handleLoginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("accountData", JSON.stringify(res.user));
        showAlert("success", "Login Berhasil!");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        if (err.code === "auth/popup-closed-by-user") return;
        showAlert("danger", "Login Gagal!");
      });
  };

  const showAlert = (type, message) => {
    setStatus(type);
    setInfo(message);
  };

  return (
    <div className="login-page">
      <div className="jumbotron-section">
        <img src={JumbotronImage} alt="Jumbotron" />
      </div>
      <div className="main-section">
        <div className="title-logo"></div>
        <h3 className="title">Welcome, Admin BCR</h3>
        <Alert show={status !== ""} variant={status}>
          <p>{info}</p>
        </Alert>
        <Form className="login-form" onSubmit={(e) => handleLogin(e)}>
          <FormInput
            id={"formEmail"}
            label={"Email"}
            placeholder={"Contoh: user@gmail.com"}
            type={"email"}
          />
          <FormInput
            id={"formPassword"}
            label={"Password"}
            placeholder={"6+ karakter"}
            type={"password"}
          />
          <Button variant="primary" className="form-button w-100" type="submit">
            Sign In
          </Button>
        </Form>
        <span className="center-text">OR</span>
        <div className="google-button">
          <GoogleButton onClick={handleLoginGoogle} />
        </div>
      </div>
    </div>
  );
};