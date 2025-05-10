
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="container">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 md:p-12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of students who are already benefiting from our collaborative platform
              and take your academic journey to the next level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/register">Join StudySphere</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/login">Already a Member?</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
