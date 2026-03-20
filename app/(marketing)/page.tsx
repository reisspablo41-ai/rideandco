import { Hero } from '@/components/sections/Hero';
import { ServiceHighlights } from '@/components/sections/ServiceHighlights';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FeaturedRentals } from '@/components/sections/FeaturedRentals';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { BigThrill } from '@/components/sections/BigThrill';
import { Testimonials } from '@/components/sections/Testimonials';
import { CustomerVideos } from '@/components/sections/CustomerVideos';
import { CallToAction } from '@/components/sections/CallToAction';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Fetch targeted featured products: 3 Water Slides, 2 Bulls, 1 Obstacle Course
  // Also fetch Party Add-ons: Concessions and Chairs/Tables
  const [
    { data: slides },
    { data: bulls },
    { data: courses },
    { data: concessions },
    { data: chairsTables }
  ] = await Promise.all([
    supabase
      .from('products')
      .select('*, categories!inner(name, slug)')
      .eq('status', 'active')
      .ilike('categories.name', '%Water Slide%')
      .limit(3),
    supabase
      .from('products')
      .select('*, categories!inner(name, slug)')
      .eq('status', 'active')
      .ilike('categories.name', '%Bull%')
      .limit(2),
    supabase
      .from('products')
      .select('*, categories!inner(name, slug)')
      .eq('status', 'active')
      .ilike('categories.name', '%Obstacle%')
      .limit(1),
    supabase
      .from('products')
      .select('*, categories!inner(name, slug)')
      .eq('status', 'active')
      .ilike('categories.name', '%Concession%'),
    supabase
      .from('products')
      .select('*, categories!inner(name, slug)')
      .eq('status', 'active')
      .or('categories.name.ilike.%Chair%,categories.name.ilike.%Table%')
  ]);

  const featuredProducts = [
    ...(slides || []),
    ...(bulls || []),
    ...(courses || [])
  ];

  const addonsProducts = [
    ...(concessions || []),
    ...(chairsTables || [])
  ];

  interface Product {
    id: number;
    name: string;
    slug: string;
    image_url?: string | null;
    base_price: string | number;
    categories: { name: string; slug: string } | null;
  }

  // Map Supabase data to the format expected by FeaturedRentals
  const mapProduct = (prod: Product) => ({
    id: prod.id,
    name: prod.name,
    slug: prod.slug,
    categorySlug: prod.categories?.slug || 'uncategorized',
    image: prod.image_url || 'https://images.unsplash.com/photo-1549488344-c6f9378c2e8c?w=800&q=80',
    price: Number(prod.base_price),
    priceDisplay: `$${prod.base_price}`,
    rating: 5.0,
    reviews: (prod.id * 7) % 40 + 10, // Deterministic mock reviews
    category: prod.categories?.name || 'Rental'
  });

  const rentals = featuredProducts.map(mapProduct);
  const addons = addonsProducts.map(mapProduct);

  return (
    <>
      <Hero />
      <ServiceHighlights />
      <HowItWorks />
      <FeaturedRentals rentals={rentals} />
      {addons.length > 0 && (
        <FeaturedRentals 
          rentals={addons} 
          title="Party Add-ons" 
          subtitle="Complete Your Event" 
        />
      )}
      <WhyChooseUs />
      <BigThrill />
      <CustomerVideos />
      <Testimonials />
      <CallToAction />
    </>
  );
}
