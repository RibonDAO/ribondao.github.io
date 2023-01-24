import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

export default function IconRetract({ width = 8, height = 3, color = '' }) {
  const { colorMode } = useColorMode();

  const currentColor = color || (colorMode === 'light' ? '#025B37' : '#D4CEC3');

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.22621 0.933238V2.77273H0.777344V0.933238H7.22621Z"
        fill={currentColor}
      />
    </svg>
  );
}
