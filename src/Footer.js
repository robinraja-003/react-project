import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div id="footer">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>
            <a href="#">Careers</a>
          </p>
          <p>
            <a href="#">Press Releases</a>
          </p>
          <p>
            <a href="#">Amazon Cares</a>
          </p>
        </div>

        <div class="footer-section">
          <h3>Make Money with Us</h3>
          <p>
            <a href="#">Sell on Amazon</a>
          </p>
          <p>
            <a href="#">Sell under Amazon Accelerator</a>
          </p>
          <p>
            <a href="#">Become an Affiliate</a>
          </p>
        </div>

        <div class="footer-section">
          <h3>Amazon Payment Products</h3>
          <p>
            <a href="#">Amazon Business Card</a>
          </p>
          <p>
            <a href="#">Shop with Points</a>
          </p>
          <p>
            <a href="#">Reload Your Balance</a>
          </p>
        </div>

        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>
            <a href="#">Customer Service</a>
          </p>
          <p>
            <a href="#">Help</a>
          </p>
        </div>

        <div class="footer-section">
          <h3>Legal</h3>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Terms of Service</a>
          </p>
        </div>

        <div class="footer-flex">
          <div class="footer-section amazon-logo">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
              onClick={scrollToTop}
            />
          </div>

          <div class="footer-section languages">
            <h3>Languages</h3>
            <label for="language">Select Language:</label>
            <select id="language" name="language">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="italian">Italian</option>
            </select>
          </div>
        </div>
        <div class="footer-middle">
          <div class="footer-section content-section">
            <h3>Amazon Services</h3>
            <p>
              <a href="#">AbeBooks</a>
            </p>
            <p>Books, art & collectibles</p>
            <p>
              <a href="#">Amazon Web Services</a>
            </p>
            <p>Scalable Cloud Computing Services</p>
            <p>
              <a href="#">Audible</a>
            </p>
            <p>Download Audio Books</p>
            <p>
              <a href="#">IMDb</a>
            </p>
            <p>Movies, TV & Celebrities</p>
          </div>
          <div class="footer-section content-section">
            <h3>More Amazon Sites</h3>
            <p>
              <a href="#">Shopbop</a>
            </p>
            <p>Designer Fashion Brands</p>
            <p>
              <a href="#">Amazon Business</a>
            </p>
            <p>Everything For Your Business</p>
            <p>
              <a href="#">Prime Now</a>
            </p>
            <p>2-Hour Delivery on Everyday Items</p>
            <p>
              <a href="#">Amazon Prime Music</a>
            </p>
            <p>100 million songs, ad-free</p>
            <p>Over 15 million podcast episodes</p>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="footer-section">
            <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads</p>
            <p>&copy; 2024 Amazon, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
