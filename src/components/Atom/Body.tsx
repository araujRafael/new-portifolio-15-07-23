'use client'
import React, { HTMLAttributes } from 'react';

interface BodyProps extends HTMLAttributes<HTMLBodyElement> {
  font: any
}

const Body: React.FC<BodyProps> = ({ font, children }) => {
  // State ***************************************************************

  // Effects ***************************************************************

  // Render ***************************************************************
  return <body
    className={`bg-black text-white overflow-y-auto
    ${font.variable} 
  `}
  >
    {children}
  </body>;
}

export default Body;