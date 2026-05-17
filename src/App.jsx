import React, { useState, useRef, useEffect } from "react";

import cover from "./assets/aa.jpg"

import Music1 from "./assets/Flawlëss.mp3";
import Music2 from "./assets/bousseta.mp3";
import Music3 from "./assets/Jmilton - Vem Vem (Extended).mp3";
import Music4 from "./assets/Justin Bieber ft. Nicki Minaj - Beauty And A Beat + Speed Up 🎧🦋  Viral Tiktok🦖.mp3";
import Music5 from "./assets/NXVAMANE - FRESH [PHONK].mp3";

import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";


import { LuSquarePlay } from "react-icons/lu";
import { LuRepeat2 } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";

import "./index.css";

function App() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [pNbtn, setPNbtn] = useState(0);

    const [maxDuration, setMaxDuration] = useState(0);
    const [time, setTime] = useState(0);

    const audioRef = useRef(new Audio());
    const audioSlider = useRef();


    const songs = [
        Music1,
        Music2,
        Music3,
        Music4,
        Music5,
    ];

    useEffect(() => {

        audioRef.current.src = songs[pNbtn];

        audioRef.current.ontimeupdate = () => {
            setTime(audioRef.current.currentTime);
        };

        audioRef.current.onloadedmetadata = () => {
            setMaxDuration(audioRef.current.duration);
        };

        if (isPlaying) {
            audioRef.current.play();
        }

    }, [pNbtn]);

    function NextBtn() {
        setPNbtn((item) => (item + 1) % songs.length);
    }

    function PrevBtn() {
        setPNbtn((item) => item === 0 ? songs.length - 1 : item - 1);
    }

    function HandleMusic() {

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);

        } else {

            audioRef.current.play();
            setIsPlaying(true);

        }
    }

    function FormatTime(seconds) {

        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);

        return `${min}:${sec.toString().padStart(2, "0")}`;
    }

    function Replay() {
        audioRef.current.play();
    }

    function ControlVolum(e) {
        audioRef.current.volume = e.target.value;
    }
    
    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden">

                <div
                    className="relative w-full max-w-[950px] bg-white/5 border border-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-5 md:p-7">

                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

                        <div className="w-full md:w-fit flex justify-center">
                            <img
                                src={cover}
                                alt="cover"
                                className="w-[220px] h-[220px] cursor-pointer object-cover rounded-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300
                                "
                            />
                        </div>

                        <div className="flex-1 w-full">

                            <div className="flex items-center justify-between flex-wrap gap-3">

                                <div>
                                    <h2 className="text-white text-2xl font-bold tracking-wide">
                                        Aproveite querido !!
                                    </h2>

                                    <h4 className="text-gray-400 text-sm mt-1">
                                        Maded By t9ev & hv6n
                                    </h4>
                                </div>

                                <div className="text-purple-400 text-[22px]">
                                    <FaCheckCircle />
                                </div>

                            </div>

                            <div className="flex justify-between text-gray-300 text-sm mt-8 mb-2">

                                <div>{FormatTime(time)}</div>

                                <div>{FormatTime(maxDuration)}</div>

                            </div>

                            <input
                                type="range"
                                name="slider"
                                id="song-slider"
                                ref={audioSlider}
                                max={maxDuration}
                                value={time}
                                className="
                                    w-full
                                    h-[5px]
                                    rounded-full
                                    bg-white/20
                                    accent-purple-500
                                    cursor-pointer

                                    [&::-webkit-slider-thumb]:appearance-none
                                    [&::-webkit-slider-thumb]:opacity-0
                                    [&::-webkit-slider-thumb]:w-0
                                    [&::-webkit-slider-thumb]:h-0

                                    [&::-moz-range-thumb]:opacity-0
                                    [&::-moz-range-thumb]:w-0
                                    [&::-moz-range-thumb]:h-0
                                "
                            />

                            <div className="flex items-center justify-center gap-6 sm:gap-10 text-white mt-8 flex-wrap">

                                <button
                                    className="text-[46px] hover:text-purple-400 transition-all duration-200 hover:scale-110"
                                >
                                    <LuSquarePlay />
                                </button>

                                <button
                                    onClick={PrevBtn}
                                    className="text-[46px] hover:text-purple-400 transition-all duration-200 hover:scale-110"
                                >
                                    <MdSkipPrevious />
                                </button>

                                <button
                                    onClick={HandleMusic}
                                    className="w-[75px] h-[75px] rounded-full bg-purple-600 flex items-center justify-center shadow-lg hover:bg-purple-500 hover:scale-105 transition-all duration-300">
                                    {
                                        isPlaying
                                            ? <div className="text-[28px]"><FaPause /></div>
                                            : <div className="text-[28px] relative left-[2px]"><FaPlay /></div>
                                    }
                                </button>

                                <button
                                    onClick={NextBtn}
                                    className="text-[46px] hover:text-purple-400 transition-all duration-200 hover:scale-110"
                                >
                                    <MdSkipNext />
                                </button>

                                <button
                                    onClick={Replay}
                                    className="text-[46px] hover:text-purple-400 transition-all duration-200 hover:scale-110"
                                >
                                    <LuRepeat2 />
                                </button>
                                
                            </div>
                            
                            <br />

                            <input 
                            className="
                            h-[5px] 
                            w-full 
                            accent-purple-500 
                            cursor-pointer
                            
                            [&::-webkit-slider-thumb]:appearance-none
                            [&::-webkit-slider-thumb]:w-0
                            [&::-webkit-slider-thumb]:h-0
                            [&::-webkit-slider-thumb]:opacity-0
                            [&::-webkit-slider-thumb]:transition-all

                            hover:[&::-webkit-slider-thumb]:w-[14px]
                            hover:[&::-webkit-slider-thumb]:h-[14px]
                            hover:[&::-webkit-slider-thumb]:opacity-100

                            active:[&::-webkit-slider-thumb]:w-[16px]
                            active:[&::-webkit-slider-thumb]:h-[16px]

                            hover:[&::-webkit-slider-thumb]:rounded-full
                            hover:[&::-webkit-slider-thumb]:bg-purple-500  "
                                min={0}
                                max={1}
                                step={0.1}
                                onChange={ControlVolum}
                                type="range" />

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default App;