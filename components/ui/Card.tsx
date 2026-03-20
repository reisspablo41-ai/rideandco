import { ReactNode } from 'react';
import { cn } from '@/components/ui/Button';

export function Card({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <div className={cn("bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }: { className?: string, children: ReactNode }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardHeader({ className, children }: { className?: string, children: ReactNode }) {
  return <div className={cn("px-6 pt-6 pb-2", className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string, children: ReactNode }) {
  return <div className={cn("px-6 pb-6 pt-2", className)}>{children}</div>;
}
