'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading'
  );
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus('error');
        setMessage('Invalid verification link');
        return;
      }

      try {
        const response = await fetch('/api/auth/verify-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setStatus('success');
          setMessage(data.message || 'Email verified successfully!');
          setTimeout(() => {
            router.push('/');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(data.error || 'Failed to verify email');
        }
      } catch (error) {
        console.error('Verification error:', error);
        setStatus('error');
        setMessage('An error occurred during verification');
      }
    };

    verifyEmail();
  }, [token, router]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Email Verification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        {status === 'loading' && (
          <>
            <Loader2
              className="mx-auto h-16 w-16 animate-spin"
              style={{ color: 'var(--primary)' }}
            />
            <p style={{ color: 'var(--foreground-muted)' }}>
              Verifying your email...
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle2
              className="mx-auto h-16 w-16"
              style={{ color: 'var(--success)' }}
            />
            <p
              className="text-lg font-semibold"
              style={{ color: 'var(--success)' }}
            >
              {message}
            </p>
            <p style={{ color: 'var(--foreground-muted)' }}>
              Redirecting to home...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle
              className="mx-auto h-16 w-16"
              style={{ color: 'var(--error)' }}
            />
            <p
              className="text-lg font-semibold"
              style={{ color: 'var(--error)' }}
            >
              {message}
            </p>
            <div className="space-y-2">
              <Button
                onClick={() => router.push('/auth/login')}
                className="w-full"
              >
                Go to Login
              </Button>
              <p
                className="text-sm"
                style={{ color: 'var(--foreground-muted)' }}
              >
                Need a new verification link?{' '}
                <a
                  href="/profile"
                  style={{ color: 'var(--primary)' }}
                  className="hover:underline"
                >
                  Request new link
                </a>
              </p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
