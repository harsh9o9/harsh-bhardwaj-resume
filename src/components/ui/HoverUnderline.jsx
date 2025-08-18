const HoverUnderline = ({ underlineColor, children, className = '', style = {}, onClick }) => {
  // Convert Tailwind color to CSS color
  const getColorValue = (color) => {
    const colorMap = {
      'bg-white': '#ffffff',
      'bg-purple-700': '#7c3aed',
      'bg-red-500': '#ef4444',
      'bg-blue-500': '#3b82f6',
      'bg-green-500': '#10b981',
      'bg-yellow-500': '#eab308',
      'bg-black': '#000000',
      'bg-gray-500': '#6b7280',
      'bg-gray-700': '#374151',
      'bg-gray-900': '#111827',
      'bg-cyan-400': '#60a5fa',
      'bg-red-400': '#f87171',
    };

    // Handle opacity notation (e.g., bg-white/50)
    if (color && color.includes('/')) {
      const [baseColor, opacity] = color.split('/');
      const hexColor = colorMap[baseColor] || '#ffffff';
      const opacityValue = parseInt(opacity) / 100;

      // Convert hex to rgba
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);

      return `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
    }

    return colorMap[color] || '#ffffff';
  };

  const colorValue = getColorValue(underlineColor);

  const baseStyles = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
  };

  const styles = { ...baseStyles, ...style };

  const afterStyles = {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '2px',
    backgroundColor: colorValue,
    transform: 'scaleX(0)',
    transformOrigin: 'right',
    transition: 'transform 0.2s ease-in',
  };

  const handleMouseEnter = (e) => {
    const after = e.currentTarget.querySelector('.hover-underline-after');
    if (after) {
      after.style.transformOrigin = 'left';
      after.style.transform = 'scaleX(1)';
    }
  };

  const handleMouseLeave = (e) => {
    const after = e.currentTarget.querySelector('.hover-underline-after');
    if (after) {
      after.style.transformOrigin = 'right';
      after.style.transform = 'scaleX(0)';
    }
  };

  return (
    <span
      className={className}
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
      <span className="hover-underline-after" style={afterStyles}></span>
    </span>
  );
};

export default HoverUnderline;
