import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 2000], [-10, 10]);
  const rotateY = useTransform(x, [0, 2000], [10, -10]);

  function handleMouse(event) {
    x.set(event.clientX);
    y.set(event.clientY);
  }

  return (
    <div className=" h-full w-[220px] sm:w-[30px] md:w-full flex justify-center items-center  m-auto">
      <div className="md:-mt-36 -mt-20">
        <div className="mb-12 w-full lg:w-8/12 xl:w-6/12">
          <h4 className="text-gray-500 text-base ">
            The best looks; Top comfort
          </h4>
          <h2 className="text-8xl font-medium lg:text-5xl pb-3">Comfy Maxer</h2>
          <p className="text-gray-600 text-base  leading-relaxed tracking-wide">
            Our shoes fuse together an insole that cushions every move, laces
            that you'll never need to tie again, and an odor-fighting copper
            thread lining
          </p>
        </div>

        <div className="flex lg:flex-col justify-start gap-4 ">
          <button className="bg-white text-sm hover:bg-neutral-900 hover:text-white text-gray-800 font-bold py-2 px-4 rounded-md inline-flex items-center max-w-fit">
            <AddShoppingCartIcon className="pr-1" /> Add to Cart
          </button>
          <button className="bg-white text-sm hover:bg-neutral-900 hover:text-white text-gray-800 font-bold py-2 px-4 rounded-md inline-flex items-center max-w-fit">
            <PlayCircleFilledWhiteIcon className="pr-1" />
            Watch Intro
          </button>
        </div>

        <div
          style={{
            height: 400,
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            perspective: 400,
          }}
          onMouseMove={handleMouse}
          className="absolute bottom-16 right-32 hover:scale-105 transition-all "
        >
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
            className="hidden lg:w-[600px] lg:block xl:w-[750px]"
          >
            <img src="../hero-img.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
