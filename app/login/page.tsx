'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Lock, Mail, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setIsLoading(false);
      return;
    }

    if (data.user) {
      // Check if it's the admin user
      if (data.user.id === '42228898-9e81-4fcf-96a6-6d4d8b947226') {
        router.push('/admin');
      } else {
        router.push('/');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <span className="text-4xl font-heading font-black tracking-tighter text-slate-900">
              Ride<span className="text-primary-500">&</span>Slide
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 font-heading">Admin Portal Login</h1>
          <p className="text-slate-500 mt-2">Enter your credentials to manage your party hub</p>
        </div>

        <Card className="border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl flex items-center gap-3 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="font-medium">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all placeholder:text-slate-400"
                    placeholder="admin@rideandslide.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all placeholder:text-slate-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-lg font-bold shadow-lg shadow-primary-500/20 rounded-2xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  'Sign In to Admin'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <p className="text-center mt-8">
          <Link href="/" className="text-slate-400 hover:text-primary-500 font-medium transition-colors text-sm">
            &larr; Back to Website
          </Link>
        </p>
      </div>
    </div>
  );
}
