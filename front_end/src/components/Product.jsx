import { Machinery_Data, Tools_and_Dies_Data } from "../constant/index";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Product() {
  return (
    <section id="product">
      <div className="flex flex-col items-center justify-center md:px-14 px-3 py-2 bg-grey">
        <div className="md:text-base text-sm font-light font-roboto">
          Checkout the Our Products that we Offer !
        </div>
        <div className="font-bold font-patrick md:text-6xl text-2xl md:pb-4 pb-2 ">
          Sumiyo's Available Products
        </div>
        <div className="md:text-base text-sm font-light font-roboto max-w-2xl text-center">
          Sumiyo's Product Line is Divided into two parts, first one is
          Machinery and the second is Tools and Dies. Contact us to order the
          Product of your choice.
        </div>
      </div>
      <div className="md:px-48 px-4   md:py-7 py-3">
        <div className="flex flex-col justify-between ">
          <h1 className="flex py-5 px-3 font-roboto md:text-4xl text-xl ">
            Machinery...
          </h1>
          <div className="flex overflow-x-scroll py-auto hide-scroll-bar ">
            <div className="flex flex-nowrap snap-x snap-mandatory ">
              {Machinery_Data.map((machine) => {
                return (
                  <div
                    key={machine.key}
                    className="inline-block px-3 py-7 snap-center"
                  >
                    <div className="md:w-80 w-72 h-full  max-w-xs bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                      <img
                        src={machine.photo}
                        alt="HeroPhoto"
                        className="md:h-52 h-44 w-auto mx-auto py-3 "
                      />

                      <div className="p-3">
                        <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 ">
                          {machine.title}
                        </h5>

                        <p className="mb-3 md:text-base text-sm font-normal  text-gray-700">
                          {machine.discription}
                        </p>

                        <a
                          href={machine.link}
                          target="_blank"
                          className="inline-flex items-center px-3 py-2 gap-2  text-sm font-medium text-center cursor-pointer text-white bg-black rounded-lg"
                        >
                          <p>More Info</p>
                          <ArrowOutwardIcon className="" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <h1 className="flex py-5 px-3 font-roboto md:text-4xl text-xl ">
            Tools and Dies...
          </h1>
          <div className="flex overflow-x-scroll py-auto hide-scroll-bar ">
            <div className="flex flex-nowrap snap-x snap-mandatory ">
              {Tools_and_Dies_Data.map((tool_dies) => {
                return (
                  <div
                    key={tool_dies.key}
                    className="inline-block px-3 py-7 snap-center"
                  >
                    <div className="md:w-80 w-72 h-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                      <img
                        src={tool_dies.photo}
                        alt="HeroPhoto"
                        className="md:h-52 h-44 w-auto mx-auto py-3 "
                      />

                      <div className="p-5 ">
                        <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 ">
                          {tool_dies.title}
                        </h5>

                        <p className="mb-3 md:text-base text-sm font-normal  text-gray-700">
                          {tool_dies.discription}
                        </p>

                        <a
                          href={tool_dies.link}
                          target="_blank"
                          className="inline-flex items-center px-3 py-2 gap-2  text-sm font-medium text-center cursor-pointer text-white bg-black rounded-lg"
                        >
                          <p> More Info</p>
                          <ArrowOutwardIcon className="" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
