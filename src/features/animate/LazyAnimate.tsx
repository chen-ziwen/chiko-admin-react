import { LazyMotion } from "motion/react";
import type { PropsWithChildren } from "react";

const loadFeatures = () => import('./features').then(res => res.domAnimation);

export const LazyAnimate = ({ children }: PropsWithChildren) => {
    return (
        <LazyMotion features={loadFeatures} strict>
            {children}
        </LazyMotion>
    )
};

export default LazyAnimate;