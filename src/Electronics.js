import React from "react";
import "./Home.css";
import Product from "./Product";
function Electronics() {
  return (
    <>
      <img
        src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/3/AmazonStores/A21TJRUUN4KGV/18d49e2262156c1e6dd9bbf413685add.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg"
        className="imageBanner"
      />
      <div className="home">
        <div className="home_container">
          <div className="home_row">
            <Product
              id="13234145"
              title="Apple 2024 MacBook Air 13″ Laptop "
              price={2300}
              image="https://m.media-amazon.com/images/I/71ItMeqpN3L._SL1500_.jpg"
              rating={5}
            />
            <Product
              id="13234145"
              title="Apple 2023 MacBook Pro (14-inch, M3 Pro chip with 11‑core CPU"
              price={1990}
              image="https://m.media-amazon.com/images/I/314kVw1vC6L._SY445_SX342_QL70_FMwebp_.jpg"
              rating={4}
            />

            <Product
              id="38492023"
              title="Apple 2023 MacBook Pro (16-inch, M3 Pro chip with 12‑core CPU "
              price={2120}
              image="https://m.media-amazon.com/images/I/618d5bS2lUL._SX679_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="83726392"
              title="Apple AirPods  ​​​​​​​"
              price={600}
              image="https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg"
              rating={5}
            />
            <Product
              id="13234145"
              title="Apple AirPods Pro with MagSafe Charging Case"
              price={1100}
              image="https://m.media-amazon.com/images/I/71bhWgQK-cL._SX679_.jpg"
              rating={4}
            />
            <Product
              id="34920398"
              title="Apple AirPods (2nd Generation) Case, White"
              price={1110}
              image="https://m.media-amazon.com/images/I/7120GgUKj3L._SX679_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="36728301"
              title="Apple iPhone 15 (128GB) - Blue "
              price={1000}
              image="https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg"
              rating={4}
            />
            <Product
              id="34920398"
              title="Apple iPhone 15 Plus (128 GB) - Pink"
              price={1550}
              image="https://m.media-amazon.com/images/I/31wHpKYsdhL._SY445_SX342_QL70_FMwebp_.jpg"
              rating={3}
            />
            <Product
              id="34920398"
              title="Apple iPhone 15 (128 GB) - Yellow"
              price={1599}
              image="https://m.media-amazon.com/images/I/313Cl7yn9rL._SY445_SX342_QL70_FMwebp_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/G/31/img22/pc/acc/hed/Pc_acc_header_1242x450._CB611776472_.jpg"
        className="imageBanner"
      />
      <img
        src="https://m.media-amazon.com/images/G/31/img22/zeb/1500x300._CB592650508_.jpg"
        className="imageBanner"
      />
      <img
        src="https://m.media-amazon.com/images/G/31/img23/PB/Sept23/CEPC/Integration/PC_Hero_1500x300-PC._CB578178144_.jpg"
        className="imageBanner"
      />
    </>
  );
}

export default Electronics;
