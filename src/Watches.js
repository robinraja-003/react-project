import React from "react";
import "./Home.css";
import Product from "./Product";
function Watches() {
  return (
    <>
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21032024-TopPickforYou-Z2-Header.jpg"
        className="imageBanner"
      />
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-dailybannermonitisation-Z7-header.jpg"
        className="imageBanner"
      />
      <img
        src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/a3b5f008-3bb3-4d31-a893-501a2d75da2f._CR0%2C0%2C3000%2C600_SX1920_.png"
        className="imageBanner"
      />
      <div className="home">
        <div className="home_container">
          <div className="home_row">
            <Product
              id="84938339"
              title="Fastrack Smartwatch"
              price={45}
              image="https://m.media-amazon.com/images/I/41Hhfv7M+LL._SY300_SX300_.jpg"
              rating={3}
            />
            <Product
              id="13234145"
              title="
              Noise Vivid Call 2 Smart Watch with 1.85” HD Display"
              price={99}
              image="https://m.media-amazon.com/images/I/4169mZ4+L7L._SY300_SX300_.jpg"
              rating={4}
            />
            <Product
              id="34920398"
              title="Noise Pulse 2 Max 1.85 Display, Bluetooth Calling Smart Watch"
              price={140}
              image="https://m.media-amazon.com/images/I/71Q8czKqSIL._SL1500_.jpg"
              rating={3}
            />
          </div>
          <div className="home_row">
            <Product
              id="59382823"
              title="Noise Halo Plus 1.46 Super AMOLED Display Elite Smart Watch  "
              price={99}
              image="https://m.media-amazon.com/images/I/41BK-0tJ6nL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
            />
            <Product
              id="84938339"
              title="Noise Quad Call 1.81 Display, Bluetooth Calling Smart Watch"
              price={145}
              image="https://m.media-amazon.com/images/I/41Et1H-CpvL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={3}
            />
            <Product
              id="38492023"
              title="Noise Halo Plus Elite Edition Smartwatch with 1.46  Super AMOLED Display"
              price={120}
              image="https://m.media-amazon.com/images/I/51cNYETLQbL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="73639300"
              title="Noise Twist Go Round dial Smartwatch with BT Calling, 1.39  Display"
              price={130}
              image="https://m.media-amazon.com/images/I/41yCQTkMJ-L._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
            />
            <Product
              id="83726392"
              title="Noise ColorFit Ultra 3 Bluetooth Calling Smart Watch with Biggest 1.96  AMOLED Display"
              price={250}
              image="https://m.media-amazon.com/images/I/516osUm7cIL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
            />
            <Product
              id="36728301"
              title="Noise Twist Go Round dial Smartwatch with BT Calling, 1.39 Display"
              price={210}
              image="https://m.media-amazon.com/images/I/51heE88semL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={3}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Watches;
