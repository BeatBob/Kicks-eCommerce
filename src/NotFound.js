import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-screen-xl h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold md:text-4xl">ERROR! PAGE NOT EXIST</h1>
        <Link
          to="/"
          className="menu hover:drop-shadow-lg bg-white hover:bg-white"
        >
          {" "}
          back to Home?
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
