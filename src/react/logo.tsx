/* eslint-disable react/jsx-props-no-spreading */

import React, { SVGAttributes, forwardRef } from 'react';
import { darkColorPalette, lightColorPalette } from '../color-palette';

export interface LogoProperties extends SVGAttributes<SVGElement> {
  isDark?: undefined | boolean;
}

export const Logo = forwardRef<SVGSVGElement, LogoProperties>(
  (properties, reference) => {
    const { isDark = false, ...rest } = properties;
    const palette = isDark ? darkColorPalette : lightColorPalette;

    return (
      <svg ref={reference} viewBox="0 0 1058 236" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path d="M322.76 67h52.97l.67.63.52.52c4.68 4.74 9.41 9.43 14.13 14.14-5.12 4.99-10.14 10.09-15.2 15.14-3.72-3.67-7.36-7.43-11.12-11.05-10.12.11-20.31-.11-30.42.09-2.31 1.29-4.23 4-6.25 5.79.01 3.25-.17 6.53.04 9.78 1.07 1.76 2.84 3.26 4.41 4.59 4.11.66 8.33.05 12.49.91 10.56.56 21.12 1.43 31.7 1.7 5.27 5.2 10.51 10.44 15.71 15.71-.02 9.08-.07 18.17.02 27.25-4.95 5.13-10.08 10.07-15.06 15.17-1.06.94-1.68 2.02-3.28 1.86-18.35-.02-36.69 0-55.03-.01-5.38-5.18-10.39-10.84-16.06-15.7v-.12c5.19-4.92 10.14-10.13 15.26-15.14 3.9 3.89 7.77 7.79 11.68 11.66 11.34-.07 22.73.11 34.05-.08 2.39-1.47 4.3-4.16 6.44-6.04.03-3.39.01-6.79.1-10.18-1.45-1.56-2.86-3.26-4.56-4.55-4.79-.93-10.17-.95-15.04-1.1-9.82-1.11-19.74-1.15-29.58-1.99-5.21-5.24-10.53-10.39-15.66-15.73.13-8.75.06-17.5.04-26.25 5.65-5.69 11.32-11.37 17.03-17Z" fill={palette.secondary} />
        <path clipRule="evenodd" d="M483.09 67h-68.98c.048 23.305.035 46.629.022 69.949-.006 10.762-.012 21.523-.012 32.281 7.36-.02 14.71-.01 22.06 0 0-3.283-.002-6.566-.004-9.851-.006-8.76-.012-17.525.024-26.289 10.035-.064 20.075-.054 30.113-.044 5.576.006 11.152.011 16.727.004 5.69-5.64 11.38-11.3 17.01-17-.02-10.71-.02-21.41-.01-32.12l-2.976-2.989c-4.64-4.66-9.287-9.328-13.974-13.941Zm-26.752 19.58c-6.717-.02-13.434-.04-20.148.1-.002 1.962-.006 3.924-.011 5.887-.014 6.868-.029 13.735.041 20.603 6.113.081 12.226.069 18.337.056 5.156-.011 10.31-.022 15.463.024 2.36.468 4.239-1.611 5.938-3.49.627-.693 1.229-1.359 1.822-1.86-.03-5.26-.04-10.52 0-15.78-1.85-1.88-3.73-3.74-5.64-5.57-5.266.062-10.534.046-15.802.03Z" fill={palette.secondary} fillRule="evenodd" />
        <path d="M521.24 67h81.93c-.03 6.53-.01 13.07-.01 19.6-19.98.01-39.98-.12-59.96.07-.01 7.1-.07 14.21.03 21.32 17.48.18 34.98.09 52.46.04-.07 6.65-.03 13.31-.02 19.97-17.49.04-34.98-.03-52.48.04-.03 7.07.02 14.14-.03 21.22 20 .2 40.01.02 60 .1-.01 6.62 0 13.25.01 19.87-27.31-.02-54.62-.01-81.93 0 .04-34.07.02-68.15 0-102.23Z" fill={palette.secondary} />
        <path clipRule="evenodd" d="M680.29 67h-22.48c-6.76 16.98-13.428 34.057-20.095 51.135-6.668 17.077-13.335 34.155-20.095 51.135 3.907-.066 7.812-.057 11.716-.048 3.769.008 7.536.017 11.304-.042 1.137-3.721 2.476-7.381 3.813-11.039 1.086-2.968 2.171-5.934 3.147-8.931 13.95-.08 27.9-.05 41.84-.02 2.3 6.71 4.64 13.43 7.14 20.07 7.94-.06 15.9-.07 23.84 0-9.911-25.104-19.74-50.247-29.567-75.388-3.42-8.748-6.84-17.496-10.263-26.242l-.3-.63Zm-5.69 40.944c-1.995-5.491-3.99-10.983-5.86-16.514-1.28 2.36-2.24 4.81-3.06 7.36a2436.22 2436.22 0 0 1-4.156 11.614c-2.301 6.396-4.602 12.792-6.814 19.216 9.14.07 18.31.07 27.45 0-2.331-7.283-4.946-14.479-7.56-21.676ZM808.18 67h-68.92c.002 7.864.006 15.727.01 23.59.013 26.217.026 52.431-.02 78.64l3.133-.005c6.266-.009 12.533-.019 18.807.015.008-4.766.002-9.533-.003-14.299-.008-7.944-.017-15.887.033-23.831 5.141-.061 10.282-.053 15.421-.045 2.397.004 4.793.008 7.189.005 7.1 12.68 14.11 25.41 21.07 38.17 2.618.006 5.237-.005 7.855-.017 5.675-.025 11.35-.05 17.015.107-3.5-6.221-6.967-12.462-10.434-18.703-3.656-6.579-7.311-13.158-11.006-19.717 1.724-1.727 3.443-3.461 5.161-5.194 3.723-3.756 7.445-7.511 11.229-11.206.079-7.453.065-14.905.051-22.358-.006-2.897-.011-5.795-.011-8.692-2.564-2.509-5.096-5.047-7.628-7.585-2.968-2.975-5.935-5.95-8.952-8.875Zm-26.077 19.579c-6.972-.02-13.944-.038-20.913.101-.012 3.292-.008 6.584-.004 9.876.006 4.937.012 9.872-.036 14.804 7.196.203 14.402.178 21.607.152 4.84-.017 9.679-.034 14.513.018 1.89-1.87 3.75-3.76 5.58-5.68-.02-4.59-.03-9.19 0-13.79-1.84-1.87-3.72-3.69-5.62-5.5-5.041.046-10.084.032-15.127.019ZM943.77 67h-22.63c-6.029 15.453-12.083 30.908-18.137 46.365a30885.217 30885.217 0 0 0-21.863 55.925c7.56-.11 15.17-.12 22.73 0 2.42-6.67 4.8-13.36 7.15-20.06 7.337-.09 14.676-.076 22.015-.063 6.546.012 13.092.024 19.635-.037 1.337 3.37 2.534 6.794 3.731 10.217 1.158 3.312 2.316 6.623 3.599 9.883 7.93-.01 15.86-.02 23.79.01-3.71-9.474-7.424-18.95-11.138-28.426-9.534-24.319-19.069-48.644-28.532-72.974l-.35-.84Zm-8.058 34.524c-1.229-3.41-2.458-6.822-3.682-10.234-1.1 2.004-1.801 4.128-2.51 6.273-.162.489-.323.978-.49 1.467-.939 2.623-1.884 5.244-2.829 7.865-2.726 7.564-5.452 15.128-8.051 22.725 9.19.07 18.39.07 27.57 0-3.268-9.387-6.638-18.742-10.008-28.096Z" fill={palette.secondary} fillRule="evenodd" />
        <path d="M998.3 67h59.7v19.43c-6.29.4-12.62 0-18.92.19-.06 20.89 0 41.79-.03 62.68 6.31.2 12.65-.2 18.95.22v19.68c-19.91.09-39.83-.06-59.74.07.08-6.63.04-13.26.02-19.89 6.26-.1 12.53.07 18.79-.11-.26-20.93-.05-41.78-.18-62.69-6.2-.02-12.4.03-18.61-.02.03-6.52.02-13.04.02-19.56Z" fill={palette.secondary} />
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

Logo.displayName = 'Logo';
