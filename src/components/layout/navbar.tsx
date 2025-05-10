
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Menu, X, Book, MessageSquare, AiAssistant } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-brand dark:bg-brand-light rounded-lg p-1">
              <BookIcon className="h-6 w-6 text-white" />
            </span>
            <span className="font-bold text-xl hidden sm:block">StudySphere</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/forum" icon={<MessageSquare className="h-4 w-4 mr-1" />} label="Forum" />
          <NavLink to="/notes" icon={<Book className="h-4 w-4 mr-1" />} label="Notes" />
          <NavLink to="/assistant" icon={<AiAssistant className="h-4 w-4 mr-1" />} label="AI Assistant" />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link to="/login">Login</Link>
          </Button>
          <Button size="sm" asChild className="hidden md:flex">
            <Link to="/register">Sign Up</Link>
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 border-t bg-background animate-slide-up">
          <nav className="flex flex-col space-y-3">
            <MobileNavLink to="/forum" icon={<MessageSquare className="h-4 w-4 mr-2" />} label="Forum" onClick={toggleMenu} />
            <MobileNavLink to="/notes" icon={<Book className="h-4 w-4 mr-2" />} label="Notes" onClick={toggleMenu} />
            <MobileNavLink to="/assistant" icon={<AiAssistant className="h-4 w-4 mr-2" />} label="AI Assistant" onClick={toggleMenu} />
            <div className="border-t my-2"></div>
            <MobileNavLink to="/login" label="Login" onClick={toggleMenu} />
            <MobileNavLink to="/register" label="Sign Up" onClick={toggleMenu} />
          </nav>
        </div>
      )}
    </header>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="m10 9 2 2 4-4" />
    </svg>
  );
}

function NavLink({ to, icon, label }: { to: string; icon?: React.ReactNode; label: string }) {
  return (
    <Link
      to={to}
      className="text-muted-foreground hover:text-foreground flex items-center text-sm font-medium transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
}

function MobileNavLink({ 
  to, 
  icon, 
  label,
  onClick
}: { 
  to: string; 
  icon?: React.ReactNode; 
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      className="flex items-center py-2 text-base"
      onClick={onClick}
    >
      {icon}
      {label}
    </Link>
  );
}
