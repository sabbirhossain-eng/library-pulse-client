import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marquees = () => {
  return (
    <div className="flex">
      <button className="btn bg-white border-[#f3701d] text-[#f3701d] hover:text-black capitalize">
        Our Book Items
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/biographies">
          Biographies
        </Link>
        <Link className="mr-12" to="/history">
          History
        </Link>
        <Link className="mr-12" to="/religion">
          Religion
        </Link>
        <Link className="mr-12" to="/business">
          Business
        </Link>
      </Marquee>
    </div>
  );
};

export default Marquees;
