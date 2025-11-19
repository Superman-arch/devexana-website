interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
}

const Logo = ({ className = '', showText = true, size = 'md', iconOnly = false }: LogoProps) => {
  const sizeClasses = {
    sm: {
      height: 'h-10',
      iconHeight: 'h-10'
    },
    md: {
      height: 'h-12',
      iconHeight: 'h-12'
    },
    lg: {
      height: 'h-[600px]',
      iconHeight: 'h-[600px]'
    }
  };

  // If only showing icon, use just the microphone part of the logo
  if (iconOnly) {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/assets/logonotext.png"
          alt="Devexana Logo"
          className={`${sizeClasses[size].iconHeight} w-auto object-contain`}
        />
      </div>
    );
  }

  // Full logo with text
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/assets/devexana-logo.png"
        alt="Devexana"
        className={`${sizeClasses[size].height} w-auto object-contain`}
      />
      {!showText && null}
    </div>
  );
};

export default Logo;
