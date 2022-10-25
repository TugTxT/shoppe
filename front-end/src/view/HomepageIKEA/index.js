import React, { useState } from "react";
import productsList from "../../data/Products";
import HomepageStyle from "../../styled/HomepageIKEA";
import HoverCard from "../../component/util/HoverCard/HoverCard";
import categories from "../../data/Categories";
import PopularCategories from "../../data/PopularCategories";
import Rooms from "../../data/Rooms";
import delivery from "../../assets/svgIcons/delivery.svg";
import collect from "../../assets/svgIcons/collect.svg";
import assembly from "../../assets/svgIcons/assembly.svg";
import credit_card from "../../assets/svgIcons/credit-card.svg";

import Tippy from "@tippyjs/react/headless";
import Slider from "react-slick";
import { HeartOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

const HomepageIKEA = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // beforeChange : (current,next) => setSlideIndex(next)
  };

  const [slide, setSlide] = useState();

  const [slideInsta, setSlideInsta] = useState();

  const [roomFilter, setRoomFilter] = useState("All");

  const instagram_image = [
    "https://cdn-yotpo-images-production.yotpo.com/instagram/26/18253470688138226/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/39/17959962665033239/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/85/18195003757175485/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/36/17990173615559536/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/15/17966441044895715/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/5/17908159598638105/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/36/17847522104842536/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/46/17914870970082746/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/33/17941392604393533/standard_resolution.jpg",
  ];

  const rooms_image = [
    "https://www.ikea.com/ext/ingkadam/m/6624b8c6d7b521e4/original/PH176180-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/637824d985f01bac/original/PH181307-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/6f1cba42d7e45883/original/PH162921-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/6b6cc7f1e45dc5a9/original/PH181383-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/2eeee0d73e5e3078/original/PH186905.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/514d0d7d792d1f3/original/PH159987-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/38e77143a45d6125/original/PH161183-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/7c2adecbe5ac3037/original/PH180205.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/4477772fd30ad69e/original/PH181303-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/59059ced2ce768d/original/PH180154-crop002.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/3d982d972636b093/original/PH157148-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/7c923e19aaaa90b5/original/PH168401-crop003.jpg?f=xs",
  ];

  return (
    <HomepageStyle>
      <section>
        <div className="pub-teaser-header">
          <div className="pub-teaser-info">
            <h2>Cozy up your living room for fall!</h2>
            <p>
              Give your space an affordable autumn refresh with comfy seating,
              warm lights and fresh textiles.
            </p>
          </div>
          <div>
            <a href="/ikea">Shop living room</a>
          </div>
        </div>
        <div className="pub-teaser-body">
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/1b2b64dff6d6f43c/original/PH185020.jpg?f=m"
            />
            <span>
              {productsList.slice(0, 5).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/5f265f6e452e9176/original/PH186980-crop001.jpg?f=xxs"
            />
            <span>
              {productsList.slice(5, 6).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/4ac987f9a4ebe1b8/original/PH186991-crop001.jpg?f=xxs"
            />
            <span>
              {productsList.slice(6, 8).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/cf905e8929140e2/original/PH188014.jpg?f=xxs"
            />
            <span>
              {productsList.slice(8, 13).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/117dd0ea7965dfee/original/PH186087.jpg?f=xxs"
            />
            <span>
              {productsList.slice(13, 16).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2>Shop our top categories</h2>
      </section>
      <div className="carousel">
        <Slider ref={(c) => setSlide(c)} {...settings}>
          {categories.map((item) => (
            <div>
              <a href={`/ikea/categories/${item.name}`}>
                <img alt="" src={item.attachment} />
                <span>{item.name}</span>
              </a>
            </div>
          ))}
        </Slider>
        <div className="btn-arrow">
          <LeftOutlined onClick={() => slide.slickPrev()} />
          <RightOutlined onClick={() => slide.slickNext()} />
        </div>
      </div>

      <section>
        <h2>Popular categories</h2>
        <div className="categories-grid">
          {PopularCategories.map((item) => (
            <div className="category-card">
              <img alt="" src={item.attachment} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>As seen on Instagram</h2>
        <p>
          See how our products look in real homes! Share your photos on
          Instagram with #MyIKEAUSA or tag @IKEAUSA for a chance to be seen
          here!
        </p>
      </section>
      <div className="carousel instagram">
        <Slider
          ref={(c) => setSlideInsta(c)}
          infinite={false}
          slidesToShow={3.1}
          slidesToScroll={3}
        >
          {instagram_image.map((item) => (
            <div>
              <img alt="" src={item} />
            </div>
          ))}
        </Slider>
        <div className="btn-arrow">
          <LeftOutlined onClick={() => slideInsta.slickPrev()} />
          <RightOutlined onClick={() => slideInsta.slickNext()} />
        </div>
      </div>

      <section>
        <h2>Services to help you shop</h2>
        <div className="services-container">
          <div className="service-items">
            <img alt="" src={delivery} />
            <h3>Delivery</h3>
            <p>Shop from home and get it delivered to your front door.</p>
            <a href="/ikea">Learn more</a>
          </div>
          <div className="service-items">
            <img alt="" src={collect} />
            <h3>Click & Collect</h3>
            <p>Buy online, pick-up in store.</p>
            <a href="/ikea">Learn more</a>
          </div>
          <div className="service-items">
            <img alt="" src={assembly} />
            <h3>Taskrabbit Assembly</h3>
            <p>Find flexible and affordable ways to get your to-dos done.</p>
            <a href="/ikea">Learn more</a>
          </div>
          <div className="service-items">
            <img alt="" src={credit_card} />
            <h3>Ways to pay</h3>
            <p>Finance your dream home with our credit cards. </p>
            <a href="/ikea">Learn more</a>
          </div>
        </div>
        <a className="service-button" href="/ikea">
          <span>View all services</span>
        </a>
      </section>

      <section>
        <h2>Design inspiration and modern home ideas </h2>
        <div className="filter-bar">
          {Rooms.map((item, index) => (
            <span
              onClick={() => setRoomFilter(item)}
              className={`${roomFilter === item ? "active" : ""}`}
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="rooms-grid">
          {rooms_image.map((item, index) => (
            <div key={index} className="room-card">
              <img loading="lazy" alt="" src={item} />
              <HeartOutlined />
            </div>
          ))}
        </div>
        <div className="load-more">
          <span>Load 12 more</span>
        </div>
      </section>

      <section>
        <h2>This is IKEA</h2>
        <div className="services-container introduction">
          <div className="service-items">
            <h3>Sustainable everyday</h3>
            <p>
              How sustainable is IKEA? Well, more sustainable every day. With
              products like veggie hot dogs, and energy-saving solutions, we’re
              paving the way for more sustainable homes for the many.{" "}
            </p>
            <a href="/ikea">Learn more</a>
          </div>
          <div className="service-items">
            <h3>Climate and environment</h3>
            <p>
              Find out how IKEA invests, inspires and acts to tackle
              environmental issues, reduce carbon footprints and drive positive
              change on a global scale.
            </p>
            <a href="/ikea">Learn more</a>
          </div>
          <div className="service-items">
            <h3>Work with us</h3>
            <p>
              Coming from all over the world, our IKEA co-workers share a
              special set of values and a vision to enable people to live a
              better, more sustainable everyday life. They come together within
              diverse, inclusive, open IKEA work environments, where each of
              them offers something unique.
            </p>
            <a href="/ikea">Learn more</a>
          </div>
        </div>
      </section>
    </HomepageStyle>
  );
};

export default HomepageIKEA;
