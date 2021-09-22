import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky bg-white top-0 z-50 p-4 grid grid-cols-3 shadow-md items-center md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-16 cursor-pointer my-auto">
        <Image
          src="https://guntaro.blog/wp-content/uploads/2021/09/logoNew%E3%81%8F%E3%82%99%E3%82%93%E3%81%9F%E3%82%8D-1.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* MiddleSearch */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-md">
        <input
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Start Your Search"
        />
        <SearchIcon className="hidden h-8 bg-red-400 text-white md:inline-flex rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Open side Bar</p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:animate-bounce" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
