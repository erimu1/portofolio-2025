import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ScrollAnimations.css';
import '../styles/ScrollAnimationDemo.css';
import ScrollAnimationDemo from '../components/ScrollAnimationDemo';

const AnimationExamples = () => {
  return (
    <div className="animation-examples-page">
      <header className="examples-header">
        <div className="container">
          <Link to="/" className="back-link">
            <span className="back-arrow">←</span> Back to Home
          </Link>
          <h1>Scroll Animation Examples</h1>
          <p className="subtitle">
            A showcase of various scroll-triggered animations available in this portfolio.
            These components can be used throughout the site to create engaging user experiences.
          </p>
        </div>
      </header>

      <main>
        <ScrollAnimationDemo />

        <section className="usage-section container">
          <h2>How to Use These Components</h2>
          
          <div className="code-example">
            <h3>Basic Usage</h3>
            <pre>
              <code>
{`import { ScrollFadeIn, ScrollFadeInLeft } from './components/ScrollObserver';

const MyComponent = () => {
  return (
    <div>
      <ScrollFadeIn>
        <h2>This will fade in when scrolled into view</h2>
      </ScrollFadeIn>
      
      <ScrollFadeInLeft>
        <p>This will slide in from the left</p>
      </ScrollFadeInLeft>
    </div>
  );
};`}
              </code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Staggered Animation</h3>
            <pre>
              <code>
{`import { ScrollStaggeredFadeIn } from './components/ScrollStaggered';

const MyList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  
  return (
    <ScrollStaggeredFadeIn baseDelay={0.2} staggerDelay={0.15}>
      <div className="my-list">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            {item}
          </div>
        ))}
      </div>
    </ScrollStaggeredFadeIn>
  );
};`}
              </code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Custom Configuration</h3>
            <pre>
              <code>
{`import { ScrollFadeIn } from './components/ScrollObserver';

const CustomComponent = () => {
  return (
    <ScrollFadeIn 
      threshold={0.5} // Element must be 50% visible before animating
      rootMargin="-100px 0px" // Trigger 100px after entering viewport
      triggerOnce={false} // Animate every time element enters viewport
    >
      <div className="my-element">
        Custom configured animation
      </div>
    </ScrollFadeIn>
  );
};`}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AnimationExamples;