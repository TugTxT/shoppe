import React, { useState } from "react";
import productsList from "../../data/Products";
import HomepageStyle from "../../styled/HomepageIKEA";
import HoverCard from "../../component/util/HoverCard/HoverCard";
import categories from "../../data/Categories";

import Tippy from "@tippyjs/react/headless";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PopularCategories from "../../data/PopularCategories";

const HomepageIKEA = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
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
    </HomepageStyle>
  );
};

export default HomepageIKEA;
