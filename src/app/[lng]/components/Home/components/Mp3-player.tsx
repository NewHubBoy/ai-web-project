'use client';

import Image from 'next/image';
import { Progress } from '~/app/[lng]/components/Progress';
import { PauseCircleIcon } from './PauseCircleIcon';
import { PauseIcon } from './PauseIcon';
import { PreviousIcon } from './PreviousIcon';
import { NextIcon } from './NextIcon';

const MP3Player = () => {
  return (
    <div className="py-4 px-8 shadow-[0_0_8px_0px_rgba(0,0,0,0.5)] max-w-[100%] w-[290px] mt-12 rounded-2xl flex flex-col items-center">
      <Image alt="" src={'http://auaimusic.com/wp-content/uploads/2024/08/pexels-viktoria-alipatova-1083711-2130161-scaled.jpg'} className="rounded-2xl relative bottom-16" width={192} height={0} />
      <div id="info" className="relative bottom-8 w-full">
        <h2 className="text-3xl font-semibold text-[#272626] mb-8 text-center">Shadows</h2>
        <Progress value={20} className="mt-8 mb-4" />
        <div className="flex justify-between w-full text-xl">
          <div>00:18</div>
          <div>03:20</div>
        </div>
      </div>
      <div id="controls" className="flex items-center justify-between p-4 w-full">
        <div className="basis-1/3 flex justify-center">
          <div className="cursor-pointer hover:bg-black/10 rounded-full p-2">
            <PreviousIcon size={28} className="relative fill-[#a0a0a0]" />
          </div>
        </div>
        <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center basis-1/3 hover:bg-black/80 cursor-pointer">
          <PauseCircleIcon size={40} className="relative right-[-2px]" />
          {/* <PauseIcon size={40} className="relative" /> */}
        </div>
        <div className="basis-1/3 flex justify-center">
          <div className="cursor-pointer hover:bg-black/10 rounded-full p-2">
            <NextIcon size={28} className="relative right-[-2px] fill-[#a0a0a0]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MP3Player;
