import React, { useState, useEffect } from 'react';
import './KerkarHandwritten.css';

const KerkarHandwritten: React.FC = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        // Start initial animation when component mounts
        const timer = setTimeout(() => {
            setIsAnimating(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Show tooltip automatically 2 seconds after animation completes
        if (isAnimating) {
            const tooltipTimer = setTimeout(() => {
                setShowTooltip(true);
                // Hide tooltip after 2 seconds
                setTimeout(() => {
                    setShowTooltip(false);
                }, 2000);
            }, 3000); // Total animation duration is about 3 seconds

            return () => clearTimeout(tooltipTimer);
        }
    }, [animationKey, isAnimating]);

    const handleHover = () => {
        // Restart animation on hover
        setIsAnimating(false);
        setAnimationKey(prev => prev + 1);
        
        setTimeout(() => {
            setIsAnimating(true);
        }, 50);
    };

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div 
            className="kerkar-handwritten-container"
            onClick={handleHover}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <svg
                key={animationKey}
                width="120"
                height="40"
                viewBox="15 8 180 67"
                className="kerkar-svg"
            >
                {/* Main KERKAR handwritten text - separated by letters */}
                
                {/* Letter K */}
                <path 
                    d="M 21.039 21.993 C 20.122 31.244, 19.328 35.277, 18.310 35.846 C 17.077 36.537, 17.092 36.832, 18.421 37.934 C 19.716 39.009, 19.866 40.952, 19.345 49.859 C 18.982 56.056, 19.093 60.152, 19.611 59.668 C 20.100 59.210, 20.745 54.840, 21.044 49.957 C 21.344 45.073, 21.887 40.780, 22.251 40.416 C 22.615 40.052, 26.870 42.890, 31.707 46.723 C 39.940 53.249, 52.317 61.169, 49 57.789 C 48.175 56.949, 41.987 51.905, 35.250 46.581 C 28.512 41.257, 23 36.533, 23 36.083 C 23 35.634, 24.769 34.095, 26.932 32.664 C 32.349 29.079, 45 16.781, 45 15.100 C 45 14.343, 41.242 17.332, 36.650 21.741 C 27.723 30.311, 23.322 33.655, 22.307 32.640 C 21.960 32.294, 22.239 27.845, 22.926 22.755 C 24.634 10.104, 24.647 9.754, 23.415 9.323 C 22.712 9.077, 21.876 13.534, 21.039 21.993" 
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="transparent"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`letter-path ${isAnimating ? 'animate' : ''}`}
                    style={{ 
                        animationDelay: '0.5s',
                        strokeDasharray: '520',
                        strokeDashoffset: '520'
                    }}
                />

                {/* Letter E */}
                <path 
                    d="M 63.871 32.890 C 57.789 39.143, 55 45.500, 55 53.105 C 55 58.458, 58.988 63, 63.688 63 C 67.798 63, 73.053 60.716, 75.659 57.796 C 77.085 56.199, 76.243 56.440, 71.919 58.867 C 65.383 62.536, 61.813 62.813, 58.876 59.876 C 56.988 57.988, 56.806 56.927, 57.231 50.298 C 57.662 43.588, 58.109 42.277, 61.708 37.172 C 66.182 30.824, 70.254 27.854, 72.037 29.637 C 74.736 32.336, 67.561 46.109, 62.218 48.487 C 59.736 49.592, 59.269 51, 61.384 51 C 62.145 51, 64.439 49.149, 66.483 46.887 C 72.738 39.963, 75.726 31.126, 72.800 28.200 C 70.826 26.226, 69.856 26.735, 63.871 32.890" 
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="transparent"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`letter-path ${isAnimating ? 'animate' : ''}`}
                    style={{ 
                        animationDelay: '0.8s',
                        strokeDasharray: '380',
                        strokeDashoffset: '380'
                    }}
                />

                {/* Letter R */}
                <path 
                    d="M 100.700 29.473 C 99.161 30.276, 96.723 31.860, 95.282 32.993 L 92.664 35.052 90.027 32.526 C 88.577 31.137, 87.078 30, 86.695 30 C 85.304 30, 86.049 33.247, 88.015 35.746 C 89.774 37.982, 89.857 38.572, 88.671 40.403 C 80.229 53.436, 75.900 64, 79 64 C 80.710 64, 87.815 56.282, 89.941 52.116 C 91.054 49.933, 92.256 45.672, 92.612 42.645 C 93.133 38.215, 93.891 36.528, 96.504 33.996 C 98.289 32.266, 101.493 30.229, 103.625 29.469 C 105.866 28.670, 106.657 28.072, 105.500 28.050 C 104.400 28.029, 102.240 28.669, 100.700 29.473 M 115.593 43.250 C 113.067 45.507, 111.001 51, 112.678 51 C 113.170 51, 115.253 48.750, 117.306 46 C 121.284 40.672, 120.281 39.061, 115.593 43.250 M 85.185 49.250 C 81.966 53.949, 80.380 58, 81.758 58 C 83.765 58, 87.689 52.571, 89.009 47.967 C 90.224 43.731, 88.590 44.279, 85.185 49.250" 
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="transparent"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`letter-path ${isAnimating ? 'animate' : ''}`}
                    style={{ 
                        animationDelay: '1.1s',
                        strokeDasharray: '450',
                        strokeDashoffset: '450'
                    }}
                />

                {/* Letter K (second one) */}
                <path 
                    d="M 120.946 24.062 C 116.592 34.454, 113.250 40.893, 110.648 43.902 C 107.357 47.708, 106.876 48.851, 107.347 51.749 C 107.649 53.614, 107.458 56.296, 106.921 57.709 C 105.577 61.242, 106.766 62, 109.112 59.107 L 111.052 56.714 118.776 58.492 C 123.024 59.471, 128.075 60.906, 130 61.683 C 133.054 62.914, 133.309 62.909, 132 61.648 C 131.175 60.853, 126.524 59.006, 121.665 57.543 C 115.594 55.716, 112.985 54.482, 113.324 53.598 C 114.625 50.207, 126.661 35.828, 130.107 33.548 C 132.248 32.131, 134 30.245, 134 29.358 C 134 28.082, 133.318 28.297, 130.750 30.381 C 123.041 36.638, 121.378 37.805, 119.250 38.451 C 116.138 39.397, 116.357 37.855, 120.369 30.596 C 124.016 23.997, 128.403 11.708, 127.779 9.836 C 127.566 9.199, 124.492 15.601, 120.946 24.062" 
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="transparent"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`letter-path ${isAnimating ? 'animate' : ''}`}
                    style={{ 
                        animationDelay: '1.4s',
                        strokeDasharray: '480',
                        strokeDashoffset: '480'
                    }}
                />

                {/* Letter A */}
                <path 
                    d="M 153.900 30.849 C 145.909 35.916, 139.066 46.711, 139.022 54.316 C 138.969 63.492, 143.503 64.475, 151.406 57 C 154.314 54.250, 156.987 52, 157.347 52 C 157.706 52, 158.016 54.138, 158.035 56.750 C 158.055 59.362, 158.675 62.591, 159.414 63.925 C 160.612 66.088, 160.703 65.585, 160.253 59.287 C 159.845 53.594, 160.257 50.445, 162.374 43.067 C 163.818 38.031, 165 33.566, 165 33.144 C 165 31.851, 161 28, 159.657 28 C 158.961 28, 156.370 29.282, 153.900 30.849 M 154.152 32.672 C 150.434 34.530, 143.899 42.605, 141.535 48.263 C 138.346 55.894, 140.259 61.905, 145.461 60.599 C 151.067 59.192, 161.249 43.225, 162.195 34.360 C 162.452 31.947, 162.110 31.461, 160 31.250 C 158.625 31.112, 155.994 31.752, 154.152 32.672" 
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="transparent"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`letter-path ${isAnimating ? 'animate' : ''}`}
                    style={{ 
                        animationDelay: '1.7s',
                        strokeDasharray: '400',
                        strokeDashoffset: '400'
                    }}
                />

                {/* Letter R (final one) */}
                <path 
                    d="M 188.961 29.787 C 187.058 30.770, 184.322 32.358, 182.883 33.315 C 180.324 35.017, 180.230 35, 178.610 32.528 C 176.839 29.825, 174 29.109, 174 31.365 C 174 32.116, 174.938 33.922, 176.084 35.379 L 178.167 38.028 172.084 48.759 C 163.521 63.862, 163.953 68.580, 173.037 59.156 C 177.930 54.080, 181 47.217, 181 41.357 C 181 37.019, 185.755 31.609, 191.293 29.648 C 193.607 28.828, 194.808 28.122, 193.961 28.079 C 193.115 28.036, 190.865 28.804, 188.961 29.787 M 173.094 49.671 C 170.103 54.187, 169.082 58, 170.864 58 C 172.151 58, 176.774 50.907, 177.545 47.750 C 178.570 43.552, 176.578 44.412, 173.094 49.671 M 108.667 48.667 C 107.711 49.622, 107.845 51, 108.893 51 C 109.384 51, 110.045 50.325, 110.362 49.500 C 110.947 47.976, 109.881 47.452, 108.667 48.667" 
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="transparent"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`letter-path ${isAnimating ? 'animate' : ''}`}
                    style={{ 
                        animationDelay: '2.0s',
                        strokeDasharray: '420',
                        strokeDashoffset: '420'
                    }}
                />

                {/* Decorative flourish underline - positioned at the bottom border of the word */}
                <path
                    d="M25 72 Q55 70 85 72 Q115 74 145 72 Q165 70 185 72"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                    className={`letter-path flourish ${isAnimating ? 'animate' : ''}`}
                    style={{ 
                        animationDelay: '2.3s',
                        strokeDasharray: '180',
                        strokeDashoffset: '180'
                    }}
                />

                {/* Small dot accent positioned at the end */}
                <circle
                    cx="160"
                    cy="62"
                    r="1.5"
                    fill="currentColor"
                    className={`letter-path dot-accent ${isAnimating ? 'animate' : ''}`}
                    style={{ animationDelay: '2.6s' }}
                />
            </svg>

            {/* Tooltip explanation */}
            <div className={`kerkar-tooltip ${showTooltip ? 'show' : ''}`}>
                <span className="tooltip-text">scribbled</span>
                <span className="tooltip-lang">(Nepali)</span>
            </div>
        </div>
    );
};

export default KerkarHandwritten;
