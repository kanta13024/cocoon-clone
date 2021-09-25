import {
  SearchIcon,
  LinkIcon,
  PuzzleIcon,
  StarIcon,
  ThumbUpIcon,
  UserAddIcon,
  HomeIcon,
  BookmarkIcon,
} from "@heroicons/react/solid";
import SidebarCard from "./SidebarCard";

function Sidebar() {
  return (
    <div className="hidden md:block md:flex-shrink max-w-[380px] p-4">
      <div>
        {/* SarchArea */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="mb-4">
            <p>検索</p>
            <form className="flex">
              <input className="border-2 flex-grow mr-4" type="text" />
              <SearchIcon className="bg-gray-300 p-2 h-10 rounded-full cursor-pointer hover:shadow-md" />
            </form>
          </div>

          {/* Profile */}
          <div className="border-2 border-yellow-400 rounded-md p-4 mb-8 flex flex-col items-center">
            <img
              className="h-20 rounded-full border-2 mb-4 hover:animate-bounce"
              src="./speech_baloon-1-1024x1024.jpg"
              alt=""
            />
            <p className="border-b-2 text-lg text-blue-500 hover:animate-bounce mb-4">Guntaro</p>

            <div className="font-bold leading-8">
              <p>
                ぐんたろと申します。北関東にいちしております、群馬県出身です。群馬県は非常に静かで緑豊かな自然と地域性のある個性的な人々がたくさんいる活気のある場所です。わたしはこの地元である群馬県を愛しております。この素敵な街をもっと多くの人に知って欲しいと願いながら、小さな力ではありますが、BLOGやSNS等で発信していきたいと思います。
              </p>
            </div>

            <div className="flex space-x-2">
              <LinkIcon className="h-10 border-2 border-yellow-400 rounded-full p-1 bg-yellow-200 hover:shadow-md" />
              <PuzzleIcon className="h-10 border-2 border-yellow-400 rounded-full p-1 bg-yellow-200 hover:shadow-md" />
              <StarIcon className="h-10 border-2 border-yellow-400 rounded-full p-1 bg-yellow-200 hover:shadow-md" />
            </div>
          </div>

          {/* Reccomend */}
          <div className="bg-yellow-500 flex items-center rounded-full shadow-md mb-4">
            <ThumbUpIcon className="h-14 text-white border-4 border-white p-2 mr-2 rounded-full" />
            <h2 className="text-white text-xl font-bold">人気記事</h2>
          </div>

          <SidebarCard />
          <SidebarCard />
          <SidebarCard />
          <SidebarCard />

          {/* Sns */}
          <div className="bg-yellow-500 flex items-center mb-4 rounded-full shadow-md">
            <UserAddIcon className="h-14 text-white rounded-full border-4 border-white mr-4 " />
            <h2 className="text-white text-xl font-bold">Follow Me</h2>
          </div>

          <h3 className="text-center mb-4">Guntaro をフォローする</h3>
          <div className="flex flex-wrap items-center justify-evenly">
            <HomeIcon className="h-10 mb-4 bg-yellow-400 text-white rouded-md w-28 hover:shadow-md hover:text-blue-400" />
            <LinkIcon className="h-10 mb-4 bg-yellow-400 text-white rouded-md w-28 hover:shadow-md hover:text-blue-400" />
            <PuzzleIcon className="h-10 mb-4 bg-yellow-400 text-white rouded-md w-28 hover:shadow-md hover:text-blue-400" />
            <StarIcon className="h-10 mb-4 bg-yellow-400 text-white rouded-md w-28 hover:shadow-md hover:text-blue-400" />
          </div>

          {/* 目次 */}
          <div className="bg-yellow-500 flex items-center rounded-full shadow-md mb-4">
            <BookmarkIcon className="h-14 text-white border-4 border-white p-2 mr-2 rounded-full " />
            <h2 className="text-white text-xl font-bold">もくじ</h2>
          </div>
          <ul className="p-4">
            <li className="hover:text-blue-500 hover:border-b-2 border-blue-500">
              １.ベクターレイヤーの使い方
            </li>
            <li className="hover:text-blue-500 hover:border-b-2 border-blue-500">
              2.ベクターレイヤーの使い方
            </li>
            <li className="hover:text-blue-500 hover:border-b-2 border-blue-500">
              3.ベクターレイヤーの使い方
            </li>
            <ul>
              <li className="hover:text-blue-500 hover:border-b-2 border-blue-500">
                <span className="mr-4" /> 3-1. ベクターレイヤーは使わない
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
