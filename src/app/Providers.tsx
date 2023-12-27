'use client'
import { NavigationMenu } from '@/components/Atom/NavigationMenu';
import { ChackraProviders } from '@/components/ChackraProviders';
import SectionObserverProvider from '@/contexts/SectionObserver';
import React, { HTMLAttributes, useEffect, useState } from 'react';

// import { Container } from './styles';

interface ProvidersProps extends HTMLAttributes<HTMLDivElement> { }

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [child, setChild] = useState(false)

  useEffect(() => {
    setChild(typeof window !== 'undefined')
  }, [])

  return child && <>
    <SectionObserverProvider>
      <ChackraProviders>
        <NavigationMenu />
        {children}
      </ChackraProviders>
    </SectionObserverProvider>
  </>;
}

export default Providers;