import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Marquees from "./Marquees";

const Banner = () => {
  const { user } = useAuth();
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://i.ibb.co/VvcHVLx/gulom-nazarov-6-ZB7-ZGsiigc-unsplash.jpg"
          className="w-full rounded-xl"
        />
        <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#e18246] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">Biographies</h2>
            <p>
              Biographies are non-fiction works that provide a detailed account
              of a person`s life, encompassing their experiences, achievements,
              challenges, and impact on society.
            </p>
            <div>
              <Link to="/biographies">
                <button className="btn bg-[#000080] text-white hover:bg-[#f3701d] mr-5">
                  See All Books
                </button>
              </Link>
              <Link to="/registration">
                <button
                  className={`btn btn-outline text-white hover:bg-[#000080] ${
                    user ? "hidden" : "active"
                  }`}
                >
                  Registration Now
                </button>
              </Link>
            </div>
            <div>
              <Marquees></Marquees>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle  border-[#f3701d] text-white hover:text-black bg-[#f3701d] mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle  border-[#f3701d] text-white hover:text-black bg-[#f3701d]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/XJ3XZMd/pat-whelen-c-Hvy-UM-k-Xo-A-unsplash.jpg"
          className="w-full rounded-xl"
        />
        <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#e18246] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">History</h2>
            <p>
              History is the study of the past, encompassing the events, people,
              societies, and developments that have shaped our world over time.
            </p>
            <div>
              <Link to="/history">
                <button className="btn bg-[#000080] text-white hover:bg-[#f3701d] mr-5">
                  See All Books
                </button>
              </Link>
              <Link to="/registration">
                <button
                  className={`btn btn-outline text-white hover:bg-[#000080] ${
                    user ? "hidden" : "active"
                  }`}
                >
                  Registration Now
                </button>
              </Link>
            </div>
            <div>
              <Marquees></Marquees>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle  border-[#f3701d] text-white hover:text-black bg-[#f3701d] mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle  border-[#f3701d] text-white hover:text-black bg-[#f3701d]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/T2ntrXj/haidan-Qec3-HPa-HWTI-unsplash.jpg"
          className="w-full rounded-xl"
        />
        <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#e18246] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">Religion</h2>
            <p>
              Religion is a deeply ingrained and multifaceted aspect of human
              culture and society. It encompasses a wide range of belief
              systems, practices, and rituals that revolve around questions of
              existence, spirituality, morality, and the divine.
            </p>
            <div>
              <Link to="/religion">
                <button className="btn bg-[#000080] text-white hover:bg-[#f3701d] mr-5">
                  See All Books
                </button>
              </Link>
              <Link to="/registration">
                <button
                  className={`btn btn-outline text-white hover:bg-[#000080] ${
                    user ? "hidden" : "active"
                  }`}
                >
                  Registration Now
                </button>
              </Link>
            </div>
            <div>
              <Marquees></Marquees>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle  border-[#f3701d] text-white hover:text-black bg-[#f3701d] mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle  border-[#f3701d] text-white hover:text-black bg-[#f3701d]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/pj2nBvF/rodeo-project-management-software-ONe-snu-Caq-Q-unsplash.jpg"
          className="w-full rounded-xl"
        />
        <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#e18246] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">Business</h2>
            <p>
              Business is an organizational entity or enterprise engaged in
              commercial, industrial, or professional activities with the
              primary goal of generating profit or providing goods and services
              to customers.
            </p>
            <div>
              <Link to="/business">
                <button className="btn bg-[#000080] text-white hover:bg-[#f3701d] mr-5">
                  See All Books
                </button>
              </Link>
              <Link to="/registration">
                <button
                  className={`btn btn-outline text-white hover:bg-[#000080] ${
                    user ? "hidden" : "active"
                  }`}
                >
                  Registration Now
                </button>
              </Link>
            </div>
            <div>
              <Marquees></Marquees>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle  border-[#f3701d] text-white hover:text-black bg-[#f3701d] mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle  border-[#f3701d] text-white hover:text-black bg-[#f3701d]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
