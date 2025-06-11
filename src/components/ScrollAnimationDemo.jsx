import React from 'react';
import '../styles/ScrollAnimations.css';
import {
  ScrollFadeIn,
  ScrollFadeInLeft,
  ScrollFadeInRight,
  ScrollFadeInUp,
  ScrollFadeInDown,
  ScrollScale
} from './ScrollObserver';
import {
  ScrollStaggeredFadeIn,
  ScrollStaggeredFadeInLeft,
  ScrollStaggeredFadeInRight,
  ScrollStaggeredFadeInUp,
  ScrollStaggeredFadeInDown,
  ScrollStaggeredScale
} from './ScrollStaggered';

const ScrollAnimationDemo = () => {
  // Sample items for staggered animations
  const items = [
    { id: 1, title: 'Item 1', content: 'This is the first item' },
    { id: 2, title: 'Item 2', content: 'This is the second item' },
    { id: 3, title: 'Item 3', content: 'This is the third item' },
    { id: 4, title: 'Item 4', content: 'This is the fourth item' },
    { id: 5, title: 'Item 5', content: 'This is the fifth item' },
    { id: 6, title: 'Item 6', content: 'This is the sixth item' },
  ];

  return (
    <div className="animation-demo-container">
      <h1>Scroll Animation Demo</h1>
      <p className="demo-description">
        Scroll down to see various animation effects triggered by scrolling.
        These components can be used throughout the portfolio to create engaging scroll experiences.
      </p>

      <section className="demo-section">
        <h2>Basic Fade Animations</h2>
        
        <ScrollFadeIn>
          <div className="demo-box">
            <h3>Fade In</h3>
            <p>This element fades in when scrolled into view</p>
          </div>
        </ScrollFadeIn>

        <div className="demo-row">
          <ScrollFadeInLeft>
            <div className="demo-box">
              <h3>Fade In Left</h3>
              <p>This element slides in from the left</p>
            </div>
          </ScrollFadeInLeft>

          <ScrollFadeInRight>
            <div className="demo-box">
              <h3>Fade In Right</h3>
              <p>This element slides in from the right</p>
            </div>
          </ScrollFadeInRight>
        </div>

        <div className="demo-row">
          <ScrollFadeInUp>
            <div className="demo-box">
              <h3>Fade In Up</h3>
              <p>This element slides up into view</p>
            </div>
          </ScrollFadeInUp>

          <ScrollFadeInDown>
            <div className="demo-box">
              <h3>Fade In Down</h3>
              <p>This element slides down into view</p>
            </div>
          </ScrollFadeInDown>
        </div>

        <ScrollScale>
          <div className="demo-box">
            <h3>Scale In</h3>
            <p>This element scales up when scrolled into view</p>
          </div>
        </ScrollScale>
      </section>

      <section className="demo-section">
        <h2>Staggered Animations</h2>
        <p>Elements animate one after another with a slight delay between each</p>

        <h3>Staggered Fade In</h3>
        <ScrollStaggeredFadeIn baseDelay={0.2} staggerDelay={0.15}>
          <div className="staggered-grid">
            {items.map(item => (
              <div key={item.id} className="demo-card">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </ScrollStaggeredFadeIn>

        <h3>Staggered Fade In Left</h3>
        <ScrollStaggeredFadeInLeft baseDelay={0.2} staggerDelay={0.15}>
          <div className="staggered-list">
            {items.slice(0, 3).map(item => (
              <div key={item.id} className="demo-list-item">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </ScrollStaggeredFadeInLeft>

        <h3>Staggered Fade In Right</h3>
        <ScrollStaggeredFadeInRight baseDelay={0.2} staggerDelay={0.15}>
          <div className="staggered-list">
            {items.slice(3, 6).map(item => (
              <div key={item.id} className="demo-list-item">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </ScrollStaggeredFadeInRight>
      </section>

      <section className="demo-section">
        <h2>Custom Threshold and Root Margin</h2>
        <p>Controlling when animations trigger based on visibility</p>

        <ScrollFadeIn threshold={0.5} rootMargin="-100px 0px">
          <div className="demo-box highlight">
            <h3>Higher Threshold (0.5)</h3>
            <p>This element requires more visibility before animating</p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn rootMargin="-200px 0px">
          <div className="demo-box highlight">
            <h3>Negative Root Margin</h3>
            <p>This element animates when further into the viewport</p>
          </div>
        </ScrollFadeIn>
      </section>

      <section className="demo-section">
        <h2>Non-Trigger Once Example</h2>
        <p>This element will animate every time it enters the viewport</p>

        <ScrollFadeIn triggerOnce={false}>
          <div className="demo-box highlight">
            <h3>Repeating Animation</h3>
            <p>Scroll away and back to see this animate again</p>
          </div>
        </ScrollFadeIn>
      </section>
    </div>
  );
};

export default ScrollAnimationDemo;