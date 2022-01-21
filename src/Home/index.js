import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Hero from "./Hero";

function Home() {
  return (
    <div className="relative max-w-screen-xl h-screen mx-auto mt-4 px-4 md:grid md:grid-cols-[200px_minmax(0px,_1fr)_240px] gap-x-3 ">
      <HeaderLeft />
      <Hero />
      <HeaderRight />
    </div>
  );
}

export default Home;
