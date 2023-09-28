'use client'
import { NavigationMenu } from '@/components/Atom/NavigationMenu';
import { ChackraProviders } from '@/components/ChackraProviders';
import SectionObserverProvider from '@/contexts/SectionObserver';
import React, { HTMLAttributes } from 'react';

// import { Container } from './styles';

interface ProvidersProps extends HTMLAttributes<HTMLDivElement> { }

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <>
    <ChackraProviders>
      <SectionObserverProvider>
        <NavigationMenu />
        {children}
      </SectionObserverProvider>
    </ChackraProviders>
  </>;
}

export default Providers;