import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

export default function IconGithub({ width = 29, height = 28, color = '' }) {
  const { colorMode } = useColorMode();

  const currentColor = color || (colorMode === 'light' ? '#1C1E21' : '#867F70');

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1036 7.94577e-07C10.7778 -0.00113313 7.56019 1.21141 5.02685 3.42053C2.49351 5.62965 0.809864 8.6911 0.277358 12.0568C-0.255148 15.4224 0.398257 18.8725 2.12059 21.7893C3.84292 24.7061 6.5217 26.8992 9.67734 27.9759C10.3729 28.109 10.6326 27.6645 10.6326 27.2842C10.6326 26.9419 10.621 25.8128 10.6141 24.6123C6.71876 25.48 5.89796 22.9198 5.89796 22.9198C5.26034 21.2559 4.34216 20.8185 4.34216 20.8185C3.07154 19.9271 4.43722 19.9461 4.43722 19.9461C5.84463 20.0483 6.58428 21.4247 6.58428 21.4247C7.83402 23.6187 9.86051 22.9864 10.6581 22.6132C10.7857 21.6861 11.1474 21.0538 11.5485 20.6949C8.44846 20.336 5.16759 19.1046 5.16759 13.6041C5.14678 12.1754 5.66418 10.7935 6.6121 9.74605C6.46603 9.38473 5.98607 7.9252 6.74658 5.94271C6.74658 5.94271 7.92213 5.55762 10.5978 7.41413C12.8937 6.77071 15.3159 6.77071 17.6117 7.41413C20.2735 5.56713 21.4583 5.94271 21.4583 5.94271C22.2189 7.92044 21.7412 9.37997 21.5951 9.74605C22.5405 10.7929 23.0561 12.1729 23.035 13.5993C23.035 19.1141 19.7611 20.3264 16.6425 20.683C17.1434 21.1275 17.5909 22.0023 17.5909 23.3406C17.5909 25.2613 17.5769 26.8088 17.5769 27.2794C17.5769 27.6621 17.8274 28.109 18.5369 27.9688C21.6879 26.888 24.3614 24.6936 26.0795 21.7779C27.7976 18.8621 28.4483 15.415 27.9154 12.0527C27.3824 8.69028 25.7005 5.63178 23.1703 3.42379C20.64 1.21581 17.4263 0.00224549 14.1036 7.94577e-07Z"
        fill={currentColor}
      />
      <path
        d="M5.4038 20.6094C5.37366 20.6807 5.26468 20.7021 5.17194 20.6546C5.07919 20.607 5.01195 20.5096 5.04441 20.4383C5.07687 20.367 5.18585 20.3456 5.27628 20.3931C5.3667 20.4406 5.43626 20.5381 5.40148 20.6094H5.4038Z"
        fill={currentColor}
      />
      <path
        d="M5.97213 21.2586C5.90489 21.3228 5.77505 21.2919 5.68462 21.192C5.64236 21.157 5.61474 21.1067 5.60742 21.0515C5.60009 20.9963 5.61361 20.9403 5.6452 20.8949C5.71476 20.8307 5.83997 20.8616 5.93272 20.9615C6.02546 21.0613 6.04169 21.1992 5.97213 21.2586Z"
        fill={currentColor}
      />
      <path
        d="M6.52407 22.0854C6.43828 22.1472 6.29221 22.0854 6.21105 21.9618C6.1299 21.8382 6.12526 21.6813 6.21105 21.6195C6.29684 21.5577 6.44292 21.6195 6.52407 21.7407C6.60522 21.862 6.60986 22.0236 6.52407 22.0854Z"
        fill={currentColor}
      />
      <path
        d="M7.28848 22.8841C7.26028 22.905 7.22829 22.92 7.19439 22.9281C7.16048 22.9362 7.12534 22.9373 7.09102 22.9313C7.05669 22.9253 7.02388 22.9124 6.99448 22.8933C6.96509 22.8741 6.93971 22.8492 6.91982 22.8199C6.79693 22.7034 6.76215 22.5394 6.84099 22.4538C6.91982 22.3683 7.07285 22.3896 7.20269 22.5085C7.33254 22.6274 7.36036 22.789 7.27921 22.8746L7.28848 22.8841Z"
        fill={currentColor}
      />
      <path
        d="M8.32358 23.3479C8.2888 23.4596 8.13345 23.5119 7.97346 23.4643C7.81348 23.4168 7.71146 23.2837 7.7416 23.1696C7.77174 23.0555 7.93173 23.0032 8.09171 23.0531C8.2517 23.103 8.35372 23.2338 8.32358 23.3479Z"
        fill={currentColor}
      />
      <path
        d="M9.46872 23.4333C9.46872 23.5522 9.33888 23.6497 9.17194 23.652C9.00499 23.6544 8.87051 23.5617 8.86819 23.4429C8.86588 23.324 8.99804 23.2265 9.1673 23.2242C9.33656 23.2218 9.46872 23.3169 9.46872 23.4333Z"
        fill={currentColor}
      />
      <path
        d="M10.5354 23.2478C10.5563 23.3643 10.4404 23.4855 10.2757 23.514C10.1111 23.5425 9.96271 23.4736 9.94184 23.3571C9.92097 23.2407 10.0392 23.1194 10.2015 23.0909C10.3638 23.0624 10.5145 23.1313 10.5354 23.2478Z"
        fill={currentColor}
      />
    </svg>
  );
}
