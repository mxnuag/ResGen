import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoaded();
    }, 3000); // 3 seconds preloader duration

    return () => clearTimeout(timer);
  }, [onLoaded]);

  // Generate random delays and durations for the boxes
  const boxes = Array.from({ length: 20 }, (_, index) => ({
    animationDelay: `${Math.random() * 2}s`,
    animationDuration: `${Math.random() * 2 + 2}s`, // between 2 and 4 seconds
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
  }));

  return (
    <div className={`preloader ${loading ? 'active' : 'inactive'}`}>
      <div className="box-container">
        {boxes.map((style, index) => (
          <div
            key={index}
            className="box"
            style={{
              animationDelay: style.animationDelay,
              animationDuration: style.animationDuration,
              top: style.top,
              left: style.left,
            }}
          ></div>
        ))}
      </div>
      <div className="text">
        Your dream job is just a resume away...
      </div>
    </div>
  );
};

export default Preloader;
