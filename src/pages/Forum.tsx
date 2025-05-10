
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";

export default function ForumPage() {
  const forumPosts = [
    {
      id: 1,
      title: "How to solve differential equations?",
      author: "Emily Chen",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      category: "Mathematics",
      content: "I'm struggling with solving first-order differential equations. Any tips or resources would be helpful!",
      upvotes: 24,
      comments: 12,
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      title: "Best resources for learning React hooks?",
      author: "Michael Rodriguez",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
      category: "Computer Science",
      content: "I'm trying to understand React hooks better. What resources would you recommend for an intermediate developer?",
      upvotes: 31,
      comments: 15,
      timeAgo: "5 hours ago",
    },
    {
      id: 3,
      title: "Tips for memorizing anatomy terms?",
      author: "Sarah Johnson",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      category: "Medicine",
      content: "I have an anatomy exam coming up and need some effective strategies for memorizing all the terms.",
      upvotes: 18,
      comments: 8,
      timeAgo: "1 day ago",
    },
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Student Forum</h1>
            <p className="text-muted-foreground">
              Ask questions, share knowledge, and connect with peers
            </p>
          </div>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Ask a Question
          </Button>
        </div>

        <div className="grid gap-6">
          {forumPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-muted text-xs px-2 py-1 rounded-md">{post.category}</div>
                  <div className="text-xs text-muted-foreground">{post.timeAgo}</div>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <img src={post.avatarUrl} alt={post.author} />
                  </Avatar>
                  <span>{post.author}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.content}</p>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground flex justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex items-center">
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
                      className="mr-1 h-3 w-3"
                    >
                      <path d="m12 20 9-9-9-9-9 9z" />
                    </svg>
                    {post.upvotes} upvotes
                  </span>
                  <span className="flex items-center">
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
                      className="mr-1 h-3 w-3"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {post.comments} comments
                  </span>
                </div>
                <Button variant="ghost" size="sm">
                  View Discussion
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
