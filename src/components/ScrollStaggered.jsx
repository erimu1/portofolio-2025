import React, { useEffect, useRef, Children, cloneElement } from 'react';
import ScrollObserver from './ScrollObserver';
import { scrollAnimations } from '../config/animationConfig';
const ScrollStaggered = ({
  children,
  className = '',
  baseDelay = scrollAnimations.staggered.defaults.baseDelay,
  staggerDelay = scrollAnimations.staggered.defaults.staggerDelay,
  duration = scrollAnimations.durations.staggered,
  easing = scrollAnimations.easing.standard,
  threshold = scrollAnimations.defaultThreshold,
  rootMargin = '0px',
  triggerOnce = true,
  animation = 'fade-in',
  delayType = 'staggered',
  reverse = false
}) => {
  const childrenArray = Children.toArray(children);
  // Get the appropriate delay value based on delayType
  const getDelayValue = () => {
    switch(delayType) {
      case 'short': return scrollAnimations.delays.short;
      case 'medium': return scrollAnimations.delays.medium;
      case 'long': return scrollAnimations.delays.long;
      default: return staggerDelay;
    }
  };
  // Use the selected delay or the provided staggerDelay
  const actualStaggerDelay = delayType !== 'staggered' ? getDelayValue() : staggerDelay;
  return (
    <div className={`scroll-staggered ${className}`}>
      {childrenArray.map((child, index) => {
        // Calculate delay for this child, considering reverse option
        const itemIndex = reverse ? (childrenArray.length - 1 - index) : index;
        const delay = baseDelay + (itemIndex * actualStaggerDelay);
        // Apply delay and duration as styles
        const style = {
          ...child.props?.style,
          '--animation-delay': `${delay}s`,
          '--animation-duration': `${duration}s`,
          '--animation-easing': easing
        };
        return (
          <ScrollObserver
            key={index}
            className={`${animation} staggered-item`}
            threshold={threshold}
            rootMargin={rootMargin}
            triggerOnce={triggerOnce}
          >
            {cloneElement(child, { style })}
          </ScrollObserver>
        );
      })}
    </div>
  );
};
// Variants for different animation directions
export const ScrollStaggeredFadeIn = (props) => (
  <ScrollStaggered animation="fade-in" {...props} />
);
export const ScrollStaggeredFadeInLeft = (props) => (
  <ScrollStaggered animation="fade-in-left" {...props} />
);
export const ScrollStaggeredFadeInRight = (props) => (
  <ScrollStaggered animation="fade-in-right" {...props} />
);
export const ScrollStaggeredFadeInUp = (props) => (
  <ScrollStaggered animation="fade-in-up" {...props} />
);
export const ScrollStaggeredFadeInDown = (props) => (
  <ScrollStaggered animation="fade-in-down" {...props} />
);
export const ScrollStaggeredScale = (props) => (
  <ScrollStaggered animation="scale-in" {...props} />
);
// New animation variants
export const ScrollStaggeredRotate = (props) => (
  <ScrollStaggered animation="rotate-in" {...props} />
);
export const ScrollStaggeredBlur = (props) => (
  <ScrollStaggered animation="blur-in" {...props} />
);
// Preset configurations for common use cases
export const ScrollStaggeredFast = (props) => (
  <ScrollStaggered delayType="short" duration={0.3} {...props} />
);
export const ScrollStaggeredSlow = (props) => (
  <ScrollStaggered delayType="long" duration={0.8} {...props} />
);
export const ScrollStaggeredReverse = (props) => (
  <ScrollStaggered reverse={true} {...props} />
);
export const ScrollStaggeredBounce = (props) => (
  <ScrollStaggered easing={scrollAnimations.easing.bounce} {...props} />
);
export const ScrollStaggeredSmooth = (props) => (
  <ScrollStaggered easing={scrollAnimations.easing.smooth} {...props} />
);
export default ScrollStaggered;