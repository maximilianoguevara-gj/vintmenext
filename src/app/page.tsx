import React from "react";

export const Image = (): JSX.Element => {
  return (
    <div className="w-[1440px] h-[600px]">
      <img
        className="fixed w-[1440px] h-[600px] top-0 left-0 object-cover"
        alt="Fondo vintme figma"
        src="fondo-vintme-figma-1.png"
      />
    </div>
  );
};
