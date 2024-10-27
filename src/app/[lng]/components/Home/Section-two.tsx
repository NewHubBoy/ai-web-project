import Image from 'next/image';
import CommonContainer from '../CommonContainer';

const SectionTwo = () => {
  return (
    <section className="w-full bg-[#eef0ed] py-[80px] px-[20px]">
      <CommonContainer className="flex justify-center items-center h-full m-auto">
        <div className="flex items-center justify-center w-full lg:flex-row flex-col">
          <div className="sm:basis-1/2">
            <Image alt="" src={'http://auaimusic.com/wp-content/uploads/2024/08/pexels-elina-sazonova-3971983-768x1024.jpg'} width={545} height={545} style={{ aspectRatio: 1 }} />
          </div>
          <div className="sm:basis-1/2">
            <div className="p-5 md:p-[40px]">
              <h2 className="text-3xl md:text-[50px] font-semibold mb-7 text-[#2b2b2b]">我们的愿景</h2>
              <p className="md:text-[17px] text-sm tracking-wide leading-7 font-normal text-[#2b2b2b] mb-8">
                成为全球领先的AI音乐普及与商业创新平台。我们相信，AI音乐不仅仅是一种对音乐生成技术的创新，更是一种通过音乐赋能商业模式的升华。未来，澳大利亚AI音乐联盟将致力于推动AI音乐的应用场景落地，让更多人了解AI音乐的魅力。
              </p>
              <button className="py-3 px-6 bg-[#fcaf3b] text-sm md:text-[17px] font-semibold leading-7">更多行业动态</button>
            </div>
          </div>
        </div>
      </CommonContainer>
    </section>
  );
};
export default SectionTwo;
