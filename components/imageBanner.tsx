'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import './imageBanner.css';
import { Box } from '@ui/Box';

const handleScroll = () => {
  const imageList = document.querySelectorAll('#image-list-container');
  const bannerImage = document.querySelectorAll('.banner-image');
  const bannerImageContainer = document.querySelectorAll('.image-banner-container');

  const elementTop = imageList[0]?.getBoundingClientRect()?.top;

  //todo refactor and remove extra lines
  if (elementTop < 400 && elementTop > 250) {
    bannerImage[0].classList.add('transition1');
    bannerImage[0].classList.remove('transition2');
    bannerImage[0].classList.remove('transition3');
    bannerImageContainer[0].classList.add('transition1');
    bannerImageContainer[0].classList.remove('transition2');
    bannerImageContainer[0].classList.remove('transition3');
    return;
  }
  if (elementTop < 250 && elementTop > 100) {
    bannerImage[0].classList.add('transition2');
    bannerImage[0].classList.remove('transition1');
    bannerImage[0].classList.remove('transition3');
    bannerImageContainer[0].classList.add('transition2');
    bannerImageContainer[0].classList.remove('transition1');
    bannerImageContainer[0].classList.remove('transition3');
    return;
  }
  if (elementTop < 100) {
    bannerImage[0].classList.add('transition3');
    bannerImage[0].classList.remove('transition1');
    bannerImage[0].classList.remove('transition2');
    bannerImageContainer[0].classList.add('transition3');
    bannerImageContainer[0].classList.remove('transition1');
    bannerImageContainer[0].classList.remove('transition2');
    return;
  }
  bannerImage[0].classList.remove('transition1');
  bannerImage[0].classList.remove('transition2');
  bannerImage[0].classList.remove('transition3');
  bannerImageContainer[0].classList.remove('transition1');
  bannerImageContainer[0].classList.remove('transition2');
  bannerImageContainer[0].classList.remove('transition3');
};

export function ImageBanner() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className="image-banner-container">
      <Image src="/banner.webp" fill alt="banner-image" className="banner-image" />
    </Box>
  );
}
