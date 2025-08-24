import React from 'react';

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
}) {
  const displayText = Array.from({ length: repeat }).map((_, i) =>
    repeat === 1 ? text : ` ${text}  ${separator}`,
  );

  const cx = width / 2;
  const cy = height / 2;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
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
  );
}

export default CircularTextRing;
