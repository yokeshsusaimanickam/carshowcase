"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

//we import image here because some of the buttons will have icons

const CustomButton = ({title,handleClick,containerStyles,btnType,textStyles,rightIcon,isDisabled}:CustomButtonProps) => (
 
    <button 
    disabled={isDisabled}
    type={btnType||'button'}
    //${} is used for giving dynamic styles
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
<span className={`flex-1 ${textStyles}`}>
{title}
</span>
{rightIcon&& (
  <div className='relative w-6 h-6'>
<Image src={rightIcon} alt='rightIcon' fill className='object-contain'/>
  </div>
)}
    </button>
 
)

export default CustomButton