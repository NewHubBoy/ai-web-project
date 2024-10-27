import Image from 'next/image';
import CommonContainer from '../CommonContainer';

const SectionFour = () => {
  return (
    <section className="w-full py-[80px] px-[20px]">
      <CommonContainer className="flex justify-center items-center h-full m-auto">
        <div className="flex items-center justify-center w-full lg:flex-row flex-col">
          <div className="sm:basis-1/2 mb-10 md:mb-0">
            <div className="p-5 md:p-[40px]">
              <h2 className="text-3xl md:text-[50px] font-semibold mb-7 text-[#2b2b2b]">什么是AI音乐</h2>
              <p className="md:text-[17px] text-sm tracking-wide leading-7 font-normal text-[#2b2b2b] mb-8">
                AI音乐是利用人工智能技术进行音乐创作和生成的一种新兴形式。通过机器学习、深度学习等技术，AI可以分析大量的音乐数据，从中学习音乐的结构、旋律、节奏等元素，然后根据这些知识生成新的音乐作品。AI音乐不仅可以帮助音乐人加速创作过程，还能生成全新的音乐风格和创意，为音乐行业带来更多的可能性。
              </p>
              <button className="py-3 px-6 bg-[#fcaf3b] text-sm md:text-[17px] font-semibold leading-7">进入知识库</button>
            </div>
          </div>
          <div className="sm:basis-1/2">
            <Image alt="" src={'http://auaimusic.com/wp-content/uploads/2024/08/Minimalist-Music-Player-Instagram-Post.png'} width={545} height={0} />
          </div>
        </div>
      </CommonContainer>
    </section>
  );
};

export default SectionFour;
