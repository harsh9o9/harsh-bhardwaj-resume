const HoverUnderline = ({ children }) => {
  return (
    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-white/50 after:transition-transform after:duration-200 after:ease-in after:content-[''] hover:after:origin-left hover:after:scale-100">
      {children}
    </span>
  );
};

export default HoverUnderline;
