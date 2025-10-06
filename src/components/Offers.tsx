import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import campingEquipment from "@/assets/camping-equipment.jpg";
import campingGroup from "@/assets/camping-group.jpg";

const Offers = () => {
  const offers = [
    {
      title: "عرض العائلة",
      price: "150,000",
      duration: "يومين وليلة",
      image: campingGroup,
      features: [
        "خيمة عائلية كبيرة",
        "معدات تخييم كاملة",
        "وجبات طعام",
        "مشرف متخصص",
        "أنشطة ترفيهية",
        "موقع آمن ومجهز"
      ],
      popular: true
    },
    {
      title: "عرض المجموعات",
      price: "500,000",
      duration: "ثلاثة أيام وليلتين",
      image: campingEquipment,
      features: [
        "5-10 خيام",
        "معدات تخييم متكاملة",
        "طاقم خدمات كامل",
        "وجبات يومية",
        "رحلات استكشافية",
        "حفلة نار المخيم",
        "تأمين شامل"
      ],
      popular: false
    },
    {
      title: "عرض نهاية الأسبوع",
      price: "80,000",
      duration: "يوم واحد",
      image: campingEquipment,
      features: [
        "خيمة لشخصين",
        "معدات أساسية",
        "وجبة واحدة",
        "موقع مميز",
        "إشراف وأمان"
      ],
      popular: false
    }
  ];

  return (
    <section id="offers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            عروضنا المميزة
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر العرض المناسب لك واستمتع بتجربة تخييم لا تُنسى
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offers.map((offer, index) => (
            <Card 
              key={index}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                offer.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''
              }`}
            >
              {offer.popular && (
                <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-2 font-bold flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  الأكثر طلباً
                  <Star className="w-4 h-4 fill-current" />
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground mb-4">{offer.duration}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{offer.price}</span>
                  <span className="text-muted-foreground mr-2">دينار</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  احجز الآن
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
