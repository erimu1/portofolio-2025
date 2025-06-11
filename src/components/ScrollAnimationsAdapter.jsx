import React from 'react';
import {
  ScrollFadeIn as ObserverFadeIn,
  ScrollFadeInLeft as ObserverFadeInLeft,
  ScrollFadeInRight as ObserverFadeInRight,
  ScrollFadeInUp as ObserverFadeInUp,
  ScrollFadeInDown as ObserverFadeInDown,
  ScrollScale as ObserverScale,
  ScrollRotate as ObserverRotate,
  ScrollBlur as ObserverBlur
} from './ScrollObserver';
import { 
  ScrollStaggeredFadeIn,
  ScrollStaggeredFadeInLeft,
  ScrollStaggeredFadeInRight,
  ScrollStaggeredFadeInUp,
  ScrollStaggeredFadeInDown,
  ScrollStaggeredScale,
  ScrollStaggeredRotate,
  ScrollStaggeredBlur,
  ScrollStaggeredFast,
  ScrollStaggeredSlow,
  ScrollStaggeredReverse,
  ScrollStaggeredBounce,
  ScrollStaggeredSmooth
} from './ScrollStaggered';

/**
 * This adapter ensures compatibility between the new ScrollObserver implementation
 * and the existing ScrollAnimations component that's already being used in the project.
 * 
 * It re-exports the components from ScrollObserver with the same names as in ScrollAnimations,
 * allowing for a seamless transition between the two implementations.
 */

// Re-export ScrollFadeIn with the same API as the original
export const ScrollFadeIn = ({ children, delay = 0, threshold = 0.1, ...props }) => (
  <ObserverFadeIn threshold={threshold} {...props}>
    <div style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  </ObserverFadeIn>
);

// Re-export ScrollFadeInLeft with the same API as the original
export const ScrollFadeInLeft = ({ children, delay = 0, threshold = 0.1, ...props }) => (
  <ObserverFadeInLeft threshold={threshold} {...props}>
    <div style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  </ObserverFadeInLeft>
);

// Re-export ScrollFadeInRight with the same API as the original
export const ScrollFadeInRight = ({ children, delay = 0, threshold = 0.1, ...props }) => (
  <ObserverFadeInRight threshold={threshold} {...props}>
    <div style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  </ObserverFadeInRight>
);

// Re-export ScrollScale with the same API as the original
export const ScrollScale = ({ children, delay = 0, threshold = 0.1, ...props }) => (
  <ObserverScale threshold={threshold} {...props}>
    <div style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  </ObserverScale>
);

// Re-export ScrollStagger with the same API as the original
export const ScrollStagger = ({ children, delay = 0, staggerDelay = 0.1, threshold = 0.1, ...props }) => (
  <ScrollStaggeredFadeIn 
    baseDelay={delay} 
    staggerDelay={staggerDelay} 
    threshold={threshold} 
    {...props}
  >
    {children}
  </ScrollStaggeredFadeIn>
);

// Re-export StaggerItem for compatibility
export const StaggerItem = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);

// Export new animation variants for use in the application
export const ScrollRotate = ({ children, delay = 0, threshold = 0.1, ...props }) => (
  <ObserverRotate threshold={threshold} {...props}>
    <div style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  </ObserverRotate>
);

export const ScrollBlur = ({ children, delay = 0, threshold = 0.1, ...props }) => (
  <ObserverBlur threshold={threshold} {...props}>
    <div style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  </ObserverBlur>
);

// Export staggered animation presets
export const ScrollStaggerFast = ({ children, ...props }) => (
  <ScrollStaggeredFast {...props}>
    {children}
  </ScrollStaggeredFast>
);

export const ScrollStaggerSlow = ({ children, ...props }) => (
  <ScrollStaggeredSlow {...props}>
    {children}
  </ScrollStaggeredSlow>
);

export const ScrollStaggerReverse = ({ children, ...props }) => (
  <ScrollStaggeredReverse {...props}>
    {children}
  </ScrollStaggeredReverse>
);

export const ScrollStaggerBounce = ({ children, ...props }) => (
  <ScrollStaggeredBounce {...props}>
    {children}
  </ScrollStaggeredBounce>
);

export const ScrollStaggerSmooth = ({ children, ...props }) => (
  <ScrollStaggeredSmooth {...props}>
    {children}
  </ScrollStaggeredSmooth>
);