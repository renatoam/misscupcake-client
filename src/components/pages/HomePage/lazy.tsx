import { Suspense, useEffect, useRef, useState } from 'react';

function LazyLoader({ loader, children }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Suspense fallback={loader ? loader : <p>Loading...</p>}>
      <section ref={ref}>
        {isVisible && children}
      </section>
    </Suspense>
  );
}

export default LazyLoader;