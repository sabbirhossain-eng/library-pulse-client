import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marquees = () => {
  return (
    <div className="flex">
      <button className="btn bg-white border-[#f3701d] text-[#f3701d] hover:text-black capitalize">
        Our Book Items
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/Biographies">
          Biographies
        </Link>
        <Link className="mr-12" to="/History">
          History
        </Link>
        <Link className="mr-12" to="/Religion">
          Religion
        </Link>
        <Link className="mr-12" to="/Business">
          Business
        </Link>
      </Marquee>
    </div>
  );
};

export default Marquees;
