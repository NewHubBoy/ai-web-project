import CommonContainer from '../CommonContainer';
import MP3Player from './components/Mp3-player';

const SectionSix = () => {
  return (
    <section className="w-full py-[64px] px-[24px] pt-6">
      <CommonContainer className="flex justify-center h-full m-auto max-w-[1140px]">
        <div className="basis-1/3 flex flex-col p-6 items-start">
          <h2 className="text-[50px] font-semibold mb-10 text-[#272626] text-left">AI音乐欣赏</h2>
          <p className="text-[17px] leading-7 font-normal text-[#2b2b2b] mb-8">聆听由人工智能创作的音乐作品，感受未来音乐的发展趋势，探索AI音乐的无穷魅力。</p>
          <button className="py-3 px-6 bg-[#fcaf3b] text-[17px] font-semibold leading-7 hover:bg-[#0366d6] hover:text-white">如何创作</button>
        </div>
        <div className="basis-1/3 flex justify-center">
          <MP3Player />
        </div>
        <div className="basis-1/3 flex justify-center">
          <MP3Player />
        </div>
      </CommonContainer>
    </section>
  );
};

export default SectionSix;
