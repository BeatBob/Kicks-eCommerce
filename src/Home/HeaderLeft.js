import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HeaderLeft() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="md:flex md:flex-col justify-between h-[400px] hidden">
      {/* logo */}
      <Link
        to="/"
        className="md:w-40 md:h-40 md:ml-0 md:mt-0 w-32 h-32 -ml-9 -mt-7"
      >
        <img src="../logo.png" alt="logo" />
      </Link>

      <div className="pl-8 mt-10 md:flex flex-col gap-11 ">
        <Link to="/Shoes" className="menu text-left w-40">
          Shoes
        </Link>
        <Link to="/Bags" className="menu text-left w-40">
          Bags
        </Link>
        <Link to="/Accessories" className="menu text-left w-40">
          Accessories
        </Link>
        <Link to="/Support" className="menu text-left w-40">
          Support
        </Link>
      </div>
    </div>
  );
}

export default HeaderLeft;
