import { useState } from 'react';
import HoverUnderline from './HoverUnderline';

const copyToClipboard = async (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      // Use the modern Clipboard API
      await navigator.clipboard.writeText(text);
      return { success: true };
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const result = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (result) {
        return { success: true };
      } else {
        throw new Error('Copy command failed');
      }
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return { success: false, error: (error as Error).message };
  }
};

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

const CopyEmailButton = ({ email, className = '' }: CopyEmailButtonProps): React.JSX.Element => {
  const [buttonState, setButtonState] = useState('default');
  const [buttonText, setButtonText] = useState('COPY EMAIL');

  const handleCopy = async () => {
    if (buttonState !== 'default') return;

    const result = await copyToClipboard(email);

    if (result.success) {
      // Success state
      setButtonState('success');
      setButtonText('COPIED ✓');

      // Reset after 2 seconds
      setTimeout(() => {
        setButtonState('default');
        setButtonText('COPY EMAIL');
      }, 1000);
    } else {
      // Error state
      setButtonState('error');
      setButtonText('Failed to copy ✖');

      // Reset after 2 seconds
      setTimeout(() => {
        setButtonState('default');
        setButtonText('COPY EMAIL');
      }, 1000);
    }
  };

  // Determine button styling based on state
  const getButtonStyles = () => {
    switch (buttonState) {
      case 'success':
        return {
          color: '#99fff6', // light blue
          cursor: 'default',
        };
      case 'error':
        return {
          color: '#fca5a5', // light red
          cursor: 'default',
        };
      default:
        return {
          color: 'inherit',
          cursor: 'pointer',
        };
    }
  };

  const getUnderlineColor = () => {
    switch (buttonState) {
      case 'success':
        return 'bg-blue-400';
      case 'error':
        return 'bg-red-400';
      default:
        return 'bg-white';
    }
  };

  return (
    <HoverUnderline
      underlineColor={getUnderlineColor()}
      className={`font-technology text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl transition-colors duration-200 ${className}`}
      style={getButtonStyles()}
      onClick={handleCopy}
    >
      {buttonText}
    </HoverUnderline>
  );
};

export default CopyEmailButton;
