import React from "react";

interface Props {
  height?: string;
  fill?: string;
}

const LightBrowser = ({ height, fill }: Props) => {
  const svgProps: { height?: string } = {};
  if (height) svgProps.height = height;

  const pathProps: { fill?: string } = {};
  if (fill) pathProps.fill = fill;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...svgProps}>
      <path
        {...pathProps}
        d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM160 128H480V96C480 78.33 465.7 64 448 64H160V128zM128 64H64C46.33 64 32 78.33 32 96V128H128V64zM32 160V416C32 433.7 46.33 448 64 448H448C465.7 448 480 433.7 480 416V160H32z"
      />
    </svg>
  );
};

export default LightBrowser;
