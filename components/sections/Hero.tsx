import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* Background with Gradient Overlay and Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-10"></div>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/70NIhAGj19A?autoplay=1&mute=1&loop=1&playlist=70NIhAGj19A&start=0&end=15&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&enablejsapi=1"
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        ></iframe>
        <div className="absolute inset-0 bg-slate-900/60 z-[1]"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black text-white tracking-tight mb-6">
            Your Ultimate Party,<br />
            <span className="text-primary-500">Delivered.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-10 max-w-2xl font-medium leading-relaxed">
            The best inflatables, mechanical bulls, and event essentials in town. Clean, safe, and guaranteed to thrill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg gap-2 h-14 px-8">
              <Calendar className="h-5 w-5" />
              Check Availability
            </Button>
            <Button variant="outline" size="lg" className="text-lg h-14 px-8 border-white/20 text-white hover:bg-white/10 hover:border-white/40">
              View Rentals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
