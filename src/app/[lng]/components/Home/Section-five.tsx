import Image from 'next/image';
import CommonContainer from '../CommonContainer';

const SectionFive = () => {
  return (
    <section className="w-full p-5 py-16 md:py-16 md:px-6 bg-[#eef0ed]">
      <CommonContainer className="flex flex-col justify-center h-full m-auto max-w-[1140px]">
        <h2 className="text-3xl md:text-[50px] font-semibold mb-10 text-[#272626] text-center">主流AI音乐制作平台</h2>
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="md:basis-1/3 flex flex-col items-center md:mx-3 md:mb-0 mb-8">
            <Image alt="" src={'http://auaimusic.com/wp-content/uploads/2024/08/suno.png'} width={180} height={180} style={{ aspectRatio: '1', borderRadius: '100%', verticalAlign: 'bottom' }} />
            <h3 className="font-medium text-[20px] mb-10  text-[#272626]">Suno</h3>
            <p className="md:text-[17px] text-sm tracking-wide  leading-7 font-normal text-[#2b2b2b]">
              Suno的愿景是在将来人人都可以制作出色的音乐作品。不管你是淋浴室歌手还是金曲榜艺人，Suno帮助你不需要乐器，只需要你的想象力，把想法变成音乐，实现音乐梦想。
            </p>
          </div>
          <div className="md:basis-1/3 flex flex-col items-center md:mx-3 md:mb-0 mb-8">
            <Image alt="" src={'http://auaimusic.com/wp-content/uploads/2024/08/Mubert.png'} width={180} height={180} style={{ aspectRatio: '1', borderRadius: '100%', verticalAlign: 'bottom' }} />
            <h3 className="font-medium text-[20px] mb-10  text-[#272626]">Mubert</h3>
            <p className="md:text-[17px] text-sm tracking-wide  leading-7 font-normal text-[#2b2b2b]">
              Mubert不仅是一个将音乐创作者和人工智能结合来重新定义音乐创作的平台，它同时提供音乐作品的市场推广解决方案，无缝对接音乐创作者和听众。
            </p>
          </div>
          <div className="md:basis-1/3 flex flex-col items-center md:mx-3 md:mb-0 mb-8">
            <Image
              alt=""
              src={'http://auaimusic.com/wp-content/uploads/2024/08/StableAudio.jpg'}
              width={180}
              height={180}
              style={{ aspectRatio: '1', borderRadius: '100%', verticalAlign: 'bottom' }}
            />
            <h3 className="font-medium text-[20px] mb-10  text-[#272626]">Stable Audio</h3>
            <p className="md:text-[17px] text-sm tracking-wide  leading-7 font-normal text-[#2b2b2b]">
              Stable Audio由Stability AI开发的AI音乐制作平台，拥有出色的轻音乐制作功能，支持背景音乐，影视游戏配乐，以及其他复杂的音乐作品生成。
            </p>
          </div>
        </div>
      </CommonContainer>
    </section>
  );
};

export default SectionFive;
