function MainFirstPage() {
  return (
    <div className="flex-grow p-4">
      <div className="p-4 bg-gray-200 rounded-lg shadow-md">
        <h1 className="p-4 m-4 bg-white rounded-md shadow-sm text-2xl font-bold">
          LPのタイトルがココに入ってきます
        </h1>
        <img className="mx-auto w-2/3 mb-5" src="./dolphin.jpg" alt="thumb" />

        <h2 className="p-4 m-4 bg-white rounded-sm">
          <span>●</span>サブタイトル
        </h2>
        <section className="flex my-5 md:leading-10">
          <img className="h-36 md:h-48 mr-4" src="./bear.png" alt="bear" />
          <div className="flex-col">
            <p>ダミーテキストが入ります。</p>
            <p>ダミーテキストが入ります。</p>
            <p>
              ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。
            </p>
          </div>
        </section>

        <h2 className="p-4 m-4 bg-white rounded-sm">
          <span>●</span>サブタイトル
        </h2>
        <section className="flex my-5 md:leading-10 ">
          <div className="flex-col">
            <p>ダミーテキストが入ります。</p>
            <p>ダミーテキストが入ります。</p>
            <p>
              ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。
            </p>
          </div>
          <img className="h-36 md:h-48" src="./bear.png" alt="bear" />
        </section>

        <h2 className="p-4 m-4 bg-white rounded-sm">
          <span>●</span>サブタイトル
        </h2>
        <section className="flex my-5 md:leading-10 ">
          <div className="flex-col">
            <p>ダミーテキストが入ります。</p>
            <p>ダミーテキストが入ります。</p>
            <p>
              ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。
            </p>
          </div>
          <img className="h-36 md:h-48" src="./unicorn.png" alt="unicorn" />
        </section>
      </div>
    </div>
  );
}

export default MainFirstPage;
