interface QIconProps {
  className?: string;
}

const QIcon = ({ className = "w-16 h-16" }: QIconProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Círculo quase completo formando o Q */}
      <path
        d="M 25 75 A 30 30 0 1 1 75 75"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Linha diagonal do Q */}
      <path
        d="M 70 70 L 85 85"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default QIcon;
