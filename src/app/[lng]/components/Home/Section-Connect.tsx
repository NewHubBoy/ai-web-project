import CommonContainer from '../CommonContainer';
import ConnectForm from './components/Connect-form';

const SectionConnect = () => {
  return (
    <section className="py-16 px-6" id='connect'>
      <CommonContainer className="flex justify-center h-full m-auto max-w-[1140px]">
        <div className="basis-1/2 flex flex-col p-6 items-start">
          <h2 className="text-[50px] font-semibold mb-6 text-[#272626] text-left">联系我们</h2>
          <p className="text-[17px] leading-7 font-normal text-[#2b2b2b] mb-6">
            如果您对澳大利亚AI音乐联盟有任何问题或建议，或者希望与我们合作，请随时与我们联系。我们期待与您共同推动AI音乐的发展与创新。
          </p>
          <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">admin@auaimusic.com</p>
          <p className="text-[17px] leading-7 font-normal text-[#2b2b2b]">澳大利亚，悉尼，2000</p>
        </div>
        <div className="basis-1/2 p-6">
          <ConnectForm />
        </div>
      </CommonContainer>
    </section>
  );
};

export default SectionConnect;
