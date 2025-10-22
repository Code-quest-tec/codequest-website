interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo = ({ size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-8 h-8 sm:w-10 sm:h-10", text: "text-lg sm:text-xl", container: "gap-2" },
    md: { icon: "w-12 h-12 sm:w-16 sm:h-16", text: "text-2xl sm:text-3xl", container: "gap-2 sm:gap-3" },
    lg: { icon: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24", text: "text-3xl sm:text-4xl md:text-5xl", container: "gap-3 sm:gap-4" },
  };

  const { icon: iconSize, text, container } = sizes[size];

  return (
    <div className={`flex items-center ${container}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
        <img
          src="/logo-hero.png"
          alt="Code Quest logo"
          className={`relative ${iconSize} object-contain block`}
        />
      </div>

      <div className="flex flex-col">
        <span className={`${text} font-bold text-foreground leading-none`}>
          code
        </span>
        <span className={`${text} font-bold text-primary leading-none`}>
          quest
        </span>
      </div>
    </div>
  );
};

export default Logo;
