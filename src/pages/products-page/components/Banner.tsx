import React from 'react'
import bannerImg from '../../../../public/assets/banner-img.png'

interface BannerProps {
    title: string;
}

const Banner: React.FC<BannerProps> = ({title}) => {
  return (
    <div className='w-full h-[15rem] relative flex'>
        <img className='w-full h-full object-cover' src={bannerImg} alt="banner-img" />
        <h2 className='absolute-center uppercase font-bold text-primary'>{title}</h2>
    </div>
  )
}

export default Banner