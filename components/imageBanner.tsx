'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import './imageBanner.css';
import { Box } from '@ui/Box';

export function ImageBanner() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const imageList = document.querySelectorAll('#image-list-container');
    const bannerImage = document.querySelectorAll('.bannerImage');

    const elementTop = imageList[0]?.getBoundingClientRect()?.top;

    if (elementTop < 400 && elementTop > 250) {
      bannerImage[0].classList.add('transition1');
      bannerImage[0].classList.remove('transition2');
      bannerImage[0].classList.remove('transition3');
      return;
    }
    if (elementTop < 250 && elementTop > 100) {
      bannerImage[0].classList.add('transition2');
      bannerImage[0].classList.remove('transition1');
      bannerImage[0].classList.remove('transition3');
      return;
    }
    if (elementTop < 100) {
      bannerImage[0].classList.add('transition3');
      bannerImage[0].classList.remove('transition1');
      bannerImage[0].classList.remove('transition2');
      return;
    }
    bannerImage[0].classList.remove('transition1');
    bannerImage[0].classList.remove('transition2');
    bannerImage[0].classList.remove('transition3');
  };

  return (
    <Box className="imageBannerContainer">
      <Image src="/banner.webp" fill alt="banner-image" className="bannerImage" priority quality="0" />
    </Box>
  );
}
