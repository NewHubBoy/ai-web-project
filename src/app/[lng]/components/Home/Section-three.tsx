import Image from 'next/image';
import CommonContainer from '../CommonContainer';

const SectionThree = () => {
  return (
    <section className="w-full py-[64px] px-[24px]">
      <CommonContainer className="flex flex-col justify-center h-full m-auto max-w-[1140px]">
        <h2 className="text-[50px] font-semibold mb-10 text-[#272626]">联盟发起人</h2>
        <div className="flex justify-center items-start w-full pt-5">
          <div className="basis-1/2">
            <Image alt="" src={'https://auaimusic.com/wp-content/uploads/2024/10/Picture1.png'} width={180} height={180} style={{ aspectRatio: '1', borderRadius: '100%', verticalAlign: 'bottom' }} />
            <h3 className="font-medium text-[20px] mb-10  text-[#272626]">李波博士</h3>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">教授、博导、经济学博士（后）、高级工程师</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">国际数字经济与区块链DBA项目发起人</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">澳大利亚Blockchain Metaverse Academy发起人</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">518区块链沙龙发起人</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">上海国际社区学院院长</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">邦盟汇骏集团首席经济学家</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">香港区块链应用与投资研究院院长</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">国家技术转移东部中心区块链产业中心首席经济学家</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">澳大利亚区块链应用与投资联盟首席经济学家</p>
          </div>
          <div className="basis-1/2">
            <Image
              alt=""
              src={'https://auaimusic.com/wp-content/uploads/2024/10/Image_2024100820594511.jpg'}
              width={180}
              height={180}
              style={{ aspectRatio: '1', borderRadius: '100%', verticalAlign: 'bottom' }}
            />
            <h3 className="font-medium text-[20px] mb-10 text-[#272626]">无华</h3>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">宇成教育科技创办人</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">专注音乐教育和海外音乐发行</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">世界500强通信公司海外运营合伙人</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">人工智能加聊天机器人项目带头人</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">30年钢琴，乐队，原创音乐经验</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">Swing Beats音乐频道主理人</p>
            <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">澳大利亚专业人士联盟秘书长</p>
          </div>
        </div>
      </CommonContainer>
    </section>
  );
};

export default SectionThree;
