import React from "react";
import productsList from "../../data/Products";
import HomepageStyle from "../../styled/HomepageIKEA";

import Tippy from "@tippyjs/react/headless";
import HoverCard from "../../component/util/HoverCard/HoverCard";

const HomepageIKEA = () => {
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
                  <div className="pub-teaser"></div>
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
                  <div className="pub-teaser"></div>
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
                  <div className="pub-teaser"></div>
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
                  <div className="pub-teaser"></div>
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
                  <div className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
        </div>
      </section>
    </HomepageStyle>
  );
};

export default HomepageIKEA;
