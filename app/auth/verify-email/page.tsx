import { Metadata } from 'next';
import { Suspense } from 'react';
import { VerifyEmailContent } from '@/app/components/auth/VerifyEmailContent';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';

export const metadata: Metadata = {
  title: 'Verify Email',
  description: 'Verify your Chess Trainer email address.',
};

export default function VerifyEmailPage() {
  return (
    <div
      className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4"
      style={{ background: 'var(--background)' }}
    >
      <Suspense
        fallback={
          <div className="flex flex-col items-center gap-4">
            <LoadingSpinner size="lg" />
            <p style={{ color: 'var(--foreground-muted)' }}>Loading...</p>
          </div>
        }
      >
        <VerifyEmailContent />
      </Suspense>
    </div>
  );
}
