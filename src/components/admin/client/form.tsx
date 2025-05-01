"use client";

import Link from "next/link";
import { ArrowLeftIcon, CheckIcon, LockIcon, ShieldIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResetPassword } from "@/hooks/use-reset-password";

export default function ResetPasswordForm({ token }: { token: string }) {
  const {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    success,
    handleSubmit,
    loading,
  } = useResetPassword({ token });
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <ShieldIcon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-center text-2xl">
                Reset Password
              </CardTitle>
              <CardDescription className="text-center">
                Create a new password for your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <LockIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <CheckIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              {success && (
                <p className="text-sm text-green-500">
                  Password reset! Redirecting...
                </p>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full"
                disabled={loading}
                size="lg"
              >
                {loading ? "Resetting..." : "Reset Password"} 
                text
              </Button>
              <Link
                href="/login"
                className="flex items-center justify-center text-sm text-muted-foreground hover:text-primary"
              >
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to login
              </Link>
            </CardFooter>
          </form>
        </Card>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Your password will be updated immediately after submission.</p>
        </div>
      </div>
    </div>
  );
}
