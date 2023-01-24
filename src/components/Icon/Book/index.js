import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

export default function IconBook({ width = 20, height = 17, color = '' }) {
  const { colorMode } = useColorMode();

  const currentColor = color || (colorMode === 'light' ? '#1C1E21' : '#D4CEC3');

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2.73737V15.7374M10 2.73737C8.832 1.96137 7.246 1.48438 5.5 1.48438C3.754 1.48438 2.168 1.96137 1 2.73737V15.7374C2.168 14.9614 3.754 14.4844 5.5 14.4844C7.246 14.4844 8.832 14.9614 10 15.7374M10 2.73737C11.168 1.96137 12.754 1.48438 14.5 1.48438C16.247 1.48438 17.832 1.96137 19 2.73737V15.7374C17.832 14.9614 16.247 14.4844 14.5 14.4844C12.754 14.4844 11.168 14.9614 10 15.7374"
        stroke={currentColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
