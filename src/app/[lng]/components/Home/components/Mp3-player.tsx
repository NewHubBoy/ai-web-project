'use client';

import Image from 'next/image';
import { Progress } from '~/app/[lng]/components/Progress';
import { PauseCircleIcon } from './PauseCircleIcon';
import { PauseIcon } from './PauseIcon';
import { PreviousIcon } from './PreviousIcon';
import { NextIcon } from './NextIcon';
import { AnimatePresence } from 'framer-motion';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import _ from 'lodash';

const MP3Player = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAnimationRef = useRef(0);

  const repeat = useCallback(() => {
    setCurrentTime(audioRef.current?.currentTime ?? 0);
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, []);

  useEffect(() => {
    if (playing) {
      audioRef.current?.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current?.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [playing, audioRef, repeat]);

  const togglePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <Fragment>
      <audio ref={audioRef} controls className="fixed left-0 bottom-[30rem] hidden">
        <source src="/audio/Lemon.webm" />
      </audio>
      <AnimatePresence>
        <div className="py-4 px-8 shadow-[0_0_8px_0px_rgba(0,0,0,0.5)] max-w-[100%] w-[290px] mt-12 rounded-2xl flex flex-col items-center">
          <Image
            alt=""
            src={'http://auaimusic.com/wp-content/uploads/2024/08/pexels-viktoria-alipatova-1083711-2130161-scaled.jpg'}
            className="rounded-2xl relative bottom-16"
            width={192}
            height={0}
          />
          <div id="info" className="relative bottom-8 w-full">
            <h2 className="text-3xl font-semibold text-[#272626] mb-8 text-center">Shadows</h2>
            <Progress value={_.multiply(_.divide(currentTime ?? 0, audioRef.current?.duration ?? 0), 100)} className="mt-8 mb-4" />
            <div className="flex justify-between w-full text-xl">
              <div>{dayjs.unix(Number(currentTime ?? 0)).format('mm:ss')}</div>
              <div>{dayjs.unix(Number(audioRef.current?.duration ?? 0)).format('mm:ss')}</div>
            </div>
          </div>
          <div id="controls" className="flex items-center justify-between p-4 w-full">
            <div className="basis-1/3 flex justify-center">
              <div className="cursor-pointer hover:bg-black/10 rounded-full p-2">
                <PreviousIcon size={28} className="relative fill-[#a0a0a0]" />
              </div>
            </div>
            <button
              className="w-16 h-16 rounded-full bg-black flex justify-center items-center basis-1/3 hover:bg-black/80 cursor-pointer"
              onClick={() => {
                togglePlayPause();
              }}
            >
              {playing ? <PauseIcon size={40} className="relative" /> : <PauseCircleIcon size={40} className="relative right-[-2px]" />}
            </button>
            <div className="basis-1/3 flex justify-center">
              <div className="cursor-pointer hover:bg-black/10 rounded-full p-2">
                <NextIcon size={28} className="relative right-[-2px] fill-[#a0a0a0]" />
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </Fragment>
  );
};

export default MP3Player;
