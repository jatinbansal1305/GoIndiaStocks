/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import borough from "../assets/stories/borough.jpg";
import stock from "../assets/stories/stock.jpeg";
const StoryCard = ({ image }) => {
  return (
    <div className="relative rounded-lg overflow-hidden h-[150px] w-[250px] m-1">
      <div className="w-full h-full ">
        <Image src={image} alt="story" />
      </div>

      <div className="bg-gradient-to-r from-black h-full w-full absolute top-0">
        <p className="text-white absolute text-xs tracking-tight font-semibold px-5 items-center bottom-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          laboriosam exercitationem saepe natus
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
