"use client";
import React, { useState, useEffect } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { FaAnglesDown } from "react-icons/fa6";
import { KeyboardKey } from "../Modal/Modal";

export const Controls: React.FC = () => {
  const [showControls, setShowControls] = useState<boolean>(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (["w", "a", "s", "d"].includes(event.key.toLowerCase())) {
        setTimeout(() => {
          setShowControls(false);
        }, 2000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!showControls) {
    return (
      <div className="w-full flex items-center justify-center mt-[100px] animate-bounce">
        <FaAnglesDown size={24} color="#ffffff" />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-base text-white">Controls:</h1>
      <div className="flex flex-col items-center justify-center">
        <MdKeyboardArrowUp color="#ffffff" />
        <KeyboardKey>W</KeyboardKey>
      </div>
      <div className="flex items-start gap-2 mt-2">
        <div className="flex items-center justify-center">
          <MdKeyboardArrowLeft color="#ffffff" />
          <KeyboardKey>A</KeyboardKey>
        </div>
        <div className="flex flex-col items-center justify-center">
          <KeyboardKey>S</KeyboardKey>
          <MdKeyboardArrowDown color="#ffffff" />
        </div>
        <div className="flex items-center justify-center">
          <KeyboardKey>D</KeyboardKey>
          <MdKeyboardArrowRight color="#ffffff" />
        </div>
      </div>
    </div>
  );
};
