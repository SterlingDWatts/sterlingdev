import React from "react";

interface Props {
  height?: string;
  fill?: string;
}

const LightFileUser = ({ height, fill }: Props) => {
  const svgProps: { height?: string } = {};
  if (height) svgProps.height = height;

  const pathProps: { fill?: string } = {};
  if (fill) pathProps.fill = fill;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...svgProps}>
      <path
        {...pathProps}
        d="M365.3 125.3l-106.5-106.5C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5C384 153.5 377.3 137.3 365.3 125.3zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5C346.1 151.3 348.4 155.5 349.9 160H240C231.2 160 224 152.8 224 144V34.08zM272 480h-160v-16C112 437.5 133.5 416 160 416h64c26.51 0 48 21.49 48 48V480zM352 448c0 17.64-14.36 32-32 32h-16v-16c0-44.18-35.82-80-80-80H160c-44.18 0-80 35.82-80 80V480H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112C192 170.5 213.5 192 240 192H352V448zM192 224C156.7 224 128 252.7 128 288s28.65 64 64 64s64-28.65 64-64S227.3 224 192 224zM192 320c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S209.6 320 192 320z"
      />
    </svg>
  );
};

export default LightFileUser;