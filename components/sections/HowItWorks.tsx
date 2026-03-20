import { ShoppingCart, Truck, PartyPopper } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      title: '1. Browse & Book',
      description: 'Explore our massive inventory of inflatables, mechanical bulls, and concessions. Select your date, choose your items, and secure your reservation with a simple 25% deposit online.',
      icon: ShoppingCart,
      color: 'bg-primary-100 text-primary-600'
    },
    {
      title: '2. We Deliver & Set Up',
      description: 'On the day of your event, our professional, uniformed team arrives early. We handle all the heavy lifting, securing the inflatables safely and sanitizing everything on-site.',
      icon: Truck,
      color: 'bg-secondary-100 text-secondary-600'
    },
    {
      title: '3. You Party, We Pack',
      description: 'Enjoy a stress-free, unforgettable event! When the party is over, our team returns to pack everything up, ensuring your yard is left exactly as we found it.',
      icon: PartyPopper,
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary-500 tracking-wider uppercase mb-2">Simple Process</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-black text-slate-900 mb-6">How It Works</h3>
          <p className="text-lg text-slate-600">Booking the perfect party has never been easier. We handle the logistics so you can focus on making memories.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-1 bg-slate-100 z-0 rounded-full"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className={`w-28 h-28 rounded-full flex items-center justify-center mb-8 shadow-xl ${step.color} border-8 border-white group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-bold font-heading mb-4 text-slate-900">{step.title}</h4>
                <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
