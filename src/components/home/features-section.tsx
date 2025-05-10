
import { FeatureCard } from "@/components/ui/feature-card";
import { MessageSquare, BookOpen, Bot } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            StudySphere offers a comprehensive set of tools designed to enhance your learning
            experience and help you achieve academic excellence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Student Forum"
            description="Ask questions, share knowledge, and engage in academic discussions with peers from around the world."
            icon={<MessageSquare className="h-6 w-6" />}
            href="/forum"
          />
          <FeatureCard
            title="Notes Library"
            description="Access and share quality study materials, lecture notes, and resources across various subjects."
            icon={<BookOpen className="h-6 w-6" />}
            href="/notes"
            variant="highlight"
          />
          <FeatureCard
            title="AI Study Assistant"
            description="Get personalized learning support, generate summaries, flashcards, and practice quizzes."
            icon={<Bot className="h-6 w-6" />}
            href="/assistant"
          />
        </div>
      </div>
    </section>
  );
}
