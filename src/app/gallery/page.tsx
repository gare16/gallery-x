"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../gallery.css";
import { Carousel } from "react-responsive-carousel";
import { Snowfall } from "react-snowfall";

const Gallery = () => {
  return (
    <>
      <Snowfall color="black" />
      <section className="section">
        <h1 className="w-full text-3xl text-center bold animate-bounce">
          {" "}
          Jelek kan?{" "}
        </h1>
        <div className="grid">
          {" "}
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <div className="item"></div>
          <section className="flex justify-center">
            <img
              className=" h-full"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
          </section>
          <div className="item item--medium"></div>
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <section className="flex justify-center">
            <img
              className=" h-full"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
          </section>
          <div className="item"></div>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <Carousel className="w-[800px] mt-10">
          <div>
            <iframe
              allowFullScreen
              className="video-frame"
              src="https://mega.nz/embed/UXkC1aIB#yR6267JodYbpQ_IPUnZQMVs1Oe6X6Ruuz0OIVqjB43Y"
            ></iframe>
          </div>
          <div>
            <iframe src="https://mega.nz/embed/Ve1X0LhT#SuomWSYJiMTfbFp7v8cy3114qBbLHPHjfPj0abuhouA"></iframe>
          </div>
          <div>
            <iframe src="https://mega.nz/embed/FLlHgRCQ#1JJ2MrXvSBzZhf9e7qMqw9PAATLNfDAbLrE_s2bRZeo"></iframe>
          </div>
          <div>
            <iframe src="https://mega.nz/embed/Ve1X0LhT#SuomWSYJiMTfbFp7v8cy3114qBbLHPHjfPj0abuhouA"></iframe>
          </div>
          <div>
            <iframe src="https://mega.nz/embed/sPECRTpA#DyJ9_UG5hINk7OyyHBIQYN8n3GO-8PpOsSdzzrN3Abs"></iframe>
          </div>
        </Carousel>
      </section>

      <section className="section">
        <div className="grid">
          <div className="item"></div>
          <div className="item item--large"></div>
          <div className="item item--medium"></div>
          <section className="flex justify-center">
            <img
              className=" h-full"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
          </section>
          <div className="item item--large"></div>
          <div className="item item--medium"></div>
          <div className="item item--full"></div>
          <section className="flex justify-center">
            <img
              className=" h-full"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
          </section>
          <div className="item"></div>
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <section className="flex justify-center">
            <img
              className=" h-full"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
          </section>
        </div>
        <h1 className="w-full text-2xl text-center"> Nyesel kan? </h1>
      </section>
    </>
  );
};

export default Gallery;
