'use client'
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface I_initialVavlueSectionObserver {
  hash: string,
  setHash: Dispatch<SetStateAction<string>>
}
const initialVavlueSectionObserver = {
  hash: '',
  setHash: () => { }
}

const SectionObserver = createContext<I_initialVavlueSectionObserver>(initialVavlueSectionObserver)
export const useSectionObserver = () => useContext<I_initialVavlueSectionObserver>(SectionObserver)
export interface SectionObserverProviderProps {
  children: React.ReactNode
}
const SectionObserverProvider: React.FC<SectionObserverProviderProps> = ({
  children
}) => {
  // Reducers
  // State
  const [hash, setHash] = useState('')

  // Effects

  // Functions

  // Render
  return (
    <SectionObserver.Provider value={{
      hash, setHash
    }}>
      {children}
    </SectionObserver.Provider>
  );
}

export default SectionObserverProvider;