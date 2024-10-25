import Image from 'next/image';
import CommonContainer from '../CommonContainer';

const SectionTwo = () => {
  return (
    <div className="w-full bg-[#eef0ed] py-[80px] px-[20px]">
      <CommonContainer className="flex justify-center items-center h-full m-auto">
        <div className="flex items-center justify-center w-full">
          <div className="flex-1">
            <Image alt="" src={'http://auaimusic.com/wp-content/uploads/2024/08/pexels-elina-sazonova-3971983-768x1024.jpg'} width={545} height={545} style={{ aspectRatio: 1 }} />
          </div>
          <div className="flex-1 w-[585px]"></div>
        </div>
      </CommonContainer>
    </div>
  );
};
export default SectionTwo;
