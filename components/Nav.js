import Link from "next/link";

function Nav() {
  return (
    <div className="bg-yellow-400">
      <ul className="flex justify-evenly mx-auto p-5 space-x-4 bg-yellow-500 text-white">
        <li className="hover:text-blue-200 hover:font-bold cursor-pointer hover:border-b-2 border-blue-300">
          <Link href="/">
            <a>ブログのクローン</a>
          </Link>
        </li>
        <li className="hover:text-blue-200 hover:font-bold cursor-pointer hover:border-b-2 border-blue-300">
          <Link href="/firstpage">
            <a>スクールでの初めての作品</a>
          </Link>
        </li>
        <li className="hover:text-blue-200 hover:font-bold cursor-pointer hover:border-b-2 border-blue-300">
          <a href="https://www.instagram.com/guntaro_gunma/?hl=ja">SNS</a>
        </li>
        <li className="hover:text-blue-200 hover:font-bold cursor-pointer hover:border-b-2 border-blue-300">
          <a href="https://www.youtube.com/channel/UCKOgDGUgEJtkRFQMha9TyDQ"> Youtube</a>
        </li>
        <li className="hover:text-blue-100 hover:font-bold cursor-pointer hover:border-b-2 border-blue-300">
          <a href="https://guntaro.blog/about-contact/">About & Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
