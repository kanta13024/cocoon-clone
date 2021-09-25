function TalkCard({ words }) {
  return (
    <div className="flex">
      <img
        className="h-20 border-2 rounded-full shadow-md hover:animate-bounce"
        src="./bear.png"
        alt=""
      />
      <div className="border-2 rounded-lg p-2 items-center ml-4">
        <p className="text-sm sm:text-base md:text-lg md:leading-10">{words}</p>
      </div>
    </div>
  );
}

export default TalkCard;
