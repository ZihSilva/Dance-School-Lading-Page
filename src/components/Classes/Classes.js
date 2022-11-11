import image3 from "../../images/balletclasses.jpg";
import image4 from "../../images/balletclasses.jpg";
import image5 from "../../images/jazzdance.jpeg";
import image6 from "../../images/elementary-hip-hop.jpg";

export function Classes() {
  return (
    <div class="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full object-cover" src={image3} alt="Mountain" />
        <div class="px-4 py-4">
          <div class="font-bold text-xl mb-2">Ballet</div>
          <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet. Nam quam nobis et sunt totam et incidunt quos. Sed nostrum tempore sit nulla esse et esse quia. Qui laboriosam ducimus qui unde reiciendis ut quia nulla. A omnis vitae ea nobis rerum ut accusantium tempore aut ipsam atque tempore aut ipsam atque.
          </p>
        </div>
        <div class="px-6 pt-4 flex content-end">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-blue-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-00 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              REGISTER NOW
            </span>
          </button>
        </div>
      </div>
      

      
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full object-fill" src={image6} alt="Tap" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Jazz</div>
          <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet. Nam quam nobis et sunt totam et incidunt quos. Sed nostrum tempore sit nulla esse et esse quia. Qui laboriosam ducimus qui unde reiciendis ut quia nulla. A omnis vitae ea nobis rerum ut accusantium tempore aut ipsam atque.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex content-end">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-blue-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-100 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              REGISTER NOW
            </span>
          </button>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full object-fill" src={image5} alt="Tap" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Tap</div>
          <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet. Nam quam nobis et sunt totam et incidunt quos. Sed nostrum tempore sit nulla esse et esse quia. Qui laboriosam ducimus qui unde reiciendis ut quia nulla. A omnis vitae ea nobis rerum ut accusantium tempore aut ipsam atque.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex content-end">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-cyan-100 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              REGISTER NOW
            </span>
          </button>
        </div>
      </div>
      
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full object-fill" src={image6} alt="Tap" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Hip Hop</div>
          <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet. Nam quam nobis et sunt totam et incidunt quos. Sed nostrum tempore sit nulla esse et esse quia. Qui laboriosam ducimus qui unde reiciendis ut quia nulla. A omnis vitae ea nobis rerum ut accusantium tempore aut ipsam atque.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex content-end">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-blue-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-100 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              REGISTER NOW
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
