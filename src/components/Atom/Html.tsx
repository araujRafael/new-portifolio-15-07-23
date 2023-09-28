'use client'
import React, { HTMLAttributes } from 'react';

// import { Container } from './styles';

interface HtmlProps extends HTMLAttributes<HTMLHtmlElement> { }

const Html: React.FC<HtmlProps> = ({ children }) => {
  return <html lang="en"
  >
    {children}
  </html>;
}

export default Html;