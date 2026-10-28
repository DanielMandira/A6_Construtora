import React, { useEffect, useRef, useState } from 'react';

const LazySection = ({ children, minHeight = '320px', rootMargin = '300px 0px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  if (isVisible) {
    return <>{children}</>;
  }

  return <div ref={containerRef} style={{ minHeight }} aria-hidden="true" />;
};

export default LazySection;
