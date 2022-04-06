import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("./carousel"), {
  ssr: false,
});

export default Carousel;
