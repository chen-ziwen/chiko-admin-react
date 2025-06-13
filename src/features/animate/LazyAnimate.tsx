import { LazyMotion } from 'motion/react';
import type { PropsWithChildren } from 'react';

const loadFeatures = () => import('./features').then(res => res.domAnimation);

export const LazyAnimate = ({ children }: PropsWithChildren) => {
  return (
    <LazyMotion
      strict
      features={loadFeatures}
    >
      {children}
    </LazyMotion>
  );
};

export default LazyAnimate;
