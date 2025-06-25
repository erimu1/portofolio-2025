import React, { useEffect, useRef } from 'react';
const ScrollObserver = ({ children, className, threshold = 0.1, rootMargin = '0px', triggerOnce = true }) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the observed element enters the viewport
        if (entry.isIntersecting) {
          // Add the 'visible' class to trigger animations
          entry.target.classList.add('visible');
          // If triggerOnce is true, disconnect the observer after triggering
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          // If not triggerOnce, remove the class when element leaves viewport
          entry.target.classList.remove('visible');
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);
  return (
    <div
      ref={ref}
      className={`scroll-animated ${className || ''}`}
    >
      {children}
    </div>
  );
};
// Variants for different animation directions
export const ScrollFadeIn = (props) => (
  <ScrollObserver className="fade-in-scroll" {...props} />
);
export const ScrollFadeInLeft = (props) => (
  <ScrollObserver className="slide-in-left" {...props} />
);
export const ScrollFadeInRight = (props) => (
  <ScrollObserver className="slide-in-right" {...props} />
);
export const ScrollFadeInUp = (props) => (
  <ScrollObserver className="fade-in-scroll" {...props} />
);
export const ScrollFadeInDown = (props) => (
  <ScrollObserver className="fade-in-scroll" rootMargin="-100px" {...props} />
);
export const ScrollScale = (props) => (
  <ScrollObserver className="scale-in" {...props} />
);
// New animation variants to match ScrollStaggered
export const ScrollRotate = (props) => (
  <ScrollObserver className="rotate-in" {...props} />
);
export const ScrollBlur = (props) => (
  <ScrollObserver className="blur-in" {...props} />
);
// Helper component for staggered animations
export const ScrollStaggered = ({ children, staggerDelay = 0.1, className, ...props }) => {
  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child, {
      style: {
        ...child.props.style,
        transitionDelay: `${index * staggerDelay}s`
      },
      className: `${child.props.className || ''} ${className || ''}`
    });
  });
};
export default ScrollObserver;