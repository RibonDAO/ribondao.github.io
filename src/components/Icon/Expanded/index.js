import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

export default function IconExpanded({ width = 10, height = 11, color = '' }) {
  const { colorMode } = useColorMode();

  const currentColor = color || (colorMode === 'light' ? '#025B37' : '#D4CEC3');

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.04297 10.0767V0.474431H5.95348V10.0767H4.04297ZM0.200639 6.22727V4.31676H9.80291V6.22727H0.200639Z"
        fill={currentColor}
      />
    </svg>
  );
}
