'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {useApi} from '@/services/Api';

interface UseResetPasswordProps {
  token: string;
}

export function useResetPassword({token}: UseResetPasswordProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const router = useRouter();

  const {data, error, loading} = useApi<{message: string}>({
    url: '/api/auth/reset-password',
    method: 'POST',
    body: submitClicked ? {token, newPassword} : undefined,
  });

  const [localError, setLocalError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setLocalError('Passwords do not match.');
      return;
    }

    setLocalError(null);
    setSubmitClicked(true);
  };

  if (submitClicked && !loading) {
    if (error) {
      setLocalError(error);
      setSubmitClicked(false); // reset so it doesn't infinitely call
    } else if (data) {
      setSuccess(true);
      setTimeout(() => router.push('/login'), 2000);
    }
  }

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    error: localError,
    success,
    handleSubmit,
    loading,
  };
}
