function TableOfContentsCard() {
  return (
    <div className="border-2 my-8 rounded-md shadow-md">
      <h2 className="bg-yellow-400 p-4 font-bold text-white text-center">目次</h2>
      <ul className="list-disc m-4 p-4 leading-10 font-bold">
        <li className="hover:text-blue-500 hover:scale-105 transition transform duration-200 ">
          マナブさん流Twitter運用方法
        </li>
        <ul className="list-disc ml-8">
          <li className="hover:text-blue-500 hover:scale-105 transition transform duration-200 ">
            軸を決める（３つ）
          </li>
          <li className="hover:text-blue-500 hover:scale-105 transition transform duration-200 ">
            有益な情報を発信する
          </li>
          <li className="hover:text-blue-500 hover:scale-105 transition transform duration-200 ">
            有名人にうまく絡む
          </li>
          <li className="hover:text-blue-500 hover:scale-105 transition transform duration-200 ">
            ツイートの型（３つ）
          </li>
        </ul>
        <li className="hover:text-blue-500 hover:scale-105 transition transform duration-200 ">
          現在の自分のTwitterの状況
        </li>
        <li className="hover:text-blue-500 hover:scale-105 transition transform duration-200 ">
          マナブさん流Twitter運用方法
        </li>
        <li className="hover:text-blue-500 hover:scale-105 transition transform duration-200 ">
          実際にツイートやリプライを積極的に改善するべき
        </li>
      </ul>
    </div>
  );
}

export default TableOfContentsCard;
