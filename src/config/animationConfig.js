export const pageTransitions = {
  variants: {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    },
    slideInitial: {
      opacity: 0,
      x: 50
    },
    slideIn: {
      opacity: 1,
      x: 0
    },
    slideExit: {
      opacity: 0,
      x: -50
    },
    scaleInitial: {
      opacity: 0,
      scale: 0.9
    },
    scaleIn: {
      opacity: 1,
      scale: 1
    },
    scaleExit: {
      opacity: 0,
      scale: 1.1
    }
  },
  transition: {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  },
  alternatives: {
    smooth: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.6
    },
    bounce: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    },
    fade: {
      type: 'tween',
      ease: 'linear',
      duration: 0.4
    },
    elastic: {
      type: 'spring',
      stiffness: 80,
      damping: 8
    },
    slowmo: {
      type: 'tween',
      ease: 'circOut',
      duration: 0.8
    }
  },
  presets: {
    default: {
      variant: 'in',
      transition: 'smooth'
    },
    dramatic: {
      variant: 'scaleIn',
      transition: 'elastic'
    },
    subtle: {
      variant: 'in',
      transition: 'fade'
    },
    slide: {
      variant: 'slideIn',
      transition: 'slowmo'
    }
  }
};
export const backgroundAnimations = {
  blobSizes: {
    blob1: '700px',
    blob2: '600px',
    blob3: '550px',
    blob4: '650px'
  },
  blobColors: {
    blob1: 'rgba(74, 158, 47, 0.08)',  // Green - increased opacity
    blob2: 'rgba(255, 122, 61, 0.07)',   // Orange - increased opacity
    blob3: 'rgba(61, 133, 198, 0.06)',   // Blue - increased opacity
    blob4: 'rgba(255, 143, 163, 0.06)'   // Pink - increased opacity
  },
  animationDurations: {
    blob1: '35s',  // Slightly faster
    blob2: '45s',  // Slightly faster
    blob3: '55s',  // Slightly faster
    blob4: '40s'   // Slightly faster
  },
  animationPaths: {
    blob1: 'circular',
    blob2: 'figure8',
    blob3: 'wave',
    blob4: 'random'
  },
  parallaxSensitivity: 18, // Increased for more pronounced effect
  scrollParallaxSensitivity: 0.07 // Increased for more pronounced effect
};
export const scrollAnimations = {
  defaultThreshold: 0.15,
  thresholds: {
    early: 0.05,     // Trigger animation earlier
    standard: 0.15,  // Default threshold
    late: 0.25,      // Trigger animation later
    custom: [0, 0.25, 0.5, 0.75, 1] // For more precise control
  },
  durations: {
    fadeIn: 0.7,
    slideIn: 0.6,
    scale: 0.5,
    staggered: 0.7,  // Duration for staggered animations
    fast: 0.3,       // Quick animations
    slow: 1.0        // Slower, more dramatic animations
  },
  delays: {
    staggered: 0.12,
    short: 0.06,    // Shorter delay for quick sequences
    medium: 0.15,   // Medium delay for balanced sequences
    long: 0.2,      // Longer delay for dramatic effect
    sequence: [0.1, 0.2, 0.3, 0.4, 0.5] // For precise sequencing
  },
  easing: {
    standard: 'easeOut',
    bounce: [0.175, 0.885, 0.32, 1.275],
    smooth: 'easeInOut',
    sharp: 'easeIn',
    elastic: [0.64, 0.57, 0.67, 1.53],
    gentle: 'circOut',
    accelerate: 'cubicIn',
    decelerate: 'cubicOut'
  },
  staggered: {
    types: [
      'fade-in',
      'fade-in-up',
      'fade-in-down',
      'fade-in-left',
      'fade-in-right',
      'scale-in',
      'rotate-in',
      'blur-in',
      'flip-in',        // New animation type
      'swing-in',       // New animation type
      'bounce-in',      // New animation type
      'slide-in-up',    // New animation type
      'slide-in-down',  // New animation type
      'zoom-in',        // New animation type
      'reveal-left',    // New animation type
      'reveal-right'    // New animation type
    ],
    defaults: {
      baseDelay: 0,
      staggerDelay: 0.1,
      duration: 0.5
    }
  },
  presets: {
    subtle: {
      type: 'fade-in',
      duration: 0.5,
      easing: 'smooth',
      threshold: 0.1
    },
    dramatic: {
      type: 'scale-in',
      duration: 0.8,
      easing: 'bounce',
      threshold: 0.2
    },
    cascade: {
      type: 'fade-in-up',
      staggered: true,
      staggerDelay: 0.08,
      duration: 0.6,
      easing: 'standard'
    },
    reveal: {
      type: 'reveal-left',
      duration: 0.7,
      easing: 'decelerate',
      threshold: 0.15
    }
  },
  responsive: {
    reduceMotion: true,  // Respect user's reduce motion settings
    mobile: {
      simplifyAnimations: true,
      reduceDuration: 0.8  // Multiply duration by this factor on mobile
    }
  }
};
export const uiAnimations = {
  buttons: {
    scale: 1.05,
    duration: 0.2,
    effects: {
      glow: {
        boxShadow: '0 0 8px var(--color-primary, #0066ff)',
        intensity: 0.8
      },
      pulse: {
        keyframes: [
          { scale: 1 },
          { scale: 1.03 },
          { scale: 1 }
        ],
        duration: 0.8,
        repeat: 1
      },
      ripple: {
        enabled: true,
        color: 'rgba(255, 255, 255, 0.7)',
        duration: 0.6
      }
    }
  },
  cards: {
    lift: -5,
    duration: 0.3,
    rotation: 0.5, // Subtle rotation on hover (degrees)
    scale: 1.02,   // Subtle scale on hover
    shadow: '0 10px 25px rgba(0, 0, 0, 0.1)', // Enhanced shadow on hover
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 15
    }
  },
  inputs: {
    borderColor: 'var(--color-primary)',
    boxShadow: '0 0 0 3px rgba(0, 102, 255, 0.25)',
    duration: 0.2,
    focusScale: 1.01,
    labelMove: -5, // px to move label up on focus
    labelColor: 'var(--color-primary)'
  },
  navigation: {
    linkHover: {
      underlineWidth: '100%',
      underlineDuration: 0.2,
      textColor: 'var(--color-primary-dark)'
    },
    activePage: {
      fontWeight: 600,
      scale: 1.05
    },
    mobileMenu: {
      slideIn: {
        x: 0,
        opacity: 1,
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  },
  scrollTriggers: {
    fadeUp: {
      opacity: [0, 1],
      y: [20, 0],
      duration: 0.6
    },
    scaleIn: {
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 0.5
    },
    staggered: {
      childrenDelay: 0.1,
      distance: 15 // px to move during animation
    }
  }
};