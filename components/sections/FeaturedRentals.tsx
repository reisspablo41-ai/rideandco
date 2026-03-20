import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import Link from 'next/link';
import { AddToCartButton } from '@/components/cart/AddToCartButton';

interface Rental {
  id: number;
  name: string;
  slug: string;
  categorySlug: string;
  image: string;
  price: number; // Changed to number
  priceDisplay: string; // New field for display
  rating: number;
  reviews: number;
  category: string;
}

interface FeaturedRentalsProps {
  rentals?: Rental[];
  title?: string;
  subtitle?: string;
}

export function FeaturedRentals({ rentals = [], title, subtitle }: FeaturedRentalsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold text-primary-500 tracking-wider uppercase mb-2">{subtitle || 'Trending Now'}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-900">{title || 'Featured Rentals'}</h3>
          </div>
          <Link href="/rentals">
            <Button variant="ghost" className="hidden md:flex gap-2 font-bold text-slate-600 hover:text-primary-600">
              View All Inventory <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentals.map((rental, idx) => (
            <Card key={idx} className="group cursor-pointer border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden">
              <Link href={`/rentals/${rental.categorySlug}/${rental.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={rental.image} 
                    alt={rental.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-black text-slate-700 uppercase tracking-widest border border-slate-100">
                    {rental.category}
                  </div>
                </div>
                <CardContent className="pt-6 pb-2">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-black text-sm text-slate-700">{rental.rating.toFixed(1)}</span>
                    <span className="text-slate-400 text-sm font-medium">({rental.reviews} reviews)</span>
                  </div>
                  <h4 className="text-2xl font-heading font-black text-slate-900 mb-2 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{rental.name}</h4>
                  <p className="text-3xl font-black text-primary-500">{rental.price} <span className="text-sm font-bold text-slate-400 uppercase">/ event</span></p>
                </CardContent>
              </Link>
              <CardFooter className="pt-2 pb-6">
                <AddToCartButton 
                  product={{
                    id: rental.id,
                    name: rental.name,
                    slug: rental.slug,
                    categorySlug: rental.categorySlug,
                    image: rental.image,
                    price: rental.price
                  }} 
                  className="w-full h-12 text-lg shadow-lg shadow-primary-500/20"
                />
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/rentals">
            <Button variant="outline" className="w-full h-12 border-slate-200 text-slate-600 font-bold">
              View All Inventory
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
