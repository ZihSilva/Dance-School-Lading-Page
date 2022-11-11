import "./Hero.css";
import {image2} from "../../images/ballarina.jpg"

export function Hero() {
  return (
    <div className="bg-no-repeat bg-cover bg-center  w-full h-full
    bg-[url('https://images.pexels.com/photos/6717372/pexels-photo-6717372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
    xl:bg-bg-[url('https://images.pexels.com/photos/6717372/pexels-photo-6717372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
    ">
      <div
        className="flex flex-col items-center justify-start font-sans"
      >
        <div>
          <p className="p-3 pt-12 text-6xl font-bold text-gray-700">
            Welcome to Leap Forward Dance School
          </p>
        </div>
        <div>
          {/* <p className="p-2 text-4xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
            The best dancing school in Langford.
          </p> */}
        </div>
        <div>
          <p className="p-4 pt-6 font-sans text-2xl leading-10 text-center text-gray-700 lg:text-gray-700">
            Leap Forward Dance School opened for the first time September 7th
            2013 in the heart of Langford, Victoria, BC. Leap Forward Dance
            School began with a dream. We are now striving to make that dream
            and the dreams of our students come true. We are committed to the
            goal of providing quality skilled instructions in a supportive and
            positive setting to dancers of all ages and abilities.
          </p>
        </div>
        <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
          <button className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-gray-700 transition-all bg-blue-50 rounded-full shadow-2xl lg:ml-5 hover:bg-blue-400 focus:outline-none ring-4 ring-blue-600 lg:ring-2 lg:font-medium ">
            Learn more
          </button>
          <button className="pt-3 pb-3 mb-5 text-2xl font-semibold text-center text-grey-700 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-gray-700 hover:bg-purple-200 pl-11 pr-11 bg-white focus:outline-none ring-4 ring-purple-500 lg:font-medium lg:text-gray-500  lg:ring-2 lg:ring-purple-700">
            Enrol now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
