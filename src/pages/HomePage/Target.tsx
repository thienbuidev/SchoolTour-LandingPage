import React, { useRef, useEffect, useState } from 'react';

const ZoomText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState<'normal' | 'zoomOut'>('normal');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScale('zoomOut');

          setTimeout(() => {
            setScale('normal');
          }, 650);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`inline-block transition-transform duration-700 ease-in-out ${className}`}
      style={{
        transform: scale === 'zoomOut' ? 'scale(1.25)' : 'scale(1)',
        transition: 'transform 0.7s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

const AIStudent: React.FC = () => {
  return (
    <div className="bg-blue-50 px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-[#fb8a38] mb-4">
          <ZoomText>10,000</ZoomText>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-black leading-snug max-w-2xl">
          Sinh viên đã sẵn sàng bước vào thời đại
          <span className="text-[#fb8a38] font-semibold"> AI</span>
        </p>
      </div>
    </div>
  );
};

export default AIStudent;
