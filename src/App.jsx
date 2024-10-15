import React, { useEffect } from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiFillFileImage,
  AiTwotoneFileImage,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FcGoogle, FcPhotoReel } from "react-icons/fc";
import sanjoyRoy from "./assets/sanjoy-roy.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <main className="top-0">
        <section className="h-screen w-full flex flex-col justify-center items-center gap-1 bg-[url('./assets/net.webp')] bg-contain bg-no-repeat bg-center">
          <a
            className=""
            href="https://github.com/sanjoy-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-32 rounded-full bg-transparent"
              src={sanjoyRoy}
              alt="Sanjoy Roy"
              loading="lazy"
              data-aos="fade-zoom-in"
            />
          </a>
          <div className="text-center">
            <h1 data-aos="fade-left">
              <a
                href="https://github.com/sanjoy-git"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-2xl text-slate-900"
              >
                Sanjoy Roy
              </a>
            </h1>
            <h2
              className=" text-[15pt] text-slate-800 "
              data-aos="zoom-up"
              data-aos-delay="500"
            >
              <a
                href="https://www.google.com/search?q=sanjoy+roy+web+developer&oq=sanjoy+roy+web+developer&aqs=chrome.0.69i59j69i64j69i60l2.5904j0j7&sourceid=chrome&ie=UTF-8"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:font-bold"
              >
                Passionate about Web development & SEO & Content creation.
              </a>
            </h2>
          </div>

          {/* Update info link */}
          <div className="flex text-3xl gap-3 justify-center flex-wrap items-center mt-3">
            <a
              className="text-slate-950 transition-all animate-bounce rounded hover:animate-none hover:bg-slate-100"
              href="https://github.com/sanjoy-git"
              target="_blank"
              rel="noopener noreferrer"
              data-aos=""
            >
              <AiFillGithub />
            </a>
            {/* <a
              className="text-red-600"
              href="https://www.youtube.com/@sanjoy-roy"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <AiFillYoutube />
            </a>
            <a
              className="text-blue-600"
              href="https://www.linkedin.com/in/sanjoy-in"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="text-blue-600"
              href="https://www.facebook.com/sanjoyroydev"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <AiFillFacebook />
            </a>
            <a
              className="text-red-400"
              href="https://www.instagram.com/sanjoy_.roy"
              target="_blank"
              data-aos="fade-up"
              rel="noopener noreferrer"
              data-aos-delay="400"
            >
              <AiFillInstagram />
            </a>
            <a
              className="text-slate-900"
              href="https://sites.google.com/view/sanjoy-roy"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <FcPhotoReel />
            </a>
            <a
              className="text-slate-900"
              href="https://www.google.com/search?q=sanjoy+roy+web+developer&oq=sanjoy+roy+web+developer&aqs=chrome.0.69i59j69i64j69i60l2.5904j0j7&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <FcGoogle />
            </a> */}
          </div>
        </section>
      </main>
      <footer className="h-20"></footer>
    </div>
  );
}
