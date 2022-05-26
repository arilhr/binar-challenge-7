import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Accordion, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CarSearchForm from "../../components/CarSearchForm/CarSearchForm";
import { ReactComponent as CalendarIcon } from "../../assets/img/fi_calendar.svg";
import { ReactComponent as SettingIcon } from "../../assets/img/fi_settings.svg";
import { ReactComponent as UsersIcon } from "../../assets/img/fi_users.svg";
import "./CarPage.scss";

export const CarDetailPage = (props) => {
  const params = useParams();
  const [displayCar, setDisplayCar] = useState();

  useEffect(() => {
    const car = props.carData.find((car) => car.id === parseInt(params.id));
    setDisplayCar(car);
  }, []);

  const convertPriceToRupiah = (price) => {
    return Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(price)
      .split(",")[0];
  };

  return (
    <div className="car-page">
      <div className="banner"></div>
      <div className="content-container d-flex flex-column align-items-center">
        <CarSearchForm disable />
        <div className={`main-content ${displayCar ? "" : "d-none"}`}>
          <div className="section-1">
            <div className="description-section">
              <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="header">
                    Tentang Paket
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="list-group">
                      <h4>Include</h4>
                      <ul>
                        <li>
                          Apa saja yang termasuk dalam paket misal durasi max 12
                          jam
                        </li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                      </ul>
                    </div>
                    <div className="list-group">
                      <h4>Exclude</h4>
                      <ul>
                        <li>
                          Apa saja yang termasuk dalam paket misal durasi max 12
                          jam
                        </li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Refund, Reschedule, Overtime
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="list-group">
                      <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <Button variant="success">Lanjutkan Pembayaran</Button>
          </div>

          <div className="specs-section">
            <div className="car-image">
              <img src={displayCar?.image} alt="Car" />
            </div>
            <div className="description">
              <div className="car-description">
                <h3>
                  {displayCar?.name}/{displayCar?.category}
                </h3>
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
              </div>
              <hr />
              <div className="price-section">
                <span>Total</span>
                <h3>{convertPriceToRupiah(displayCar?.price)}</h3>
              </div>
              <Button variant="success">Lanjutkan Pembayaran</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carData: state.getDataReducers.carData,
  };
};

export default connect(mapStateToProps)(CarDetailPage);
