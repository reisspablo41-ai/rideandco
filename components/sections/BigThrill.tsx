import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function BigThrill() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col lg:flex-row shadow-sm">
          <div className="p-8 md:p-12 lg:p-16 lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-sm font-bold text-red-500 tracking-wider uppercase mb-2">The Big Thrill</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-6">Experience the Ultimate Mechanical Bull</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Looking for a showstopper? Our top-of-the-line mechanical bull is perfect for birthdays, corporate events, and festivals. With multiple difficulty levels, it&apos;s safe for kids and challenging enough for adults.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">✓</div>
                <span className="font-semibold text-slate-700">Trained operator included for entire event</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">✓</div>
                <span className="font-semibold text-slate-700">Digital LED timer for competitions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">✓</div>
                <span className="font-semibold text-slate-700">Premium auto-stop safety system</span>
              </li>
            </ul>
            <div>
              <Link href="/rentals/mechanical-bulls">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white shadow-red-600/20">
                  Book the Bull
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative bg-slate-200 min-h-[400px]">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/A9A33BB4-922B-42A2-9AEE-5E33AF10EB9A.MOV" type="video/quicktime" />
              <source src="/A9A33BB4-922B-42A2-9AEE-5E33AF10EB9A.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
