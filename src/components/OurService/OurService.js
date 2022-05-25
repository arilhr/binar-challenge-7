import React from "react";

export const OurService = () => {
  return (
    <div class="our-services" id="our-services">
      <div class="container row flex-column gap-5 align-items-center m-auto flex-lg-row">
        <div class="col w-100">
          <img class="w-100" src="./Assets/img/img_service.png" alt="service" />
        </div>
        <div class="col d-flex flex-column gap-2 lgw-50">
          <h2>Best Car Rental for any kind of trip in Gresik!</h2>
          <p>
            Sewa mobil di Gresik bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>
          <ul class="services-list list-unstyled d-flex flex-column gap-2">
            <li class="service-item">Sewa Mobil Dengan Supir di Bali 12 Jam</li>
            <li class="service-item">Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
            <li class="service-item">Sewa Mobil Jangka Panjang Bulanan</li>
            <li class="service-item">Gratis Antar - Jemput Mobil di Bandara</li>
            <li class="service-item">Layanan Airport Transfer / Drop In Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
