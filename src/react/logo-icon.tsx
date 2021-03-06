/* eslint-disable react/jsx-props-no-spreading */

import React, { SVGAttributes, forwardRef } from 'react';
import { darkColorPalette, lightColorPalette } from '../color-palette';

export interface LogoIconProperties extends SVGAttributes<SVGElement> {
  isDark?: undefined | boolean;
}

export const LogoIcon = forwardRef<SVGSVGElement, LogoIconProperties>(
  (properties, reference) => {
    const { isDark = false, ...rest } = properties;
    const palette = isDark ? darkColorPalette : lightColorPalette;

    return (
      <svg ref={reference} viewBox="0 0 271 236" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <g clipPath="url(#a)">
          <path d="M86.95.81c16.34-.06 32.71.25 49.05-.2 16.41-.05 32.78.1 49.18.27 17.91 31.05 35.74 62.16 53.59 93.25-5.32 9.27-10.75 18.48-16.08 27.74-17.03-29.79-34.21-59.51-51.26-89.29-.81-1.42-1.68-2.81-2.58-4.17-32.67.18-65.35-.16-98.02-.08C76.37 19.26 81.47 9.92 86.95.81Z" fill={palette.primary} />
          <path d="M119.9 57.04c10.94.62 22 .16 32.96.28 17.91 30.96 35.61 62.05 53.52 93.02-5.39 9.64-11.1 19.1-16.54 28.71-35.9-.04-72.11.06-107.97-.09-5.55-9.32-10.8-18.84-16.3-28.2 17.96-31.31 36.14-62.53 54.33-93.72Z" fill={palette.secondary} />
          <path d="M54.06 57.57c10.71-.1 21.43.07 32.14-.07-18.01 31.12-35.76 62.4-53.72 93.55 15.97 28.14 32.18 56.19 48.41 84.19-10.88-.58-21.74-.9-32.61-1.47-15.85-27.38-31.76-54.73-47.52-82.15 17.7-31.36 35.46-62.78 53.3-94.05ZM255.37 122.67c4.97 9.32 10.56 18.3 15.63 27.57v.74c-16.35 28.14-32.61 56.34-49.02 84.43-36.04-.02-72.08-.21-108.12-.2-5.39-9.16-10.53-18.47-15.99-27.59 36.03.09 72.07.18 108.1.13 16.51-28.33 32.93-56.72 49.4-85.08Z" fill={palette.primary} />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h271v236H0z" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

LogoIcon.displayName = 'LogoIcon';
