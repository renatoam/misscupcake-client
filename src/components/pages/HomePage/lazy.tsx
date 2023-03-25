import { Suspense, useEffect, useRef, useState } from 'react';

function LazyLoader<T>(Component: any) {
  const LazedComponent = (props: T & { loader: any }) => {
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
      <Suspense fallback={<p>Omae wa</p>}>
        <section ref={ref}>
          {isVisible && <Component {...props} />}
        </section>
      </Suspense>
    );
  }

  return LazedComponent
}

export default LazyLoader;