import AboutPhoto from "../assets/AppFiles/About Us.json";
import Lottie from "lottie-react";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center md:px-14 px-3 py-2 bg-ccblue">
        <div className="md:text-base text-sm font-light font-roboto">
          We are Glad for your Interest!
        </div>
        <div className="font-bold font-patrick md:text-6xl text-3xl pb-4 ">
          KNOW ABOUT SUMIYO
        </div>
        <div className="md:text-base text-sm font-light font-roboto max-w-2xl text-center">
          Curious about Sumiyo Technology! Sumiyo Technology produces
          zipper-making machines, offers manufacturing-based solutions with
          software and services.
        </div>
      </div>
      <div className="md:px-48 px-4   md:pb-24 pb-10 h-full w-full font-roboto">
        <div className="flex md:flex-row flex-col-reverse md:justify-between items-center md:gap-4 gap-0 ">
          {/* Left / Bottom Side */}
          <div className=" md:w-[500px] w-[350px] h-auto  ">
            <Lottie animationData={AboutPhoto} />
          </div>
          {/* Right / Top Side */}
          <div className="flex flex-col justify-center md:pt-24 pt-10  ">
            <div className="md:text-4xl  text-xl  md:mx-0 mx-auto md:pb-10 pb-3">
              <p>About Sumiyo Technology</p>
            </div>
            <div className="flex flex-col gap-2 md:max-w-[500px] max-w-[300px]  md:py-8 py-0 md:pt-0 pt-4 md:text-left text-center items-start md:mx-0 mx-auto">
              <p>
                Sumiyo Technology was founded in 2022 to manufacture and sell
                zipper-making machines and tools.
              </p>
              <p>
                The company has expanded its product lineup to meet the evolving
                technological needs of various fields and aims to offer
                manufacturing-based solutions that combine software and services
                to quickly create competitive products.
              </p>
              <p>
                Sumiyo Technology's corporate philosophy is "Be the change" and
                its goal is to create indispensable equipment, materials, and
                services.
              </p>
              <p>
                The company seeks to share its joy and passion with all
                stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
