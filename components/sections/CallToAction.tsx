import { Button } from '@/components/ui/Button';

export function CallToAction() {
  return (
    <section className="py-24 bg-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543880490-e7f0b54060b2?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-400 rounded-full blur-[120px] opacity-50 -mr-[400px] -mt-[400px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight drop-shadow-sm">Ready to Make Memories?</h2>
        <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">Don't wait until the last minute. Our most popular rentals book out weeks in advance. Secure your party date today!</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="h-16 px-10 text-xl font-bold bg-white text-primary-600 hover:bg-slate-50 border-none shadow-2xl shadow-primary-900/30">Book Your Party Now</Button>
          <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold border-white/40 text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">Contact Our Team</Button>
        </div>
      </div>
    </section>
  );
}
