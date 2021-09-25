import Link from "next/link";

function LinkCard({ url, title, content }) {
  return (
    <a href={url}>
      <div className="flex items-center my-4 hover:opacity-50 hover:shadow-lg border-2 rounded-lg border-yellow-300">
        <img className="h-32 sm:h-40 md:h-52" src="./dolphin.jpg" alt="" />
        <div className="flex-col p-1 justify-around w-full">
          <p className="p-1 font-bold">{title}</p>
          <p className="hidden md:block p-4 bg-gray-200 rounded-lg">{content}...</p>
        </div>
      </div>
    </a>
  );
}

export default LinkCard;
