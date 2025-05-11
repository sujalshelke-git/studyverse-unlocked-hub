
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Book, Upload } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotesPage() {
  const notes = [
    {
      id: 1,
      title: "Calculus I - Limits and Derivatives",
      subject: "Mathematics",
      author: "Emily Chen",
      fileType: "PDF",
      uploadDate: "2 days ago",
      upvotes: 42,
      downloads: 128,
      thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Organic Chemistry Study Guide",
      subject: "Chemistry",
      author: "James Wilson",
      fileType: "PDF",
      uploadDate: "5 days ago",
      upvotes: 36,
      downloads: 95,
      thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Introduction to Algorithms",
      subject: "Computer Science",
      author: "Michael Rodriguez",
      fileType: "DOC",
      uploadDate: "1 week ago",
      upvotes: 31,
      downloads: 87,
      thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Human Anatomy - Nervous System",
      subject: "Biology",
      author: "Sarah Johnson",
      fileType: "PDF",
      uploadDate: "2 weeks ago",
      upvotes: 29,
      downloads: 72,
      thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Physics 101 - Mechanics",
      subject: "Physics",
      author: "David Smith",
      fileType: "PDF",
      uploadDate: "3 weeks ago",
      upvotes: 24,
      downloads: 63,
      thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "World History - Ancient Civilizations",
      subject: "History",
      author: "Lisa Thompson",
      fileType: "PPT",
      uploadDate: "1 month ago",
      upvotes: 19,
      downloads: 58,
      thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notes Library</h1>
            <p className="text-muted-foreground">
              Access and share quality study materials across subjects
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Input
                placeholder="Search notes..."
                className="pl-10 w-full sm:w-64"
              />
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
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <Button asChild>
              <Link to="/notes/upload">
                <Upload className="mr-2 h-4 w-4" />
                Upload Notes
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Card key={note.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={note.thumbnailUrl}
                  alt={note.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-background/90 text-xs font-medium px-2 py-1 rounded">
                  {note.fileType}
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-muted text-xs px-2 py-1 rounded-md">{note.subject}</div>
                </div>
                <CardTitle className="line-clamp-1">{note.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  By {note.author} • {note.uploadDate}
                </div>
              </CardHeader>
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
                    {note.upvotes}
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    {note.downloads}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Book className="h-4 w-4 mr-1" /> View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
