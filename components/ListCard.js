import { CheckCircleIcon, LightBulbIcon } from "@heroicons/react/solid";

function ListCard() {
  return (
    <div className="p-4 border my-5 shadow-md">
      <div className="flex justify-center font-bold mx-auto">
        <LightBulbIcon className="h-7 text-yellow-300" />
        <p>マナブさん流Twitter運用方法の概要の概要</p>
      </div>
      <ul className="">
        <li className="flex items-center ">
          <CheckCircleIcon className="h-7 text-blue-500" />
          軸を決める
        </li>
        <li className="flex items-center ">
          <CheckCircleIcon className="h-7 text-blue-500" />
          有益な情報を発信する
        </li>
        <li className="flex items-center ">
          <CheckCircleIcon className="h-7 text-blue-500" />
          有名人にうまく絡む
        </li>
        <li className="flex items-center ">
          <CheckCircleIcon className="h-7 text-blue-500" />
          ツイートの型（３つ）
        </li>
      </ul>
    </div>
  );
}

export default ListCard;
