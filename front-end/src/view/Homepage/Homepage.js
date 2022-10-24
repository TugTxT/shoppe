import {
  ArrowRightOutlined,
  SearchOutlined,
  UpOutlined,
} from "@ant-design/icons";
import React, { useRef, useState } from "react";

import PostList from "../../data/Post";
import HomePage from "../../styled/Homepage";
import pause from "../../assets/svgIcons/pause.svg";
import play from "../../assets/svgIcons/play.svg";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setPlaying(!playing);
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <HomePage>
      <section>
        <div className="banner">
          <a href="/">
            <img
              alt=""
              src="https://www.ikea.com/global/en/images/PH_186334_87409ee9fa.jpg?f=xxl"
            />
            <div className="banner_content">
              <p>Just dropped</p>
              <h1>Swedish House Mafia collab</h1>
            </div>
          </a>
        </div>
        <div className={`banner_2 ${open ? "open" : "close"}`}>
          <a className="banner_item" href="/ikea">
            <span>Go shopping</span>
            <ArrowRightOutlined />
          </a>
          {
            <div className="action_search banner_item">
              <div className="search_store">
                {/* <label htmlFor="search-input"></label> */}
                <input id="search-input" placeholder="Find online store" />
                <span>
                  <SearchOutlined />
                </span>
              </div>
            </div>
          }
          <div
            onClick={() => setOpen(!open)}
            className="action_button banner_item"
          >
            <span>
              Online store: <strong>IKEA International Sales</strong>
            </span>
            <span style={{ marginLeft: "10px" }}>
              <UpOutlined />
            </span>
          </div>
        </div>
        <div className="banner_3"></div>
      </section>

      <div className="post_list_display">
        {PostList.map((item) => (
          <div className="post_card" key={item.id}>
            <a href="/">
              <img src={item.attachment} alt="" />
              <div className="post_body">
                <p>{item.description}</p>
                <h2>{item.content}</h2>
              </div>
            </a>
          </div>
        ))}
        <div className="post_card">
          <img
            alt=""
            src="https://www.ikea.com/global/en/images/PE_121718_17b3510426.jpg?f=m"
          />
        </div>
      </div>

      <div className="story_list_display">
        <div className="story">
          <a href="/">
            <img
              alt=""
              src="https://www.ikea.com/global/en/images/Hagberg_start_008a6e757d.jpg?f=m"
            />
            <div className="story_content">
              <p>The IKE Museum</p>
              <h2>The duo behind five decades of IKEA design</h2>
            </div>
            <div className="image_overlay"></div>
          </a>
        </div>
        <div className="story">
          <a href="/">
            <video
              ref={videoRef}
              muted
              loop
              autoPlay
              preload="auto"
              style={{ objectPosition: "50% 50%", borderRadius: "0.5rem" }}
              src="https://www.ikea.com/global/en/images/Us_And_Our_Planet_Loop1_mp4_729b30eb53.mp4"
            ></video>
            <div className="story_content">
              <p>A book to inspire change</p>
              <h2>Us & Our Planet</h2>
            </div>
            <div className="image_overlay"></div>
          </a>
          <div onClick={handlePlayVideo} className="button_play">
            {playing ? (
              <img alt="pause" src={pause} />
            ) : (
              <img alt="play" src={play} />
            )}
          </div>
        </div>
      </div>
    </HomePage>
  );
};

export default Homepage;
