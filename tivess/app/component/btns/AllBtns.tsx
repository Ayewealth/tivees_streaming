

import React from 'react'
import { FaPlay } from 'react-icons/fa';

interface BtnProps {
    title: string;
    onClick?: () => void
}

export const SolidMainPlayBtn = ({ title, onClick, ...props }: BtnProps) => {
  return (
    <button 
        {...props}
        onClick={onClick} 
        className="w-full bg-[#E50000] flex items-center gap-2 cursor-pointer text-white px-4 py-3 rounded-md text-base font-medium transition-colors duration-200"
    >
        <FaPlay />
        {title}
    </button>
  )
}