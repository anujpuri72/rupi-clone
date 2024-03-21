import { useState, useEffect } from "react";

const useVisiblePercentage = (ref) => {
  const [visiblePercentage, setVisiblePercentage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calculate the visible percentage of the observed element
        const intersectionRatio = entry.intersectionRatio;
        const percentage = Math.floor(intersectionRatio * 100);
        setVisiblePercentage(percentage);
      },
      { threshold: 0.5 }
    ); // Trigger the callback when even 1% of the element is visible

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return visiblePercentage;
};

export default useVisiblePercentage;
