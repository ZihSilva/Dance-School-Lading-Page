import { Link } from "react-router-dom"

export function PricingCard() {
  return (
    <div>
  <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Monthly Fees</h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">30 minutes classes</h3>
              <p className="font-bold text-gray-500 sm:text-lg dark:text-gray-500">Ballet, Jazz, Hip Hop and Tap</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$59</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* List */}
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>GST included</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>$35 Registration Fee due at the time of registration. </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>$100 costume fee due at the time of registration</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>$100 costume fee due at the time of registration</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>5% discount applied to total tuition fees for remaining month in the term, if fees are paid in full on or before October 31st 2022.</span>
                </li>
              </ul>
              <Link to="#" className="text-gray-900 bg-blue-100 hover:bg-blue-400 hover:text-white focus:ring-4 focus:ring-rose-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-rose-900">Enrol now</Link>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">45 minutes classes</h3>
              <p className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">Ballet, Jazz, Hip Hop and Tap</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$69</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* List */}
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>GST included</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>$35 Registration Fee due at the time of registration. </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>$100 costume fee due at the time of registration</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>$100 costume fee due at the time of registration</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>5% discount applied to total tuition fees for remaining month in the term, if fees are paid in full on or before October 31st 2022.</span>
                </li>
              </ul>
              <Link href="#" className="text-gray-900 bg-blue-100 hover:bg-rose-400 hover:text-white focus:ring-4 focus:ring-rose-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-rose-900">Enrol now</Link>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">60 minutes classes</h3>
              <p className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">Ballet, Jazz, Hip Hop and Tap</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$75</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* List */}
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>GST included</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>$35 Registration Fee due at the time of registration. </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>$100 costume fee due at the time of registration</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>$100 costume fee due at the time of registration</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5  text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>5% discount applied to total tuition fees for remaining month in the term, if fees are paid in full on or before October 31st 2022.</span>
                </li>
              </ul>
              <Link to="#" className="text-gray-900 bg-blue-100 hover:bg-rose-400 hover:text-white focus:ring-4 focus:ring-rose-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-rose-900">Enrol now</Link>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}
