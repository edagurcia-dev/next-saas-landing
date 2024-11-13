import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="section-tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter mt-5 section-title">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] mt-5 section-paragraph">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <div className="relative">
            <Image src={productImage} alt="Product image" className="mt-10" />
            <Image
              src={pyramid}
              alt="Pyramid image"
              width={262}
              height={262}
              className="hidden md:block absolute -right-36 -top-32"
            />
            <Image
              src={tube}
              alt="Tube image"
              width={248}
              height={248}
              className="hidden md:block absolute -left-36 bottom-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
