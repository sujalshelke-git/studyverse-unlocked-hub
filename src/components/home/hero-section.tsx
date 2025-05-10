
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Unlock Your Academic Potential
            </h1>
            <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
              Connect with students, share knowledge, and improve your academic performance
              with our collaborative learning platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/forum">Explore Forum</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16 max-w-5xl w-full">
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Students collaborating" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
