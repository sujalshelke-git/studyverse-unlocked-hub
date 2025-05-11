
import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, File, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

// Define form schema with validation
const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  description: z.string().optional(),
  isPublic: z.boolean().default(true),
  file: z.any().refine((file) => file?.length > 0, {
    message: "Please select a file to upload",
  }),
});

export default function UploadNotesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  // Form handling setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subject: "",
      description: "",
      isPublic: true,
    },
  });

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      form.setValue("file", e.target.files);
    }
  };

  // Submit handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUploading(true);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setUploading(false);
        toast.success("Notes uploaded successfully", {
          description: "Your notes are now available in the notes library.",
        });
        // Reset form and state
        form.reset();
        setFile(null);
        setUploadProgress(0);
      }
    }, 200);
  };

  // Preview file details
  const renderFilePreview = () => {
    if (!file) return null;

    return (
      <Card className="bg-muted/40 mt-4">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded text-primary">
              <File className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                setFile(null);
                form.setValue("file", null);
              }}
            >
              Remove
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <MainLayout>
      <div className="container py-8 max-w-3xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link to="/notes">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Notes
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Upload Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter a title for your notes" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="history">History</SelectItem>
                          <SelectItem value="literature">Literature</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Add a brief description of these notes (optional)" 
                          {...field}
                          className="min-h-[100px]"
                        />
                      </FormControl>
                      <FormDescription>
                        Help others understand what your notes are about
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="file"
                  render={() => (
                    <FormItem>
                      <FormLabel>Upload File</FormLabel>
                      <FormControl>
                        <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 bg-muted/10 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                          <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, DOCX, PPT, or images (max 10MB)</p>
                          <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                          />
                        </div>
                      </FormControl>
                      {form.formState.errors.file && (
                        <p className="text-sm font-medium text-destructive mt-2">
                          {form.formState.errors.file.message?.toString()}
                        </p>
                      )}
                      {renderFilePreview()}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isPublic"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Make these notes public</FormLabel>
                        <FormDescription>
                          Public notes can be viewed and downloaded by all users
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                {uploading && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Upload Notes"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
