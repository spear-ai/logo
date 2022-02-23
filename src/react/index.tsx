/* eslint-disable react/jsx-props-no-spreading */

import React, { SVGAttributes, forwardRef, useMemo } from 'react';

export interface LogoProperties extends SVGAttributes<SVGElement> {
  isDark?: undefined | boolean;
}

export const Logo = forwardRef<SVGSVGElement, LogoProperties>(
  (properties, reference) => {
    const { isDark = false, ...rest } = properties;

    const innerStyle = useMemo(
      () => ({ filter: `brightness(${isDark ? 3.85 : 0.25})` }),
      [isDark],
    );

    return (
      <svg ref={reference} fill="#3070b8" viewBox="0 0 271 234" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path d="M86.5-.5h99a3064.813 3064.813 0 0 0 51.5 91c.635 2.135.301 4.135-1 6l-14 24A12650.761 12650.761 0 0 0 168.5 28a4804.631 4804.631 0 0 1-98-1.5c5.36-9.017 10.694-18.017 16-27ZM53.5 56.5c10.84-1.324 21.84-1.324 33 0-.124.607-.457.94-1 1-10.487-.994-21.154-1.328-32-1Z" />
        <path d="M53.5 56.5c10.846-.328 21.513.006 32 1a3105.976 3105.976 0 0 0-52 92c15.341 27.351 30.674 54.684 46 82-4.47.986-9.137 1.319-14 1h-18A1979.461 1979.461 0 0 0 .5 150a4224.892 4224.892 0 0 1 53-93.5Z" />
        { /* eslint-disable-next-line react/forbid-dom-props */ }
        <path d="M119.5 55.5c11.005-.166 22.005 0 33 .5a4201.522 4201.522 0 0 1 53 92.5 365.05 365.05 0 0 1-16 28 1944.393 1944.393 0 0 1-108 .5c-6.159-9.491-11.325-19.324-15.5-29.5a6204.22 6204.22 0 0 1 53.5-92Z" style={innerStyle} />
        <path d="M270.5 147.5v2a2600.178 2600.178 0 0 0-49 84h-109a220.926 220.926 0 0 0-15-27.5c36.005-.167 72.005-.667 108-1.5a6482.894 6482.894 0 0 1 48.5-83 550.12 550.12 0 0 1 16.5 26ZM79.5 231.5c.838.342 1.172 1.008 1 2h-15v-1c4.863.319 9.53-.014 14-1Z" />
      </svg>
    );
  },
);

Logo.displayName = 'Logo';
