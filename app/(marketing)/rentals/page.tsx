import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Our Rentals | Browse All Inflatables & Games',
  description: 'Explore our full catalog of water slides, bounce houses, mechanical bulls, and party essentials for your DFW Metro event.',
};

export const dynamic = 'force-dynamic';

export default async function RentalsPage() {
  // Fetch columns: name, slug, image_url from categories
  const { data: categories } = await supabase
    .from('categories')
    .select('name, slug, image_url')
    .order('name', { ascending: true });

  const displayCategories = categories || [];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-slate-900 tracking-tighter uppercase">
            Party Rentals <span className="text-primary-500">Catalog</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            Browse our premium collection of entertainment rentals. From high-speed water slides to mechanical bulls, we have everything you need for an unforgettable event.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayCategories.map((cat) => (
            <Link href={`/rentals/${cat.slug}`} key={cat.slug} className="group">
              <Card className="relative overflow-hidden border-none shadow-2xl rounded-3xl aspect-[4/5] md:aspect-[3/4]">
                <div className="absolute inset-0">
                  <img 
                    src={cat.image_url || 'https://images.unsplash.com/photo-1549488344-c6f9378c2e8c?w=800&q=80'} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mb-2">
                      {cat.name}
                    </h2>
                    <div className="h-1 w-12 bg-primary-500 rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                    <p className="text-white/80 font-bold uppercase tracking-widest text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      Explore Collection →
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
          
          {displayCategories.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 font-bold text-xl italic italic">No categories found in the database yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
