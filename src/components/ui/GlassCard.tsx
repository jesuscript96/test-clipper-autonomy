import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export const GlassCard = ({ children, className, gradient = false, ...props }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border border-white/20 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl shadow-sm transition-all duration-500",
        gradient && "after:absolute after:inset-0 after:bg-gradient-to-br after:from-blue-500/5 after:to-purple-500/5 after:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
