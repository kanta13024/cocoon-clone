import {
  AcademicCapIcon,
  StarIcon,
  ThumbUpIcon,
  UserAddIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import TalkCard from "./TalkCard";
import LinkCard from "./LinkCard";
import Image from "next/image";
import ListCard from "./ListCard";
import TableOfContentsCard from "./TableOfContentsCard";

function Main() {
  return (
    <div className="flex-grow p-4">
      <div className="bg-white max-w-screen-md shadow-lg rounded-md pt-6 px-4 mx-auto">
        <div className="flex bg-yellow-400 rounded-full items-center shadow-md mx-auto">
          <AcademicCapIcon className="text-white border-4 border-white h-[50px] w-[50px] rounded-full " />
          <h1 className="ml-4 p-1 text-white md:text-2xl md:font-bold w-11/12">
            【完全初心者から】Twitterの運用方法マナブログをみてやってみた【１週間でフォロワー約2倍】
          </h1>
        </div>

        {/* Thumbnail */}
        <div className="my-4 shadow-lg">
          <Image
            src="https://guntaro.blog/wp-content/uploads/2021/09/twitter-manablog.jpg"
            layout={"responsive"}
            width={900}
            height={750}
            objectFit
          />
        </div>

        {/* SNS */}
        <div className="flex justify-evenly space-x-4 mb-4">
          <a
            className="flex-1 text-blue-500 border-2 border-blue-500 rounded-md hover:shadow-md hover:animate-bounce"
            href="https://guntaro.blog/twitter-manablog-day1/"
          >
            <StarIcon className="mx-auto h-10" />
          </a>
          <a
            className="flex-1 text-red-500 border-2 border-red-500 rounded-md hover:shadow-md hover:animate-bounce"
            href="https://guntaro.blog/sns-impression/"
          >
            <ThumbUpIcon className="h-10 mx-auto" />
          </a>
          <a
            className="flex-1 text-yellow-500 border-2 border-yellow-500 rounded-md hover:shadow-md hover:animate-bounce"
            href="https://twitter.com/gunta_gunma"
          >
            <UserAddIcon className="h-10 mx-auto" />
          </a>

          <a
            className="flex-1 text-green-500 border-2 border-green-500 rounded-md hover:shadow-md hover:animate-bounce"
            href="https://guntaro.blog/"
          >
            <HomeIcon className="mx-auto h-10" />
          </a>
        </div>

        {/* TalkCard */}
        <TalkCard
          words={
            "Twitterの運用方法がよくわからないな…何かいい商材とかの真似してみようかな？フォロワーもなかなか増えないし、ツイートのインプレッションもなかなか増えないしなー…Youtubeのマナブログの方法でも試してみようかな?"
          }
        />

        {/* LinkCard */}
        <LinkCard
          url={"https://guntaro.blog/twitter-manablog-day1/"}
          title={
            "【完全初心者から】Twitterの運用方法マナブログをみてやってみた【1週間でフォロワー約２倍】"
          }
          content={
            "この記事では実際にマナブログさんの記事とYoutubeを参考に、徹底的にテンプレート通りのツイートを心がけて運用していき"
          }
        />

        <section className="mb-5">
          <div className="leading-10 p-4">
            　このような悩みを持つ方いるかと思います。この記事では実際にマナブログさんの記事とYoutubeを参考に、徹底的にテンプレート通りのツイートを心がけて運用していき、Twitterのフォロワー数の伸び方や、インプレッション、エンゲージメントの変化を記載いていきます。
          </div>
          <div className="leading-10 p-4">
            　　この記事を参考にしていただく時にご注意していただきたい点として、マナブログさんの記事を自分で読み込み、
            <span className="bg-yellow-100">
              Youtubeを聞き、自分の中で落とし込んで実践していく形となります
            </span>
            ので、参考程度に読んでいただければと思います。また、このような有益な情報を提供していただきました、マナブさんに感謝申し上げます。
          </div>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/cP3VarqEz7k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>

        {/* 目次 */}
        <TableOfContentsCard />

        <h2 className="bg-yellow-400 p-4 rounded-md font-bold text-lg text-white">
          <span className="font-bold text-lg">●</span> マナブさん流Twitter運用方法の概要
        </h2>

        <section>
          {/* Content */}
          <div className="py-4 leading-10">
            <p>
              　この記事を読んでいる方はおそらく理解をしていると思いますので、軽く概要をまとめておきます。（もし知らないよーというかたはぜひ動画、ブログをチェックしてください）
            </p>

            <ListCard />
          </div>
        </section>

        <h2 className="bg-yellow-400 p-4 rounded-md font-bold text-lg text-white">
          <span className="font-bold text-lg">●</span> マナブさん流Twitter運用方法の概要
        </h2>

        {/* Thumbnail */}
        <div className="my-4 shadow-lg">
          <Image
            src="https://guntaro.blog/wp-content/uploads/2021/09/%E3%83%91%E3%83%B3%E3%83%97%E3%82%AD%E3%83%B3-%E3%82%AB%E3%83%95%E3%82%A7-1.jpg"
            layout={"responsive"}
            width={900}
            height={750}
            objectFit
          />
        </div>

        {/* Content */}
        <section className="py-4 leading-10">
          <p>
            　この記事を読んでいる方はおそらく理解をしていると思いますので、軽く概要をまとめておきます。（もし知らないよーというかたはぜひ動画、ブログをチェックしてください）
          </p>

          <LinkCard
            url={"https://guntaro.blog/twitter-manablog-day1/"}
            title={
              "【完全初心者から】Twitterの運用方法マナブログをみてやってみた【1週間でフォロワー約２倍】"
            }
            content={
              "この記事では実際にマナブログさんの記事とYoutubeを参考に、徹底的にテンプレート通りのツイートを心がけて運用していき"
            }
          />
        </section>

        <h2 className="bg-yellow-400 p-4 rounded-md font-bold text-lg text-white">
          <span className="font-bold text-lg">●</span> 軸を決める（３つ）
        </h2>
        <section className="py-4 leading-10">
          {/* Content */}
          <p>
            　Twitterを運用する上で発信する情報を３つほど決めて発信します。これは「軸がブレるとフォロワーも欲しい情報が得られない」とマナブさんは解説しております。...
          </p>
          <p>　この先が気になる方はぜひ下記のリンクから!</p>
          <LinkCard
            url={"https://guntaro.blog/twitter-manablog-day1/"}
            title={
              "【完全初心者から】Twitterの運用方法マナブログをみてやってみた【1週間でフォロワー約２倍】"
            }
            content={
              "この記事では実際にマナブログさんの記事とYoutubeを参考に、徹底的にテンプレート通りのツイートを心がけて運用していき"
            }
          />
        </section>
      </div>
    </div>
  );
}

export default Main;
