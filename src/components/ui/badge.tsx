/* Diagonal ribbon badge for pricing tier highlight (e.g. "POPULAR") */

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <div className={`absolute -right-[1px] -top-[1px] h-24 w-24 overflow-hidden ${className}`}>
      <span className="absolute right-[-35px] top-[18px] block w-[150px] rotate-45 bg-accent-gold py-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-bg-primary shadow-sm">
        {children}
      </span>
    </div>
  );
}
