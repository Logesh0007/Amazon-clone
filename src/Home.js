import React from "react";
import "./Home.css";
import Product from "./Product";
import Banner from "./Banner";
import Header from "./Header";
// import FlipMove from "react-flip-move";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <div className="home__gradient">
            <Banner />
          </div>

          <div className="home__products">
            <div className="home__row">
              <Product
                id={1}
                title="AmazonBasics"
                desc="81 cm (32 inches) HD Ready Smart LED Fire TV AB32E10SS (Black)"
                price={11999}
                img="https://m.media-amazon.com/images/I/61S+ZtblluL._SX522_.jpg"
                rating={4}
              />
              <Product
                id={2}
                title="Samsung 163 cm (65 inches)"
                desc="4K Ultra HD Smart LED TV UA65AU7700KLXL (Titan Gray) (2021 Model)"
                price={16000}
                img="https://images-eu.ssl-images-amazon.com/images/I/31wu2ZvKZOL._SY300_SX300_QL70_FMwebp_.jpg"
                rating={2}
              />
            </div>

            <div className="home__row">
              <Product
                id={3}
                title="boAt Rockerz"
                desc="550 Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation Bluetooth Wireless Over Ear Headphones with Mic (Army Green)"
                price={1499}
                img="https://m.media-amazon.com/images/I/61wkUsZxKjL._SX522_.jpg"
                rating={3}
              />
              <Product
                id={4}
                title="New Apple AirPods"
                desc="(3rd Generation)"
                price={16499}
                img="https://m.media-amazon.com/images/I/615ekapl+pL._AC_UY327_FMwebp_QL65_.jpg"
                rating={1}
              />
              <Product
                id={5}
                title="JBL C115 True"
                desc="Wireless Earbuds with Mic, Jumbo 21 Hours Playtime with Quick Charge, True Bass, Dual Connect, Bluetooth 5.0, Type C & Voice Assistant Support for Mobile Phones (Red)"
                price={2999}
                img="https://m.media-amazon.com/images/I/71tvUuuUO7L._SX522_.jpg"
                rating={3}
              />
            </div>

            <div className="home__row">
              <Product
                id={6}
                title="Samsung LC49HG90DMUXEN"
                desc="48.9-inch Ultra Wide Curved Monitor (Black)"
                price={135900}
                img="https://m.media-amazon.com/images/I/71MlcO29QOL._SX522_.jpg"
                rating={4}
                width="65%"
              />
              <Product
                id={7}
                title="Samsung Galaxy S22 Ultra 5G"
                desc="(Burgundy, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                price={109999}
                img="https://m.media-amazon.com/images/I/71J8tz0UeJL._SX522_.jpg"
                rating={5}
                width="30%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
