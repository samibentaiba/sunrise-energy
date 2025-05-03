"use client";

import { useState } from "react";
import { Check, Download, Eye, Filter, Search, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Types
type SubmissionStatus = "new" | "read" | "replied" | "spam" | "archived";
type SubmissionType =
  | "contact"
  | "newsletter"
  | "product-inquiry"
  | "support"
  | "feedback"
  | "other";

type Submission = {
  id: string;
  type: SubmissionType;
  formName: string;
  subject?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: SubmissionStatus;
  createdAt: string;
  readAt?: string;
  repliedAt?: string;
  fields: Record<string, any>;
};

type ProductRequest = {
  id: string;
  productId: string;
  productName: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  quantity: number;
  status: "pending" | "processed" | "completed" | "cancelled";
  notes?: string;
  createdAt: string;
  processedAt?: string;
  completedAt?: string;
};

export default function SubmissionsManager() {
  const [activeTab, setActiveTab] = useState("form-submissions");
  const [viewingSubmission, setViewingSubmission] = useState<Submission | null>(
    null,
  );
  const [viewingRequest, setViewingRequest] = useState<ProductRequest | null>(
    null,
  );
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for form submissions
  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: "sub1",
      type: "contact",
      formName: "Contact Form",
      subject: "General Inquiry",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      message:
        "I'm interested in learning more about your services. Can someone from your team contact me?",
      status: "new",
      createdAt: "2023-08-15T10:30:00Z",
      fields: {
        company: "Acme Inc.",
        howDidYouHear: "Google Search",
      },
    },
    {
      id: "sub2",
      type: "newsletter",
      formName: "Newsletter Signup",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      message: "Please add me to your newsletter.",
      status: "read",
      createdAt: "2023-08-14T14:45:00Z",
      readAt: "2023-08-14T15:20:00Z",
      fields: {
        interests: ["Technology", "Business"],
      },
    },
    {
      id: "sub3",
      type: "product-inquiry",
      formName: "Product Inquiry",
      subject: "Question about Premium Plan",
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      phone: "+1 (555) 987-6543",
      message:
        "I'd like to know more about the features included in your Premium Plan. Is there a trial period available?",
      status: "replied",
      createdAt: "2023-08-13T09:15:00Z",
      readAt: "2023-08-13T10:00:00Z",
      repliedAt: "2023-08-13T11:30:00Z",
      fields: {
        product: "Premium Plan",
        budget: "$1000-$5000",
      },
    },
    {
      id: "sub4",
      type: "support",
      formName: "Support Request",
      subject: "Login Issues",
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      message:
        "I'm having trouble logging into my account. I've tried resetting my password but I'm still unable to access my dashboard.",
      status: "new",
      createdAt: "2023-08-12T16:20:00Z",
      fields: {
        accountId: "user12345",
        browser: "Chrome 115",
        operatingSystem: "Windows 11",
      },
    },
    {
      id: "sub5",
      type: "feedback",
      formName: "Feedback Form",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      message:
        "I love your new website design! The user interface is much more intuitive now. Great job!",
      status: "read",
      createdAt: "2023-08-11T13:10:00Z",
      readAt: "2023-08-11T14:05:00Z",
      fields: {
        rating: 5,
        wouldRecommend: true,
      },
    },
  ]);

  // Mock data for product requests
  const [productRequests, setProductRequests] = useState<ProductRequest[]>([
    {
      id: "req1",
      productId: "prod123",
      productName: "Premium Headphones",
      customerName: "Alex Johnson",
      customerEmail: "alex.johnson@example.com",
      customerPhone: "+1 (555) 234-5678",
      quantity: 2,
      status: "pending",
      createdAt: "2023-08-15T11:45:00Z",
      notes: "Customer requested express shipping",
    },
    {
      id: "req2",
      productId: "prod456",
      productName: "Smart Watch",
      customerName: "Sarah Williams",
      customerEmail: "sarah.williams@example.com",
      quantity: 1,
      status: "processed",
      createdAt: "2023-08-14T09:30:00Z",
      processedAt: "2023-08-14T10:15:00Z",
      notes: "Gift wrapping requested",
    },
    {
      id: "req3",
      productId: "prod789",
      productName: "Wireless Keyboard",
      customerName: "David Miller",
      customerEmail: "david.miller@example.com",
      customerPhone: "+1 (555) 876-5432",
      quantity: 3,
      status: "completed",
      createdAt: "2023-08-13T14:20:00Z",
      processedAt: "2023-08-13T15:00:00Z",
      completedAt: "2023-08-14T11:30:00Z",
    },
    {
      id: "req4",
      productId: "prod101",
      productName: "Bluetooth Speaker",
      customerName: "Lisa Chen",
      customerEmail: "lisa.chen@example.com",
      quantity: 1,
      status: "cancelled",
      createdAt: "2023-08-12T10:10:00Z",
      notes: "Customer found a better deal elsewhere",
    },
    {
      id: "req5",
      productId: "prod202",
      productName: "Laptop Backpack",
      customerName: "James Wilson",
      customerEmail: "james.wilson@example.com",
      customerPhone: "+1 (555) 345-6789",
      quantity: 2,
      status: "pending",
      createdAt: "2023-08-11T16:40:00Z",
    },
  ]);

  // Format date for display
  const formatDate = (dateString?: string) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Mark submission as read
  const markAsRead = (id: string) => {
    setSubmissions(
      submissions.map((submission) =>
        submission.id === id
          ? {
            ...submission,
            status: submission.status === "new" ? "read" : submission.status,
            readAt: submission.readAt || new Date().toISOString(),
          }
          : submission
      ),
    );
  };

  // Mark submission as replied
  const markAsReplied = (id: string) => {
    setSubmissions(
      submissions.map((submission) =>
        submission.id === id
          ? {
            ...submission,
            status: "replied",
            readAt: submission.readAt || new Date().toISOString(),
            repliedAt: new Date().toISOString(),
          }
          : submission
      ),
    );
  };

  // Mark submission as spam
  const markAsSpam = (id: string) => {
    setSubmissions(
      submissions.map((submission) =>
        submission.id === id
          ? {
            ...submission,
            status: "spam",
          }
          : submission
      ),
    );
  };

  // Archive submission
  const archiveSubmission = (id: string) => {
    setSubmissions(
      submissions.map((submission) =>
        submission.id === id
          ? {
            ...submission,
            status: "archived",
          }
          : submission
      ),
    );
  };

  // Delete submission
  const deleteSubmission = (id: string) => {
    setSubmissions(submissions.filter((submission) => submission.id !== id));
  };

  // Update product request status
  const updateRequestStatus = (
    id: string,
    status: "pending" | "processed" | "completed" | "cancelled",
  ) => {
    setProductRequests(
      productRequests.map((request) =>
        request.id === id
          ? {
            ...request,
            status,
            ...(status === "processed" &&
              { processedAt: new Date().toISOString() }),
            ...(status === "completed" &&
              { completedAt: new Date().toISOString() }),
          }
          : request
      ),
    );
  };

  // Delete product request
  const deleteRequest = (id: string) => {
    setProductRequests(productRequests.filter((request) => request.id !== id));
  };

  // Filter submissions
  const filteredSubmissions = submissions.filter((submission) => {
    // Filter by status
    if (filterStatus !== "all" && submission.status !== filterStatus) {
      return false;
    }

    // Filter by type
    if (filterType !== "all" && submission.type !== filterType) {
      return false;
    }

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        submission.name.toLowerCase().includes(query) ||
        submission.email.toLowerCase().includes(query) ||
        submission.message.toLowerCase().includes(query) ||
        (submission.subject && submission.subject.toLowerCase().includes(query))
      );
    }

    return true;
  });

  // Filter product requests
  const filteredRequests = productRequests.filter((request) => {
    // Filter by status
    if (filterStatus !== "all" && request.status !== filterStatus) {
      return false;
    }

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        request.productName.toLowerCase().includes(query) ||
        request.customerName.toLowerCase().includes(query) ||
        request.customerEmail.toLowerCase().includes(query)
      );
    }

    return true;
  });

  // Get status badge variant
  const getStatusBadgeVariant = (
    status:
      | SubmissionStatus
      | "pending"
      | "processed"
      | "completed"
      | "cancelled",
  ) => {
    switch (status) {
      case "new":
        return "default";
      case "read":
        return "secondary";
      case "replied":
        return "success";
      case "spam":
        return "destructive";
      case "archived":
        return "outline";
      case "pending":
        return "warning";
      case "processed":
        return "secondary";
      case "completed":
        return "success";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6 py-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Submissions & Requests
        </h1>
        <p className="text-muted-foreground">
          Manage form submissions and product requests from your website
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="form-submissions">Form Submissions</TabsTrigger>
          <TabsTrigger value="product-requests">Product Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="form-submissions" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Form Submissions</CardTitle>
              <CardDescription>
                View and manage submissions from your website forms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search submissions..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="read">Read</SelectItem>
                      <SelectItem value="replied">Replied</SelectItem>
                      <SelectItem value="spam">Spam</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="contact">Contact</SelectItem>
                      <SelectItem value="newsletter">Newsletter</SelectItem>
                      <SelectItem value="product-inquiry">
                        Product Inquiry
                      </SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Form</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubmissions.length > 0
                      ? (
                        filteredSubmissions.map((submission) => (
                          <TableRow key={submission.id}>
                            <TableCell>
                              <div>
                                <div className="font-medium">
                                  {submission.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {submission.email}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <Badge variant="outline">
                                  {submission.formName}
                                </Badge>
                                {submission.subject && (
                                  <div className="text-sm mt-1">
                                    {submission.subject}
                                  </div>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              {formatDate(submission.createdAt)}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={getStatusBadgeVariant(
                                  submission.status,
                                )}
                              >
                                {submission.status.charAt(0).toUpperCase() +
                                  submission.status.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Filter className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      setViewingSubmission(submission)}
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  {submission.status === "new" && (
                                    <DropdownMenuItem
                                      onClick={() => markAsRead(submission.id)}
                                    >
                                      <Check className="mr-2 h-4 w-4" />
                                      Mark as Read
                                    </DropdownMenuItem>
                                  )}
                                  {(submission.status === "new" ||
                                    submission.status === "read") && (
                                      <DropdownMenuItem
                                        onClick={() =>
                                          markAsReplied(submission.id)}
                                      >
                                        <Check className="mr-2 h-4 w-4" />
                                        Mark as Replied
                                      </DropdownMenuItem>
                                    )}
                                  <DropdownMenuItem
                                    onClick={() => markAsSpam(submission.id)}
                                  >
                                    <X className="mr-2 h-4 w-4" />
                                    Mark as Spam
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      archiveSubmission(submission.id)}
                                  >
                                    <Download className="mr-2 h-4 w-4" />
                                    Archive
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    className="text-destructive"
                                    onClick={() =>
                                      deleteSubmission(submission.id)}
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      )
                      : (
                        <TableRow>
                          <TableCell
                            colSpan={5}
                            className="text-center py-8 text-muted-foreground"
                          >
                            No submissions found
                          </TableCell>
                        </TableRow>
                      )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="product-requests" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Requests</CardTitle>
              <CardDescription>
                View and manage product requests from your website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search requests..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processed">Processed</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests.length > 0
                      ? (
                        filteredRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell>
                              <div className="font-medium">
                                {request.productName}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                ID: {request.productId}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <div>{request.customerName}</div>
                                <div className="text-sm text-muted-foreground">
                                  {request.customerEmail}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{request.quantity}</TableCell>
                            <TableCell>
                              {formatDate(request.createdAt)}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={getStatusBadgeVariant(request.status)}
                              >
                                {request.status.charAt(0).toUpperCase() +
                                  request.status.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Filter className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem
                                    onClick={() => setViewingRequest(request)}
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  {request.status === "pending" && (
                                    <DropdownMenuItem
                                      onClick={() =>
                                        updateRequestStatus(
                                          request.id,
                                          "processed",
                                        )}
                                    >
                                      <Check className="mr-2 h-4 w-4" />
                                      Mark as Processed
                                    </DropdownMenuItem>
                                  )}
                                  {request.status === "processed" && (
                                    <DropdownMenuItem
                                      onClick={() =>
                                        updateRequestStatus(
                                          request.id,
                                          "completed",
                                        )}
                                    >
                                      <Check className="mr-2 h-4 w-4" />
                                      Mark as Completed
                                    </DropdownMenuItem>
                                  )}
                                  {(request.status === "pending" ||
                                    request.status === "processed") && (
                                      <DropdownMenuItem
                                        onClick={() =>
                                          updateRequestStatus(
                                            request.id,
                                            "cancelled",
                                          )}
                                      >
                                        <X className="mr-2 h-4 w-4" />
                                        Cancel Request
                                      </DropdownMenuItem>
                                    )}
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    className="text-destructive"
                                    onClick={() => deleteRequest(request.id)}
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      )
                      : (
                        <TableRow>
                          <TableCell
                            colSpan={6}
                            className="text-center py-8 text-muted-foreground"
                          >
                            No product requests found
                          </TableCell>
                        </TableRow>
                      )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* View Submission Dialog */}
      <Dialog
        open={!!viewingSubmission}
        onOpenChange={(open) => !open && setViewingSubmission(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Submission Details</DialogTitle>
            <DialogDescription>
              View the details of this form submission
            </DialogDescription>
          </DialogHeader>

          {viewingSubmission && (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">
                    {viewingSubmission.formName}
                  </h3>
                  {viewingSubmission.subject && (
                    <p className="text-muted-foreground">
                      {viewingSubmission.subject}
                    </p>
                  )}
                </div>
                <Badge
                  variant={getStatusBadgeVariant(viewingSubmission.status)}
                >
                  {viewingSubmission.status.charAt(0).toUpperCase() +
                    viewingSubmission.status.slice(1)}
                </Badge>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">From</Label>
                  <div className="font-medium">{viewingSubmission.name}</div>
                  <div>{viewingSubmission.email}</div>
                  {viewingSubmission.phone && (
                    <div>{viewingSubmission.phone}</div>
                  )}
                </div>
                <div>
                  <Label className="text-muted-foreground">Date & Time</Label>
                  <div>{formatDate(viewingSubmission.createdAt)}</div>
                  {viewingSubmission.readAt && (
                    <div className="text-sm text-muted-foreground">
                      Read: {formatDate(viewingSubmission.readAt)}
                    </div>
                  )}
                  {viewingSubmission.repliedAt && (
                    <div className="text-sm text-muted-foreground">
                      Replied: {formatDate(viewingSubmission.repliedAt)}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground">Message</Label>
                <div className="border rounded-md p-4 bg-muted/30">
                  {viewingSubmission.message}
                </div>
              </div>

              {Object.keys(viewingSubmission.fields).length > 0 && (
                <div className="space-y-2">
                  <Label className="text-muted-foreground">
                    Additional Fields
                  </Label>
                  <div className="border rounded-md p-4 bg-muted/30">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                      {Object.entries(viewingSubmission.fields).map((
                        [key, value],
                      ) => (
                        <div key={key} className="flex flex-col">
                          <dt className="text-sm font-medium text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, " $1").replace(
                              /^./,
                              (str) => str.toUpperCase(),
                            )}
                          </dt>
                          <dd className="text-sm">
                            {Array.isArray(value)
                              ? value.join(", ")
                              : value.toString()}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              )}

              <Separator />

              <div className="flex justify-between">
                <div className="space-x-2">
                  {viewingSubmission.status === "new" && (
                    <Button
                      variant="outline"
                      onClick={() => markAsRead(viewingSubmission.id)}
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Mark as Read
                    </Button>
                  )}
                  {(viewingSubmission.status === "new" ||
                    viewingSubmission.status === "read") && (
                      <Button
                        variant="outline"
                        onClick={() => markAsReplied(viewingSubmission.id)}
                      >
                        <Check className="mr-2 h-4 w-4" />
                        Mark as Replied
                      </Button>
                    )}
                </div>
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => markAsSpam(viewingSubmission.id)}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Mark as Spam
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => archiveSubmission(viewingSubmission.id)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Archive
                  </Button>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setViewingSubmission(null)}
            >
              Close
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (viewingSubmission) {
                  deleteSubmission(viewingSubmission.id);
                  setViewingSubmission(null);
                }
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Product Request Dialog */}
      <Dialog
        open={!!viewingRequest}
        onOpenChange={(open) => !open && setViewingRequest(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Product Request Details</DialogTitle>
            <DialogDescription>
              View the details of this product request
            </DialogDescription>
          </DialogHeader>

          {viewingRequest && (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">
                    {viewingRequest.productName}
                  </h3>
                  <p className="text-muted-foreground">
                    Product ID: {viewingRequest.productId}
                  </p>
                </div>
                <Badge variant={getStatusBadgeVariant(viewingRequest.status)}>
                  {viewingRequest.status.charAt(0).toUpperCase() +
                    viewingRequest.status.slice(1)}
                </Badge>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Customer</Label>
                  <div className="font-medium">
                    {viewingRequest.customerName}
                  </div>
                  <div>{viewingRequest.customerEmail}</div>
                  {viewingRequest.customerPhone && (
                    <div>{viewingRequest.customerPhone}</div>
                  )}
                </div>
                <div>
                  <Label className="text-muted-foreground">
                    Request Details
                  </Label>
                  <div>Quantity: {viewingRequest.quantity}</div>
                  <div className="text-sm text-muted-foreground">
                    Created: {formatDate(viewingRequest.createdAt)}
                  </div>
                  {viewingRequest.processedAt && (
                    <div className="text-sm text-muted-foreground">
                      Processed: {formatDate(viewingRequest.processedAt)}
                    </div>
                  )}
                  {viewingRequest.completedAt && (
                    <div className="text-sm text-muted-foreground">
                      Completed: {formatDate(viewingRequest.completedAt)}
                    </div>
                  )}
                </div>
              </div>

              {viewingRequest.notes && (
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Notes</Label>
                  <div className="border rounded-md p-4 bg-muted/30">
                    {viewingRequest.notes}
                  </div>
                </div>
              )}

              <Separator />

              <div className="flex justify-between">
                <div className="space-x-2">
                  {viewingRequest.status === "pending" && (
                    <Button
                      variant="outline"
                      onClick={() =>
                        updateRequestStatus(viewingRequest.id, "processed")}
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Mark as Processed
                    </Button>
                  )}
                  {viewingRequest.status === "processed" && (
                    <Button
                      variant="outline"
                      onClick={() =>
                        updateRequestStatus(viewingRequest.id, "completed")}
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Mark as Completed
                    </Button>
                  )}
                </div>
                <div className="space-x-2">
                  {(viewingRequest.status === "pending" ||
                    viewingRequest.status === "processed") && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          updateRequestStatus(viewingRequest.id, "cancelled")}
                      >
                        <X className="mr-2 h-4 w-4" />
                        Cancel Request
                      </Button>
                    )}
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setViewingRequest(null)}>
              Close
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (viewingRequest) {
                  deleteRequest(viewingRequest.id);
                  setViewingRequest(null);
                }
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
