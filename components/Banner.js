import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://guntaro.blog/wp-content/uploads/2021/09/gntaro-header-1.jpg"
        objectFit="cover"
        layout="fill"
      />
    </div>
  );
}

export default Banner;
