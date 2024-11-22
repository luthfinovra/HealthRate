import React from "react";
import NavbarResearcher from "../../components/navbar/navbarResearcher";

import TabelDataArrythmia from "../../components/table/TabelDataArrythmia";

const DataArrythmiaPage = () => {
  return (
    <div>
      <NavbarResearcher />

      <section className="bg-white py-8 lg:py-16 antialiased mt-[80px] mx-[250px] space-y-20">
        <div className="space-y-4 mx-auto px-4">
          <h1 className=" font-semibold text-[42px] leading-none">Arrythmia</h1>
          <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
            Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi
            normal, jantung berdetak dengan ritme yang teratur. Namun, pada
            aritmia, ritme ini terganggu.
          </p>
          <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
            <h1 className="font-medium text-[18px]">Data Records</h1>
            <TabelDataArrythmia />
          </div>
        </div>
        {/* <div className=" mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion (20)
            </h2>
          </div>
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label for="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#554F9B] rounded-lg dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Post comment
            </button>
          </form>
          <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  />
                  Michael Gough
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    Feb. 8, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment1Button"
                data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>
              <div
                id="dropdownComment1"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              Very straight-to-point article. Really worth time reading. Thank
              you! But tools are just the instruments for the UX designers. The
              knowledge of the design tools are as important as the creation of
              the design strategy.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
          <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Jese Leos"
                  />
                  Jese Leos
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate
                    datetime="2022-02-12"
                    title="February 12th, 2022"
                  >
                    Feb. 12, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment2Button"
                data-dropdown-toggle="dropdownComment2"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>
              <div
                id="dropdownComment2"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              Much appreciated! Glad you liked it ☺️
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
          <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie Green"
                  />
                  Bonnie Green
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time pubdate datetime="2022-03-12" title="March 12th, 2022">
                    Mar. 12, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment3Button"
                data-dropdown-toggle="dropdownComment3"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              <div
                id="dropdownComment3"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              The article covers the essentials, challenges, myths and stages
              the UX designer should consider while creating the design
              strategy.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
          <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt="Helene Engels"
                  />
                  Helene Engels
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time pubdate datetime="2022-06-23" title="June 23rd, 2022">
                    Jun. 23, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment4Button"
                data-dropdown-toggle="dropdownComment4"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdownComment4"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              Thanks for sharing this. I do came from the Backend development
              and explored some of the tools to design my Side Projects.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
        </div> */}
      </section>

      <div className="w-full h-full flex flex-col justify-center items-center mt-20 p-6 lg:p-0 lg:pb-12 ">
        <div className="space-y-5 lg:space-y-10 mt-12 lg:mt-32">
          <h1 className="font-semibold text-3xl lg:text-3xl   text-center">
            Check your Heart Rate
          </h1>
          <p className="font-normal text-sm lg:text-base  max-w-[710px] text-center opacity-70">
            If you feel that there is something unclear or need further
            explanation regarding this information, do not hesitate to contact
            us. We are ready to help you understand each step better.
          </p>
        </div>
        <button className="bg-white px-4 py-2 rounded-xl font-medium text-base mt-16">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 9.83614C0 4.41153 4.36382 0 9.76407 0C15.1643 0 19.5281 4.41153 19.5281 9.83614C19.5281 11.1693 19.2643 12.4428 18.7856 13.6047L19.9061 17.2764C20.4163 18.9481 18.7754 20.513 17.1217 19.846L14.1662 18.6541C14.1456 18.6458 14.123 18.6456 14.1023 18.6534L14.0763 18.6632C13.5019 18.9485 12.8953 19.1787 12.2636 19.3468C12.1552 19.3829 12.0454 19.41 11.9349 19.4281C11.2359 19.588 10.5091 19.6723 9.76407 19.6723C4.36382 19.6723 0 15.2607 0 9.83614ZM5.51749 8.65924C4.9652 8.65924 4.51749 9.10696 4.51749 9.65924C4.51749 10.2115 4.9652 10.6592 5.51749 10.6592H5.52844C6.08073 10.6592 6.52844 10.2115 6.52844 9.65924C6.52844 9.10696 6.08073 8.65924 5.52844 8.65924H5.51749ZM9.89952 8.65924C9.34724 8.65924 8.89952 9.10696 8.89952 9.65924C8.89952 10.2115 9.34724 10.6592 9.89952 10.6592H9.91048C10.4628 10.6592 10.9105 10.2115 10.9105 9.65924C10.9105 9.10696 10.4628 8.65924 9.91048 8.65924H9.89952ZM14.2706 8.65924C13.7183 8.65924 13.2706 9.10696 13.2706 9.65924C13.2706 10.2115 13.7183 10.6592 14.2706 10.6592H14.2816C14.8338 10.6592 15.2816 10.2115 15.2816 9.65924C15.2816 9.10696 14.8338 8.65924 14.2816 8.65924H14.2706Z"
              fill="#554F9B"
            />
          </svg>
          Contact
        </button>
        <div className="w-full px-10 border-b my-10"></div>
        <div className="flex w-full flex-col lg:flex-row gap-10  justify-around   items-center">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo_heartcare.png"
              className="h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl  font-semibold whitespace-nowrap dark:">
              HeartCare
            </span>
          </a>
          <p className="">© 2019 HeartCare. All Rights Reserved. </p>
          <div className="flex justify-around gap-5">
            <div className="rounded-full w-[39px] h-[39px] border-2 flex justify-center items-center">
              <svg
                width="7"
                height="16"
                viewBox="0 0 7 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.55073 15.9435V8.44408H0V5.85962H1.55073V4.30793C1.55073 2.19954 2.42638 0.945801 4.91418 0.945801H6.98534V3.53054H5.69072C4.72228 3.53054 4.65821 3.89172 4.65821 4.56579L4.65469 5.85933H7L6.72556 8.44378H4.65469V15.9435H1.55073Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="rounded-full w-[39px] h-[39px] border-2 flex justify-center items-center">
              <svg
                width="7"
                height="16"
                viewBox="0 0 7 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.55073 15.9435V8.44408H0V5.85962H1.55073V4.30793C1.55073 2.19954 2.42638 0.945801 4.91418 0.945801H6.98534V3.53054H5.69072C4.72228 3.53054 4.65821 3.89172 4.65821 4.56579L4.65469 5.85933H7L6.72556 8.44378H4.65469V15.9435H1.55073Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="rounded-full w-[39px] h-[39px] border-2 flex justify-center items-center">
              <svg
                width="7"
                height="16"
                viewBox="0 0 7 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.55073 15.9435V8.44408H0V5.85962H1.55073V4.30793C1.55073 2.19954 2.42638 0.945801 4.91418 0.945801H6.98534V3.53054H5.69072C4.72228 3.53054 4.65821 3.89172 4.65821 4.56579L4.65469 5.85933H7L6.72556 8.44378H4.65469V15.9435H1.55073Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataArrythmiaPage;
