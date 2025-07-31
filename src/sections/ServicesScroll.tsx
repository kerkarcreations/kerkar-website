import React, { useState } from 'react';
import './ServicesScroll.css';

const ServicesScroll: React.FC = () => {
  const [focusedRow, setFocusedRow] = useState<number | null>(null);
  const [focusedItem, setFocusedItem] = useState<number | null>(null);
  const [pausedRow, setPausedRow] = useState<number | null>(null);

  const serviceRows = [
    { highlighted: "AUGMENTED", normal: "REALITY", speed: 90 },
    { highlighted: "VIRTUAL", normal: "REALITY", speed: 95 },
    { highlighted: "MIXED", normal: "REALITY", speed: 100 },
    { highlighted: "APP", normal: "DEVELOPMENT", speed: 90 },
    { highlighted: "WEB", normal: "DEVELOPMENT", speed: 92 }
  ];

  const handleRowHover = (rowIndex: number) => {
    setFocusedRow(rowIndex);
    setPausedRow(rowIndex);
  };

  const handleRowLeave = () => {
    setFocusedRow(null);
    setFocusedItem(null);
    setPausedRow(null);
  };

  const handleItemHover = (itemIndex: number) => {
    setFocusedItem(itemIndex);
  };

  return (
    <section className="services-scroll">
      <div className="services-scroll-container">
        {serviceRows.map((service, rowIndex) => (
          <div 
            key={rowIndex} 
            className={`scroll-row row-${rowIndex + 1} ${focusedRow === rowIndex ? 'focused-row' : ''} ${pausedRow === rowIndex ? 'paused-row' : ''}`}
            onMouseEnter={() => handleRowHover(rowIndex)}
            onMouseLeave={handleRowLeave}
          >
            <div 
              className="scroll-content"
              style={{
                animationDuration: `${service.speed}s`
              }}
            >
              {/* First set of items */}
              {Array.from({ length: 10 }, (_, itemIndex) => (
                <div 
                  key={`first-${itemIndex}`} 
                  className={`service-item ${
                    focusedRow === rowIndex && focusedItem === itemIndex ? 'highlighted-item' : ''
                  }`}
                  onMouseEnter={() => handleItemHover(itemIndex)}
                >
                  <span className="service-highlighted">{service.highlighted}</span>
                  <span className="service-normal">{service.normal}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {Array.from({ length: 10 }, (_, itemIndex) => (
                <div 
                  key={`second-${itemIndex}`} 
                  className={`service-item ${
                    focusedRow === rowIndex && focusedItem === (itemIndex + 10) ? 'highlighted-item' : ''
                  }`}
                  onMouseEnter={() => handleItemHover(itemIndex + 10)}
                >
                  <span className="service-highlighted">{service.highlighted}</span>
                  <span className="service-normal">{service.normal}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fade overlays for depth */}
      <div className="gradient-overlay gradient-left"></div>
      <div className="gradient-overlay gradient-right"></div>
    </section>
  );
};

export default ServicesScroll;
