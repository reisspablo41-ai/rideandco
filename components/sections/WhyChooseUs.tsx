import { ShieldCheck, Clock, Sparkles } from 'lucide-react';

export function WhyChooseUs() {
  const pillars = [
    {
      title: 'Clean & Sanitized',
      description: 'Every inflatable is deep-cleaned and sanitized with EPA-approved products after every single use.',
      icon: Sparkles,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'On-Time Delivery',
      description: 'We guarantee your rentals will be set up and ready to go before your first guest arrives.',
      icon: Clock,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Fully Insured',
      description: 'We carry comprehensive liability insurance, making us the safe choice for schools and corporate events.',
      icon: ShieldCheck,
      color: 'bg-indigo-50 text-indigo-600',
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-400 tracking-wider uppercase mb-2">The Ride & Slide Difference</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-black mb-6">Why Parents & Planners Choose Us</h3>
          <p className="text-lg text-slate-300">
            We don't just deliver inflatables. We deliver peace of mind. Here's why we're the most trusted party rental company in the area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${pillar.color}`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-heading font-bold mb-4">{pillar.title}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
