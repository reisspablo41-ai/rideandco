import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-heading font-black tracking-tighter text-white">
                Ride<span className="text-primary-500">&</span>Slide
              </span>
            </Link>
            <p className="text-slate-400 max-w-xs">
              Your ultimate party, delivered. We bring safe, high-energy fun right to your backyard or event.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="h-10 w-10 text-slate-400 hover:text-white rounded-full bg-slate-800 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 text-slate-400 hover:text-white rounded-full bg-slate-800 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 text-slate-400 hover:text-white rounded-full bg-slate-800 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">Rentals</h3>
            <ul className="space-y-3">
              <li><Link href="/rentals/water-slides" className="hover:text-primary-400 transition-colors">Water Slides</Link></li>
              <li><Link href="/rentals/bounce-houses" className="hover:text-primary-400 transition-colors">Bounce Houses</Link></li>
              <li><Link href="/rentals/combos" className="hover:text-primary-400 transition-colors">Bounce Combos</Link></li>
              <li><Link href="/rentals/mechanical-bulls" className="hover:text-primary-400 transition-colors">Mechanical Bulls</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/safety/health-guarantee" className="hover:text-primary-400 transition-colors">Health & Safety Guarantee</Link></li>
              <li><Link href="/safety/insurance" className="hover:text-primary-400 transition-colors">Our Insurance Info</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <span className="text-slate-400">Rideandslidepartyco@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Ride and Slide Party Co. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
