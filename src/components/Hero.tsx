import heroImage from "@/assets/hero-camping.jpg";
import { Button } from "@/components/ui/button";
import { Tent } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="التخييم في الطبيعة العراقية"
          fetchPriority="high"
          width="1534"
          height="1080"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-6 animate-fade-in">
          <Tent className="w-20 h-20" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          شركة النيزك
        </h1>
        
        <p className="text-xl md:text-3xl mb-8 font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
          تجربة تخييم فريدة في قلب الطبيعة العراقية
        </p>
        
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          استمتع بأجمل المناظر الطبيعية مع خدمات متميزة وعروض حصرية
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
          >
            اكتشف العروض
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            تواصل معنا
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
