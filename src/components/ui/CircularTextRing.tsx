import React from 'react';

interface CircularTextRingProps {
  text?: string;
  repeat?: number;
  separator?: string;
  radius?: number;
  fontSize?: number;
  color?: string;
  width?: number;
  height?: number;
  fontFamily?: string;
  letterSpacing?: string;
  className?: string;
}

function CircularTextRing({
  text = 'PROJECT',
  repeat = 4,
  separator = '✦',
  radius = 160,
  fontSize = 24,
  color = '#333',
  width = 400,
  height = 400,
  fontFamily = 'monospace',
  letterSpacing = '5',
  className = '',
}: CircularTextRingProps) {
  const displayText = Array.from({ length: repeat }).map((_, i) =>
    repeat === 1 ? text : ` ${text}  ${separator}`,
  );

  const cx = width / 2;
  const cy = height / 2;

  return (
    <div className={`h-full w-full ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-full max-h-[200px] w-full max-w-[200px] sm:max-h-[300px] sm:max-w-[300px] md:max-h-[400px] md:max-w-[400px]"
      >
        <defs>
          <path
            id="circle-path"
            d={`M ${cx},${cy}
              m -${radius}, 0
              a ${radius},${radius} 0 1,1 ${2 * radius},0
              a ${radius},${radius} 0 1,1 -${2 * radius},0`}
          />
        </defs>
        <text
          fontFamily={fontFamily}
          fontWeight={800}
          fontSize={fontSize}
          fill={color}
          letterSpacing={letterSpacing}
        >
          <textPath href="#circle-path" startOffset="0">
            {displayText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default CircularTextRing;
