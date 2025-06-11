# Animation System Documentation

## Overview

This portfolio website uses a centralized animation system that makes it easy to customize animations throughout the site. The system consists of several components:

1. **Animation Configuration** - Central settings for all animations
2. **Animation Utilities** - Reusable hooks and components for UI animations
3. **Scroll Animations** - Components for scroll-triggered animations
4. **Page Transitions** - Smooth transitions between pages
5. **Animated Background** - Customizable animated background

## How to Customize Animations

### Modifying Animation Settings

To customize animations site-wide, edit the `animationConfig.js` file in the `src/config` directory. This file contains settings for:

- **Page Transitions** - Change transition types, durations, and effects
- **Background Animations** - Adjust blob sizes, colors, and animation speeds
- **Scroll Animations** - Modify thresholds, durations, and easing functions
- **UI Animations** - Change hover effects, button animations, and more

### Example: Changing Page Transitions

```jsx
// In src/config/animationConfig.js
export const pageTransitions = {
  // Modify these values to change page transitions
  transition: {
    type: 'tween',
    ease: 'anticipate',  // Try 'easeInOut', 'linear', etc.
    duration: 0.5        // Increase for slower transitions
  },
};
```

### Example: Adjusting Background Animation

```jsx
// In src/config/animationConfig.js
export const backgroundAnimations = {
  // Change blob colors
  blobColors: {
    blob1: 'rgba(74, 158, 47, 0.08)',  // Increase opacity for more vibrant colors
    blob2: 'rgba(255, 122, 61, 0.08)',
    blob3: 'rgba(61, 133, 198, 0.06)',
    blob4: 'rgba(255, 143, 163, 0.06)'
  },
  
  // Change animation durations
  animationDurations: {
    blob1: '30s',  // Faster animation
    blob2: '40s',
    blob3: '50s',
    blob4: '35s'
  },
};
```

## Using Animation Components

### Page Transitions

The `PageTransition` component now accepts props to customize transitions:

```jsx
// Use a different transition type
<PageTransition transitionType="smooth">
  <YourPageContent />
</PageTransition>

// Or use a completely custom transition
<PageTransition 
  customTransition={{
    type: 'spring',
    stiffness: 100,
    damping: 20
  }}
>
  <YourPageContent />
</PageTransition>
```

### Animated Background

The `AnimatedBackground` component can be customized with props:

```jsx
// Increase parallax sensitivity
<AnimatedBackground 
  sensitivity={25} 
  blobOpacity={0.6} 
/>

// Disable scroll effect but keep mouse parallax
<AnimatedBackground 
  enableScrollEffect={false} 
/>
```

### Animation Utilities

Use the animation utility hooks for UI elements:

```jsx
import { useHoverAnimation, useCardAnimation } from '../utils/animationUtils';

function MyComponent() {
  // Create hover animation for a button
  const buttonAnimation = useHoverAnimation({ scale: 1.1 });
  
  // Create card animation
  const cardAnimation = useCardAnimation({ lift: -8 });
  
  return (
    <div>
      <button {...buttonAnimation}>Hover Me</button>
      <div {...cardAnimation} className="card">Card with hover effect</div>
    </div>
  );
}
```

## Performance Considerations

- The animated background now uses Intersection Observer to disable animations when not in view
- Animations are optimized to minimize layout shifts and repaints
- For lower-end devices, you can reduce animation complexity by adjusting settings in the config file

## Adding New Animations

To add new animations:

1. Add configuration settings to the appropriate section in `animationConfig.js`
2. Create utility functions or hooks in `animationUtils.js` if needed
3. Use the new animations in your components

This modular approach makes it easy to maintain and extend the animation system.