import {
  AcademicCapIcon,
  StarIcon,
  ThumbUpIcon,
  UserAddIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import TalkCard from "./TalkCard";
import LinkCard from "./LinkCard";

function Main() {
  return (
    <div className="flex-grow p-4">
      <div className="bg-white max-w-screen-md shadow-lg rounded-md pt-6 px-4 mx-auto">
        <div className="flex bg-yellow-400 rounded-full items-center shadow-md mx-auto">
          <AcademicCapIcon className="text-white border-4 border-white h-[50px] w-[50px] rounded-full " />
          <h1 className="ml-4 text-white md:text-2xl md:font-bold w-11/12">
            完全初心者向けの引きこもり方。
          </h1>
        </div>

        {/* Thumbnail */}
        <img
          className="shadow-md rounded-md mb-4 max-h-[400px] mx-auto"
          src="./dolphin.jpg"
          alt="dolphin"
        />

        {/* SNS */}
        <div className="flex justify-evenly space-x-4 mb-4">
          <StarIcon className="flex-1 h-10 md:h-14 md:w-28 text-blue-500 border-2 border-blue-500 rounded-md hover:shadow-md hover:animate-bounce" />
          <ThumbUpIcon className="flex-1 h-10 md:h-14 md:w-28 text-red-500 border-2 border-red-500 rounded-md hover:shadow-md hover:animate-bounce" />
          <UserAddIcon className="flex-1 h-10 md:h-14 md:w-28 text-yellow-500 border-2 border-yellow-500 rounded-md hover:shadow-md hover:animate-bounce" />
          <HomeIcon className="flex-1 h-10 md:h-14 md:w-28 text-green-500 border-2 border-green-500 rounded-md hover:shadow-md hover:animate-bounce" />
        </div>

        {/* TalkCard */}
        <TalkCard />

        {/* LinkCard */}
        <LinkCard />

        <h2 className="bg-yellow-400 p-4 rounded-md font-bold text-lg text-white">
          <span className="font-bold text-lg">●</span> 働きたくない理由について
        </h2>

        <img className="shadow-md rounded-md mb-4 max-h-[400px] mx-auto" src="./tokai.png" alt="" />

        {/* Content */}
        <div className="py-4 leading-10">
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>

          <LinkCard />
        </div>

        <h2 className="bg-yellow-400 p-4 rounded-md font-bold text-lg text-white">
          <span className="font-bold text-lg">●</span> 働きたくない理由について
        </h2>

        <img className="shadow-md rounded-md mb-4 max-h-[400px] mx-auto" src="./tokai.png" alt="" />

        {/* Content */}
        <div className="py-4 leading-10">
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>
          <p>働きたくない</p>

          <LinkCard />
        </div>
      </div>
    </div>
  );
}

export default Main;
