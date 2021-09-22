import Image from "next/image";

function Footer() {
  return (
    <div className="flex bg-black text-white h-32 p-4 justify-between">
      <Image
        src="https://guntaro.blog/wp-content/uploads/2021/09/logoNew%E3%81%8F%E3%82%99%E3%82%93%E3%81%9F%E3%82%8D-1.png"
        height={100}
        width={200}
      />
      <p>This article is 働かない理由とは</p>
      <div>
        <p>home</p>
        <p>about</p>
        <p>Privacy policy</p>
      </div>
    </div>
  );
}

export default Footer;
