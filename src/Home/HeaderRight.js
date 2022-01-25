import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function HeaderRight() {
  return (
    <div className="relative h-screen pt-10 md:block hidden">
      <div className="flex justify-end w-48 ">
        <AccountCircleIcon className="cursor-pointer scale-125 hover:scale-150" />
      </div>
      {/* bottom-72 -left-9 -rotate-90*/}
      <div className="absolute bottom-[40%] -left-[30%] -rotate-90 flex justify-between ">
        <div className="flex justify-between mr-20">
          <Link to="*" className="rightMenu px-2 mr-6">
            fb
          </Link>
          <Link to="*" className="rightMenu px-2 mr-6">
            tw
          </Link>
          <Link to="*" className="rightMenu px-2 mr-6">
            in
          </Link>
        </div>

        <div className="flex justify-between w-72">
          <Link to="*" className="rightMenu ml-10">
            Manufacturing
          </Link>
          <Link to="*" className="rightMenu">
            packaging
          </Link>
          <Link to="*" className="rightMenu">
            team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderRight;
