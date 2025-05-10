
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  variant?: "default" | "outline" | "highlight";
}

export function FeatureCard({
  title,
  description,
  icon,
  href,
  className,
  variant = "default",
}: FeatureCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group relative overflow-hidden rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg",
        variant === "default" && "bg-card text-card-foreground",
        variant === "outline" && "bg-background border border-border",
        variant === "highlight" && "bg-accent/10 text-accent-foreground border border-accent/20",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center text-sm text-primary group-hover:underline">
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
