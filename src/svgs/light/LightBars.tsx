import React from "react";

interface Props {
  height?: string;
  fill?: string;
}

const LightBars = ({ height, fill }: Props) => {
  const svgProps: { height?: string } = {};
  if (height) svgProps.height = height;

  const pathProps: { fill?: string } = {};
  if (fill) pathProps.fill = fill;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...svgProps}>
      <path
        {...pathProps}
        d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM0 240C0 231.2 7.164 224 16 224H432C440.8 224 448 231.2 448 240C448 248.8 440.8 256 432 256H16C7.164 256 0 248.8 0 240zM432 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H432C440.8 384 448 391.2 448 400C448 408.8 440.8 416 432 416z"
      />
    </svg>
  );
};

export default LightBars;
