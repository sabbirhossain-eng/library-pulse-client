import useAuth from '../Hooks/useAuth';
import logo from '../Image/LibraryPulse.png';
const Footer = () => {
  const {darkMode} = useAuth();

  return (
    <div className={`relative bg-gradient-to-r from-[#f3701d] to-[#f8853d] mt-1 ${darkMode ? "bg-gradient-to-r from-[#1f2023] to-[#1f2023] text-[#ffffff]" : "light-theme"}`}>
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className='flex justify-center mb-6'>
            <img 
            className='bg-white rounded-lg px-2'
            src={logo} alt="" />
        </div>
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Library Management System
          </h2>
          <p className="mb-6 text-base text-white md:text-lg">
          A Library Management System (LMS) is a software application or automated system designed to efficiently handle various library operations and services. It streamlines the management of library resources, including books, journals, multimedia materials, and user information.
          </p>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Email"
              required=""
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 text-[#f3701d] transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-white focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            />
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </a>
          </form>
          <p className="max-w-md mb-10 text-xs tracking-wide text-white sm:text-sm sm:mx-auto md:mb-16">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p>
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-white rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
