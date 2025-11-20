"use client";

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animationType?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'slideUp' | 'zoomIn';
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animationType = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  className = '',
  stagger = false,
  staggerDelay = 100,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const getAnimationClass = () => {
    const baseClasses = 'transition-all ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeInUp':
          return `${baseClasses} opacity-0 translate-y-12`;
        case 'fadeInDown':
          return `${baseClasses} opacity-0 -translate-y-12`;
        case 'fadeInLeft':
          return `${baseClasses} opacity-0 -translate-x-12`;
        case 'fadeInRight':
          return `${baseClasses} opacity-0 translate-x-12`;
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-16`;
        case 'zoomIn':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-12`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  // Handle staggered animations
  const renderContent = () => {
    if (!stagger) {
      return children;
    }

    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;
      
      return (
        <div
          key={index}
          style={{
            transitionDelay: isVisible ? `${delay + (index * staggerDelay)}ms` : '0ms',
            transitionDuration: `${duration}s`,
            transition: 'all ease-out',
          }}
        >
          {child}
        </div>
      );
    });
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: !stagger ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}s`,
      }}
    >
      {renderContent()}
    </div>
  );
};