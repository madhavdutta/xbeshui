interface RingProgressBarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  progress: number;
  color?: 'primary' | 'secondary' | 'accent' | 'destructive';
  backgroundColor?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'muted';
  className?: string;
}

const RingProgressBar: React.FC<RingProgressBarProps> = ({
  size = 'md',
  progress,
  color = 'primary',
  backgroundColor = 'muted',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-28 h-28',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
  };

  const strokeWidth = {
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
  };

  const radius = {
    sm: 32,
    md: 52,
    lg: 80,
    xl: 104,
  };
  const textSizeClasses = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  const circumference = 2 * Math.PI * radius[size];
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}>
    <svg className="absolute" viewBox="0 0 230 230">
      <title> </title>
  <circle
    className={`text-${backgroundColor}`}
    strokeWidth={strokeWidth[size]}
    stroke={`hsl(var(--${backgroundColor}))`}
    fill="transparent"
    r={radius[size]}
    cx="115"
    cy="115"
  />
  <circle
    className={`text-${color}`}
    strokeWidth={strokeWidth[size]}
    stroke={`hsl(var(--${color}))`}
    fill="transparent"
    r={radius[size]}
    cx="115"
    cy="115"
    strokeDasharray={circumference}
    strokeDashoffset={offset}
    strokeLinecap="round"
    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
  />
</svg>
      <div className="absolute text-center">
        <span className={`font-semibold text-primary ${textSizeClasses[size]}`}>{progress}%</span>
      </div>
    </div>
  );
};

RingProgressBar.displayName = 'RingProgressBar';

export { RingProgressBar };