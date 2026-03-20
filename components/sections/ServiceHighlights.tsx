import { Tent, Flame, Popcorn, PartyPopper } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export function ServiceHighlights() {
  const highlights = [
    {
      title: 'Inflatables & Slides',
      description: 'Massive water slides and bounce house combos.',
      icon: Tent,
      color: 'text-secondary-500',
      bg: 'bg-secondary-50',
    },
    {
      title: 'Mechanical Bulls',
      description: 'The ultimate centerpieces for unforgettable parties.',
      icon: Flame,
      color: 'text-primary-500',
      bg: 'bg-primary-50',
    },
    {
      title: 'Concessions',
      description: 'Cotton candy, popcorn, and snow cone machines.',
      icon: Popcorn,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
    {
      title: 'Event Essentials',
      description: 'Tents, tables, chairs, and generators.',
      icon: PartyPopper,
      color: 'text-indigo-500',
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative z-30 -mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="border-none shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-medium">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
