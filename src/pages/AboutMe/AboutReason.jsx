import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import JpImg from "../../img/about_jap.jpeg";
import TriImg from "../../img/about_tri.jpeg";
import WebImg from "../../img/about_web.jpeg";

const AboutReason = ({ scrollTop }) => {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const reasonScroll = document.querySelector("#reasonScroll");
    const reasonScrollTop = reasonScroll.scrollHeight;
    // console.log(reasonScrollTop);

    const whyShow = () => {
      if (scrollTop >= reasonScrollTop && scrollTop <= reasonScrollTop + 1200) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    };

    window.addEventListener("scroll", whyShow);
    return () => window.removeEventListener("scroll", whyShow);
  });

  return (
    <section className="relative z-0 w-screen h-auto">
      {/* bg */}
      <div className="w-full h-screen fixed top-0 z-10 bg-aboutBg bg-cover bg-center bg-no-repeat sm:opacity-40"></div>

      <div
        id="reasonScroll"
        className="relative z-20 sm:h-[1700px] mx-5 my-10  sm:m-auto"
      >
        <div
          className={`hidden fixed sm:top-20 2xl:top-32 sm:block sm:left-[10%] 2xl:left-[20%] h-auto text-left bg-white shadow-lg cursor-pointer ease-in duration-200
          ${scrollState ? "opacity-100 fixed top-0" : "opacity-0"}`}
        >
          <Scroll to="whyJapan" smooth={true} duration={800}>
            <p
              className="text-txfs font-bold text-ftcolor px-16 py-12 ease duration-300 hover:bg-ftcolor hover:text-white"
              // onClick={}
            >
              １、どうして日本に？
            </p>
          </Scroll>

          <Scroll to="whyTri" smooth={true} duration={800}>
            <p className="text-txfs font-bold text-ftcolor px-16 py-12 ease duration-300 hover:bg-ftcolor hover:text-white">
              ２、どうして旅行が好き？
            </p>
          </Scroll>

          <Scroll to="whyWeb" smooth={true} duration={800}>
            <p className="text-txfs font-bold text-ftcolor px-16 py-12 ease duration-300 hover:bg-ftcolor hover:text-white">
              ３、どうしてWEBコース？
            </p>
          </Scroll>
        </div>

        <div
          className="sm:absolute top-10 sm:right-[10%] 2xl-[15%] sm:w-[600px] h-auto text-ftcolor"
          id="whyJapan"
        >
          <div className="sm:w-[600px] h-auto mb-10 pb-10 bg-white shadow-2xl">
            <img
              className="w-full sm:h-[300px] object-cover"
              src={JpImg}
              alt="jpimg"
            />
            <h1 className="text-txfs sm:text-2xl font-bold px-10 py-8">
              1、どうして日本に？
            </h1>
            <p className="text-txf sm:text-txfs px-10">
              中学生の時、一度日本に旅行へ行って日本の景色を見た後、好きになりました。日本は香港と違って四季がはっきりしているので、香港では決して見ることが出来ない素敵な経験でした。{" "}
            </p>
          </div>

          <div
            className="sm:w-[600px] h-auto mb-10 pb-10 bg-white shadow-2xl"
            id="whyTri"
          >
            <img
              className="w-full sm:h-[300px] object-cover"
              src={TriImg}
              alt="triImg"
            />
            <h1 className="text-txfs sm:text-2xl font-bold px-10 py-8">
              2、どうして旅行が好き？
            </h1>
            <p className="text-txf sm:text-txfs px-10">
              香港にいる時、たまに国際交流会に参加していました。様々な国籍な人と出会って、色々な異文化の話を聞いて、外国に行ってみたいなという気持ちが強くなりました。{" "}
            </p>
          </div>

          <div
            className="sm:w-[600px] h-auto mb-10 pb-10 bg-white shadow-2xl"
            id="whyWeb"
          >
            <img
              className="w-full sm:h-[300px] object-cover"
              src={WebImg}
              alt="webimg"
            />
            <h1 className="text-txfs sm:text-2xl font-bold px-10 py-8">
              ３、どうしてWEBコース？
            </h1>
            <p className="text-txf sm:text-txfs px-10">
              昔旅行Blogが好きでBlogを通じて色々な人の旅行体験と経験を見ることがWebに興味を持ったきっかけです。その時の経験から興味が湧き、Webコースで学ぼうと思ったきっかけです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutReason;
