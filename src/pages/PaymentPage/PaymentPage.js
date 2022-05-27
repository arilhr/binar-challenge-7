import React from "react";
import "./PaymentPage.scss";
import { ReactComponent as CalendarIcon } from "../../assets/img/fi_calendar.svg";
import { ReactComponent as SettingIcon } from "../../assets/img/fi_settings.svg";
import { ReactComponent as UsersIcon } from "../../assets/img/fi_users.svg";
import { Accordion, Button } from "react-bootstrap";
import { PaymentMethod } from "../../components/PaymentMethod/PaymentMethod";

export const PaymentPage = () => {
  return (
    <div className="payment-page">
      <div className="banner"></div>
      <div className="content-container d-flex flex-column align-items-center">
        <MethodPage />
      </div>
    </div>
  );
};

const MethodPage = () => {
  return (
    <>
      <div className="top-bar">
        <div className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          <span>Pembayaran</span>
        </div>
        <div className="steps">
          <div className="step">
            <div className="circle done">
              <span>1</span>
            </div>
            <span className="text">Pilih Metode</span>
          </div>
          <div className="line"></div>
          <div className="step">
            <div className="circle">
              <span>2</span>
            </div>
            <span className="text">Bayar</span>
          </div>
          <div className="line"></div>
          <div className="step">
            <div className="circle">
              <span>3</span>
            </div>
            <span className="text">Tiket</span>
          </div>
        </div>
      </div>
      <div className="detail-order box-container">
        <h3>Detail Pesanan</h3>
        <div className="detail-container">
          <div className="detail-group">
            <h5>Tipe Driver</h5>
            <span>Dengan Sopir</span>
          </div>
          <div className="detail-group">
            <h5>Tanggal</h5>
            <span>Dengan Sopir</span>
          </div>
          <div className="detail-group">
            <h5>Waktu Jemput/Antar</h5>
            <span>Dengan Sopir</span>
          </div>
          <div className="detail-group">
            <h5>Jumlah Penumpang (opsional)</h5>
            <span>Dengan Sopir</span>
          </div>
        </div>
      </div>
      <div className="content-2">
        <div className="select-method box-container">
          <h3>Pilih Metode Pembayaran</h3>
          <p>
            Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
            atau Mobile Banking
          </p>
          <div className="method-list">
            <PaymentMethod name="BCA Transfer" selected />
            <div className="line"></div>
            <PaymentMethod name="BNI Transfer" />
            <div className="line"></div>
            <PaymentMethod name="Mandiri Transfer" />
            <div className="line"></div>
          </div>
        </div>
        <div className="payment-detail box-container">
          <h3>Nama/Tipe Mobil</h3>
          <div className="specs-desc">
            <span className="specs-item">
              <UsersIcon />4 orang
            </span>
            <span className="specs-item">
              <SettingIcon />
              Manual
            </span>
            <span className="specs-item">
              <CalendarIcon />
              Tahun 2020
            </span>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className="default-text">Total</span>
                <span className="bold-text">Rp 430.000</span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="price-group">
                  <span className="bold-text">Harga</span>
                  <ul>
                    <li>
                      <div className="item">
                        <span className="default-text">
                          1 Mobil dengan sopir
                        </span>
                        <span className="default-text">Rp 430.000</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="price-group">
                  <span className="bold-text">Biaya Lainnya</span>
                  <ul>
                    <li>
                      <div className="item">
                        <span className="default-text">Pajak</span>
                        <span className="green default-text">Termasuk</span>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <span className="default-text">Biaya Makan Sopir</span>
                        <span className="green default-text">Termasuk</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="price-group">
                  <span className="bold-text">Belum Termasuk</span>
                  <ul>
                    <li>
                      <div className="item">
                        <span className="default-text">Bensin</span>
                        <span className="green default-text"></span>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <span className="default-text">Tol dan Parkir</span>
                        <span className="green default-text"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="total-section">
            <hr />
            <div className="total-price">
              <span className="bold-text">Total</span>
              <span className="bold-text">Rp 430.000</span>
            </div>
            <Button variant="success">Bayar</Button>
          </div>
        </div>
      </div>
    </>
  );
};
