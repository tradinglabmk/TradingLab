"use client";

import React, { useEffect, useState } from 'react';
import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper/ScrollAnimationWrapper';

interface SEOScrollWrapperProps {
  children: React.ReactNode;
  animationType?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'slideUp' | 'zoomIn';
  delay?: number;
  duration?: number;
  className?: string;
}

export const SEOScrollWrapper: React.FC<SEOScrollWrapperProps> = ({
  children,
  animationType = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  className = ''
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag after hydration
    setIsClient(true);
  }, []);

  // On server and during hydration, render children without animations
  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  // On client-side, render with animations
  return (
    <ScrollAnimationWrapper
      animationType={animationType}
      delay={delay}
      duration={duration}
      className={className}
    >
      {children}
    </ScrollAnimationWrapper>
  );
};