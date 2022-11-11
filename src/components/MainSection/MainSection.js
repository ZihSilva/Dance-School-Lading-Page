import image5 from "../../images/balletadance.jpg"
import image6 from "../../images/ballet.jpg"


export function MainSection() {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-600  dark:text-gray-400">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-pink-600 dark:text-white">
              <p>Welcome to</p> 
             <p className=" to-pink-500 text-6xl ml-1 pr-4"> Leap Forward </p>  
              Dance School
            </h2>
            <p className="mb-4">
            Leap Forward Dance School opened for the first time September 7th
            2013 in the heart of Langford, Victoria, BC. Leap Forward Dance
            School began with a dream. We are now striving to make that dream
            and the dreams of our students come true. 
            </p>
            <p>
            We are committed to the goal of providing quality skilled instructions in a supportive and
            positive setting to dancers of all ages and abilities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={image5} 
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={image6}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
