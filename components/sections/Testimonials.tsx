import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export function Testimonials() {
  const reviews = [
    {
      name: 'Sarah M.',
      role: 'Local Parent',
      content: 'The Tropics water slide was a massive hit at my son\'s 10th birthday! The team arrived early, set everything up perfectly, and the slide was spotless. Will definitely book again!',
      rating: 5
    },
    {
      name: 'Mike T.',
      role: 'Corporate Event Planner',
      content: 'We rented the mechanical bull for our company picnic and it was the highlight of the event. The operator was professional and made sure everyone had a safe, fun time. Highly recommend.',
      rating: 5
    },
    {
      name: 'Jessica R.',
      role: 'School Fest Coordinator',
      content: 'Ride & Slide provided 5 inflatables for our school festival. Their insurance process was seamless and they handled the massive crowd with ease. Best vendor we have worked with.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-500 tracking-wider uppercase mb-2">Wall of Love</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-black text-slate-900 mb-6">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card key={idx} className="bg-white border-none shadow-lg shadow-slate-200/50">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.content}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
