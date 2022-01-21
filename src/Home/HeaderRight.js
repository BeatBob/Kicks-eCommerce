import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeaderRight() {
  return (
    <div className="relative h-screen pt-10 md:block hidden">
      <div className="flex justify-end w-48 ">
        <AccountCircleIcon className="cursor-pointer scale-125 hover:scale-150" />
      </div>
      {/* bottom-72 -left-9 -rotate-90*/}
      <div className="absolute bottom-[40%] -left-[30%] -rotate-90 flex justify-between ">
        <div className="flex justify-between mr-20">
          <p className="rightMenu px-2 mr-2">fb</p>
          <p className="rightMenu px-2 mx-2">tw</p>
          <p className="rightMenu px-2 mx-2">in</p>
        </div>

        <div className="flex justify-between w-72">
          <p className="rightMenu ml-10">Manufacturing</p>
          <p className="rightMenu">packaging</p>
          <p className="rightMenu">team</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderRight;
