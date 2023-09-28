import { NavigationMenu } from '@/components/Atom/NavigationMenu';
import { ChackraProviders } from '@/components/ChackraProviders';
import React, { HTMLAttributes } from 'react';

// import { Container } from './styles';

interface ProvidersProps extends HTMLAttributes<HTMLDivElement> { }

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <>
    <ChackraProviders>
      <NavigationMenu />
      {children}
    </ChackraProviders>
  </>;
}

export default Providers;