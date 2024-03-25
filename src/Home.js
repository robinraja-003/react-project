import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <div class="carousel">
            <div class="carousel-inner">
              <div className="slide">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Holi24/GW/Holi24_GW_PC_H1_2x._CB579546797_.jpg"
                  alt="Slide 1"
                  className="home_image"
                />
              </div>
              <div className="slide">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/March/unrec/Holi/Bandhan/299_PC_3000._CB579544309_.jpg"
                  alt="Slide 2"
                  className="home_image"
                />
              </div>
              <div className="slide">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/holihsbc/MA_2x._CB579580239_.jpg"
                  alt="Slide 3"
                  className="home_image"
                />
              </div>
            </div>
          </div>

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

      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-TopBannerMZ-Z2-Header.jpg"
        className="imageBanner"
      />

      <div className="home">
        <div className="home_container">
          <div className="home_row">
            <Product
              id="89201992"
              title="Skin Cleanser"
              price={300}
              image="https://m.media-amazon.com/images/I/418FvatLb8L.jpg"
              rating={4}
              discription="Gentle Skin Cleanser for Dry, Normal Sensitive Skin - 250 ml| Hydrating Face Wash with Niacinamide, Vitamin B5 "
            />
            <Product
              id="13234145"
              title="
              BoAt Airdopes Atom 81"
              price={90}
              image="https://m.media-amazon.com/images/I/61yyQD1KLOL._SL1500_.jpg"
              rating={4}
              discription="BoAt Airdopes Atom 81 TWS Earbuds with Upto 50H "
            />
            <Product
              id="34920398"
              title="WildHorn Leather Wallet"
              price={40}
              image="https://m.media-amazon.com/images/I/41VLeqCHTmL._SY300_SX300_.jpg"
              rating={3}
              discription="WildHorn Leather Wallet for Men I Ultra Strong Stitching I 6 Credit Card Slots  "
            />
          </div>
          <div className="home_row">
            <Product
              id="59382823"
              title="Skybags  "
              price={90}
              image="https://m.media-amazon.com/images/I/810s53kR8tL._SY879_.jpg"
              rating={4}
              discription="Skybags Casual Backpack 28L, 2 Main Compartments "
            />
            <Product
              id="84938339"
              title="Fastrack Smartwatch"
              price={45}
              image="https://m.media-amazon.com/images/I/41Hhfv7M+LL._SY300_SX300_.jpg"
              rating={3}
              discription="Fastrack FS1 Pro Smartwatch|1.96 Super AMOLED Arched Display with High Resolution"
            />
            <Product
              id="38492023"
              title="Mens Jewellery"
              price={20}
              image="https://m.media-amazon.com/images/I/61p4Zd4dA1L._SY695_.jpg"
              rating={4}
              discription="Fashion Frill Silver Chain For Men Stainless Steel Vintage Stylish Beaded Chain Necklace"
            />
          </div>
          <div className="home_row">
            <Product
              id="73639300"
              title="Generic"
              price={30}
              image="https://m.media-amazon.com/images/I/51oQ-2N0BZL.jpg"
              rating={4}
              discription="Relix Shoppe Eco-Friendly Natural Jute Slippers for Men and Women "
            />
            <Product
              id="83726392"
              title="POCO M6 Pro 5G"
              price={250}
              image="https://m.media-amazon.com/images/I/41888-BWxKL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
              discription="POCO M6 Pro 5G (Forest Green, 6GB RAM, 128GB Storage)​​​​​​​ "
            />
            <Product
              id="36728301"
              title="BLUE TEA"
              price={10}
              image="https://m.media-amazon.com/images/I/41ws8ld5ZvL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={3}
              discription="BLUE TEA - Butterfly Pea Flower Tea - 30 grams Caffeine Free Herbal Tea - Ayurvedic "
            />
          </div>
        </div>
      </div>

      <img
        src="https://m.media-amazon.com/images/G/31/img21/MA2023/AFrevamp_winterflip/Menhero/output_top-brands-2_3000x800_0._CB585741058_.gif"
        className="imageBanner"
      />

      <div className="home">
        <div className="home_container">
          <div className="home_row">
            <Product
              id="89201992"
              title="Jack & Jones Men Jeans"
              price={120}
              image="https://m.media-amazon.com/images/I/71Jcge2f9lL._SY879_.jpg"
              rating={4}
            />
            <Product
              id="13234145"
              title="Levi's Men's Regular Fit Brand Logo T-Shirt"
              price={100}
              image="https://m.media-amazon.com/images/I/71e1ieNz5KL._SY879_.jpg"
              rating={4}
            />
            <Product
              id="34920398"
              title="UNITED COLORS OF BENETTON Men's T-Shirt"
              price={110}
              image="https://m.media-amazon.com/images/I/615I5iIw5xL._SX679_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="59382823"
              title="Amazon Brand - Symbol Men's Baggy Jeans (Loose Fit) "
              price={99}
              image="https://m.media-amazon.com/images/I/716BUeTWFoL._SY879_.jpg"
              rating={4}
            />
            <Product
              id="84938339"
              title="Fastrack Men's Sunglasses"
              price={49}
              image="https://m.media-amazon.com/images/I/61xbGkFmwvL._SX679_.jpg"
              rating={4}
            />
            <Product
              id="38492023"
              title="Titan Analog OffWhite Dial Men's Watch NM1712YM02 / NL1712YM02"
              price={120}
              image="https://m.media-amazon.com/images/I/81i82VwpX8L._SX679_.jpg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="73639300"
              title="Jack & Jones Mens Denim Jacket"
              price={99}
              image="https://m.media-amazon.com/images/I/61vMT66wv3L._SY879_.jpg"
              rating={4}
            />
            <Product
              id="83726392"
              title="Pepe Jeans Men's Regular Fit Shirt"
              price={70}
              image="https://m.media-amazon.com/images/I/71wVvF9GsOL._SX679_.jpg"
              rating={4}
            />
            <Product
              id="36728301"
              title="Amazon Brand - Symbol Men's Mid Length Kurta with Pattern (Regular Fit)"
              price={99}
              image="https://m.media-amazon.com/images/I/81ZrVtcKFrL._SY879_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>

      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/2023/Auto/Helmet_Store/Header/pc1.gif"
        className="imageBanner"
      />

      <div className="home">
        <div className="home_container">
          <div className="home_row">
            <Product
              id="89201992"
              title="Steelbird SBH-34 Jai Shree Ram"
              price={100}
              image="https://m.media-amazon.com/images/I/8113DMg3INL._SX679_.jpg"
              rating={3}
            />
            <Product
              id="13234145"
              title="Vega Off Road Sketch ISI Certified Gloss Finish Full Face Dual Visor with Peak Helmet"
              price={120}
              image="https://m.media-amazon.com/images/I/61CIu1ns4ZL._SX679_.jpg"
              rating={4}
            />
            <Product
              id="34920398"
              title="Axor Apex Venomous ISI ECE DOT Certified Full Face Dual Visor Helmet "
              price={120}
              image="https://m.media-amazon.com/images/I/41Ra2cpF+3L._SX300_SY300_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="59382823"
              title="Axor Apex Venomous ISI ECE DOT Certified Full Face Dual Visor Helmet "
              price={119}
              image="https://m.media-amazon.com/images/I/41777D6GaRL._SY300_SX300_QL70_FMwebp_.jpg"
              rating={4}
            />
            <Product
              id="84938339"
              title="Axor Apex Venomous ISI ECE DOT Certified Full Face Dual Visor Helmet"
              price={159}
              image="https://m.media-amazon.com/images/I/61f14HpI+hL._SX679_.jpg"
              rating={4}
            />
            <Product
              id="38492023"
              title="Ignyte IGN-4 Trever ISI / DOT Certified Double Visor Full Face Helmet"
              price={120}
              image="https://m.media-amazon.com/images/I/512Z9DKfq+L._SY300_SX300_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>

      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1%20(1)hdfslklgs.jpg"
        className="imageBanner"
      />

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
              title="Low-Top Lace-Up Sneakers"
              price={99}
              image="https://assets.ajio.com/medias/sys_master/root/20230228/z0n6/63fe1f06aeb26924e3993594/-473Wx593H-469435738-white-MODEL.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
