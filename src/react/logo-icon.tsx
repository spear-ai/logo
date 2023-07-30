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
      <svg ref={reference} viewBox="75 129.904 416.5 360.7" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <use href="#logo_arc" />
        <use href="#logo_arc" transform="rotate(-120 283.25 327.069)" />
        <use href="#logo_arc" transform="rotate(120 283.25 327.069)" />
        <path d="M200 404.001h166.5l25-43.301-83.25-144.194h-50L175 360.7z" fill={palette.secondary} />
        <defs>
          <path
            d="M150 490.603h50L125 360.7l83.25-144.194h-50L75 360.7z"
            fill={palette.primary}
            id="logo_arc"
          />
        </defs>
      </svg>
    );
  },
);

LogoIcon.displayName = 'LogoIcon';
