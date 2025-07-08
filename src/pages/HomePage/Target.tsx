import React, { useRef, useEffect, useState } from 'react';

type CounterProps = {
  end: number;
  duration?: number;
  className?: string;
};

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const increment = end / (duration / 16);
          const step = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setCount(end);
              setHasAnimated(true);
            }
          };
          step();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
};

const AIStudent: React.FC = () => {
  return (
    <div className="px-4 md:px-10 max-w-[1200px] mx-auto bg-[#f5f5f5]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-8xl md:text-9xl font-extrabold text-[#fb8a38] mb-4">
          <Counter end={10000} duration={2000} />
        </h2>

        <p className="text-2xl md:text-3xl font-medium text-black leading-snug pb-20">
          Sinh viên đã sẵn sàng
          <br className="hidden md:block" /> bước vào thời đại{' '}
          <span className="text-[#fb8a38] font-semibold">AI</span>
        </p>
      </div>
    </div>
  );
};

export default AIStudent;
