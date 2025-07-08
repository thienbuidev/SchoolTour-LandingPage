import React, { useRef, useEffect, useState } from 'react';
import { Row, Col, Image } from 'antd';
import Dev7 from '../../assets/hinh7.jpg';
import Dev8 from '../../assets/hinh8.jpg';
import Dev9 from '../../assets/hinh9.jpg';
import Dev10 from '../../assets/hinh10.jpg';

const achievementsTopRight = [
  { count: 26, label: 'chương trình đào tạo đã hoàn thành' },
];

const achievementsTop = [
  { count: 80, label: 'dự án thực chiến đã triển khai' },
  { count: 120, label: 'buổi seminar & workshop đã tổ chức' },
];

const achievementsBottom = [
  {
    count: 380,
    label: 'học viên DevPlus đã tốt nghiệp và',
    suffix: '#ready to work',
  },
  { count: 5000, label: 'sinh viên đã tham gia các chương trình School Tour' },
];

type CounterProps = { end: number; duration?: number; className?: string };
const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

const AchievementSection: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10 max-w-[1200px] mx-auto bg-blue-50">
      <Row gutter={32} align="middle">
        <Col
          xs={24}
          md={12}
          className="flex flex-col justify-center items-center gap-4"
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Image
              src={Dev7}
              alt="Dev7"
              preview={false}
              className="rounded-lg object-cover w-full h-40"
            />
            <Image
              src={Dev8}
              alt="Dev8"
              preview={false}
              className="rounded-lg object-cover w-full h-40"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-12">
            <Image
              src={Dev9}
              alt="Dev9"
              preview={false}
              className="rounded-lg object-cover w-full h-40"
            />
            <Image
              src={Dev10}
              alt="Dev10"
              preview={false}
              className="rounded-lg object-cover w-full h-40"
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="md:text-4xl lg:text-5xl text-3xl font-bold text-center mb-12 uppercase">
            Thành tựu nổi bật
          </div>

          <div className="flex items-center justify-center gap-10 mb-10">
            {achievementsTopRight.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-[#ff6900] md:text-6xl text-5xl font-bold">
                  <Counter end={item.count} duration={2000} />+
                </div>
                <div className="md:text-2xl text-xl font-semibold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 md:mb-20 mb-4">
            {achievementsTop.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-[#ff6900] md:text-5xl text-4xl font-bold">
                  <Counter end={item.count} duration={2000} />+
                </div>
                <div className="md:text-2xl text-xl font-semibold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4">
            {achievementsBottom.map((item, index) => (
              <div key={index}>
                <div className="md:text-5xl text-3xl font-bold">
                  <Counter end={item.count} duration={2500} />+
                </div>
                <div className="md:text-xl text-lg font-semibold">
                  {item.label}{' '}
                  {item.suffix && (
                    <span className="italic md:text-xl text-lg text-orange-500">
                      {item.suffix}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AchievementSection;
