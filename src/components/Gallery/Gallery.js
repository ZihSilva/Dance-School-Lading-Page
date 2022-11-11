export function Gallery() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Gallery
          </h1>
          <div className= 'flex justify-center mt-10'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-purple-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Kinder Dance
            </span>
          </button> 
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-purple-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Pre-school Dance
            </span>
          </button> 
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-purple-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Creative Dance
            </span>
          </button> 
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-purple-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Youth Dance
            </span>
          </button> 
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-purple-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Level One Ballet and Up
            </span>
          </button> 
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('https://www.sassymamasg.com/wp-content/uploads/2017/04/best-dance-classes-kids-toddlers-singapore-ballet.jpg')]">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                  Kinder Dance
                </h2>
                <p className="mt-2 text-lg tracking-wider text-purple-600 uppercase dark:text-blue-400 ">
                  Ballet
                </p>
              </div>
            </div>

            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('https://static.wixstatic.com/media/e9f7b5_d66e0de146134343863a86c15207d52a~mv2.jpg/v1/fill/w_640,h_370,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e9f7b5_d66e0de146134343863a86c15207d52a~mv2.jpg')]">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                  Pre-school Dance
                </h2>
                <p className="mt-2 text-lg tracking-wider text-purple-600 uppercase dark:text-blue-400 ">
                  Ballet
                </p>
              </div>
            </div>

            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('https://www.24-7pressrelease.com/assets/attachments/048/press_release_distribution_0484700_169503.jpg')]">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                  Creative Dance
                </h2>
                <p className="mt-2 text-lg tracking-wider text-purple-600 uppercase dark:text-blue-400 ">
                  Jazz
                </p>
              </div>
            </div>

            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('https://kevsbest.com/wp-content/uploads/2020/05/5-Best-Dance-Schools-in-Austin.jpg')]">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                  Youth Ballet
                </h2>
                <p className="mt-2 text-lg tracking-wider text-purple-600 uppercase dark:text-blue-400 ">
                  Ballet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
