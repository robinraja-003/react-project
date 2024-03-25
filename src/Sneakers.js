import React from "react";
import "./Home.css";
import Product from "./Product";

function Sneakers() {
  return (
    <>
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-22032024-topbanner-z3-p4-adidas-nike-upto40.jpg"
        className="imageBanner"
      />
      <div className="home">
        <div className="home_container">
          <div className="home_row">
            <Product
              id="89201992"
              title="Men Low-Top Lace-Up Sneakers"
              price={190}
              image="https://assets.ajio.com/medias/sys_master/root/20240211/U1h2/65c8cddc16fd2c6e6aef2433/-473Wx593H-467063204-navy-MODEL.jpg"
              rating={4}
            />
            <Product
              id="13234145"
              title="Smashic Unisex Sneakers"
              price={200}
              image="https://assets.ajio.com/medias/sys_master/root/20231012/XLbt/6527a9f3ddf779151935d4dc/-473Wx593H-465654605-white-MODEL.jpg"
              rating={4}
            />
            <Product
              id="34920398"
              title="RED TAPE
              Men Low-Top Lace-Up Sneakers"
              price={190}
              image="https://assets.ajio.com/medias/sys_master/root/20240213/aKkL/65cb707c16fd2c6e6af4368d/-473Wx593H-467069260-black-MODEL.jpg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="59382823"
              title="PUMA
              Men Smashic Unisex Sneakers"
              price={150}
              image="https://assets.ajio.com/medias/sys_master/root/20230628/UiLE/649b5c6feebac147fc1143ba/-473Wx593H-465642484-black-MODEL.jpg"
              rating={4}
            />
            <Product
              id="84938339"
              title="NIKE
              Court Vision Perforated Lace-Up Sneakers"
              price={269}
              image="https://assets.ajio.com/medias/sys_master/root/20201007/kECO/5f7cbb5d7cdb8c21e374421f/-473Wx593H-460745648-white-MODEL.jpg"
              rating={4}
            />
            <Product
              id="38492023"
              title="CAMPUS
              Men Round-Toe Lace-Up Sneakers"
              price={199}
              image="https://assets.ajio.com/medias/sys_master/root/20240123/08Q0/65af5d0616fd2c6e6ab5d9fe/-1117Wx1400H-465845252-white-MODEL.jpg"
              rating={3}
            />
          </div>
        </div>
      </div>
      <div className="home">
        <div className="home_container">
          <div className="home_row">
            <Product
              id="89201992"
              title="Ridease Wns Training Shoes"
              price={90}
              image="https://assets.ajio.com/medias/sys_master/root/20240108/PTA2/659c094574cb305fe009a990/-473Wx593H-469564970-purple-MODEL5.jpg"
              rating={3}
            />
            <Product
              id="13234145"
              title="Waffle Debut Lace-Up Casual Shoes"
              price={220}
              image="https://assets.ajio.com/medias/sys_master/root/20220520/LnsG/6286e995f997dd03e2f8183b/-473Wx593H-469098316-black-MODEL.jpg"
              rating={4}
            />
            <Product
              id="34920398"
              title="PUMA
              Women Ridease Training Shoes"
              price={150}
              image="https://assets.ajio.com/medias/sys_master/root/20240109/0YDl/659d63a954c30e6276a0256f/-473Wx593H-469564971-pink-MODEL.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="59382823"
              title="PUMA
              Bruten Lace-Up Shoes"
              price={129}
              image="https://assets.ajio.com/medias/sys_master/root/20231128/22it/6565ae74afa4cf41f5a54b69/-1117Wx1400H-469436376-pink-MODEL.jpg"
              rating={4}
            />
            <Product
              id="84938339"
              title="Women BreezeWalk Slip-On Walking Shoes"
              price={169}
              image="https://assets.ajio.com/medias/sys_master/root/20230531/RvEa/6476ed2d42f9e729d7007592/-473Wx593H-469328991-black-MODEL.jpg"
              rating={4}
            />
            <Product
              id="38492023"
              title="Women Revolution 7 Lace-Up Running Shoes"
              price={199}
              image="https://assets.ajio.com/medias/sys_master/root/20231220/db5C/65830798ddf7791519dd7b76/-1117Wx1400H-469581314-white-MODEL.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sneakers;
