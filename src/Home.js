import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src=" https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/EBDFeb/RevisedEBD/3000x1200_set1._CB581582491_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="89201992"
            title="Casio"
            price={300}
            image="https://m.media-amazon.com/images/I/616yB6-WD3L._SX679_.jpg"
            rating={4}
            discription="Casio Analog White Dial Men MTP-V300L-7AUDF A1177 "
          />
          <Product
            id="13234145"
            title="Alan Jones Clothing"
            price={100}
            image="https://m.media-amazon.com/images/I/71TzNW2FArL._SY879_.jpg"
            rating={4}
            discription="Lymio Hoodies || Sweatshirt for Men || Men Hoodie (H-18-19) "
          />
          <Product
            id="34920398"
            title="Asus Vivobook"
            price={540}
            image="https://m.media-amazon.com/images/I/41rJ+ha25XL._SY300_SX300_.jpg"
            rating={5}
            discription="ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020 "
          />
        </div>
        <div className="home_row">
          <Product
            id="59382823"
            title="Puma"
            price={90}
            image="https://m.media-amazon.com/images/I/71ij-UmritL._SY695_.jpg"
            rating={4}
            discription="Puma womens Hybrid Fuego Wns Running Shoe "
          />
          <Product
            id="84938339"
            title="Puma Slidder"
            price={30}
            image="https://m.media-amazon.com/images/I/51BX+E91exL._SY695_.jpg"
            rating={3}
            discription="Puma Unisex-Adult Leadcat 2.0 One8 Slide Common "
          />
          <Product
            id="38492023"
            title="T-Shirt"
            price={120}
            image="https://m.media-amazon.com/images/I/71y4BXxLJHL._SX679_.jpg"
            rating={5}
            discription="Lymio Men T-Shirt || T-Shirt for Men || Printed T Shirt || Round Neck T-Shirt "
          />
        </div>
        <div className="home_row">
          <Product
            id="73639300"
            title="Grey jack"
            price={290}
            image="https://m.media-amazon.com/images/I/51lSV1-447L._SX679_.jpg"
            rating={4}
            discription="grey jack Square Sunglasses Polarized Lens, Classic and Retro Style "
          />
          <Product
            id="83726392"
            title="Apple AirPods  ​​​​​​​"
            price={600}
            image="https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg"
            rating={5}
            discription="Apple AirPods Pro (2nd Generation) ​​​​​​​ "
          />
          <Product
            id="36728301"
            title="Apple iPhone 15"
            price={1000}
            image="https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg"
            rating={4}
            discription="Apple iPhone 15 (128GB) - Blue "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
