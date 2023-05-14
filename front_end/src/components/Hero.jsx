import HeroPhoto from "../assets/AppFiles/Hero.json";
import { Link } from "react-scroll";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section id="home" className="md:px-48 px-4   md:py-36 py-10  font-roboto">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-4">
        {/* Right / Top Side */}
        <div className="flex flex-col justify-center gap-3  ">
          <div className="flex flex-col  gap-3 md:mx-0 mx-auto">
            <p className="font-patrick md:text-5xl text-4xl flex md:justify-start justify-center">
              Hello,
            </p>
            <p className="font-exo md:text-6xl text-3xl">Sumiyo Technology</p>
            <p className="font-patrick md:text-5xl text-4xl flex md:justify-start justify-center">
              Welcomes You !
            </p>
          </div>
          <div className=" md:max-w-[500px] max-w-[300px] md:py-8 py-4 md:mx-0 mx-auto">
            <p className=" md:text-left text-center text-xl">
              Sumiyo Technology produces zipper-making machines, offers
              manufacturing-based solutions with software and services. Their
              philosophy is "Be the change", aiming to create indispensable
              equipment and share their passion with stakeholders.
            </p>
          </div>
          <div className="flex md:gap-7 gap-3  md:mx-0 mx-auto">
            <button className=" px-3 py-2  ease-in-out delay-150 bg-[#D9D9D9] rounded-full md:hover:-translate-y-1 md:hover:scale-110  duration-300 ">
              <Link
                to="contact"
                smooth={true}
                offset={0}
                duration={500}
                className=" md:text-lg text-sm  "
              >
                Contact Sumiyo
              </Link>
            </button>
            <button className=" px-3 py-2 rounded-full ease-in-out delay-150 bg-ccblue md:hover:-translate-y-1 md:hover:scale-110  duration-300 ">
              <a
                href="https://drive.google.com/file/d/1YqdSVKovImieke2Re9plxBYI9fuRJfyu/view?usp=share_link"
                target="_blank"
                className="md:text-lg text-sm"
              >
                ISO Certification
              </a>
            </button>
          </div>
        </div>
        {/* Left / Button Side */}
        <div className=" md:w-[500px] w-[300px] h-auto  ">
          <Lottie animationData={HeroPhoto} />
        </div>
      </div>
    </section>
  );
}
