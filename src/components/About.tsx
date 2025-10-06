import { Mountain, Users, Shield, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Mountain,
      title: "مواقع طبيعية خلابة",
      description: "نختار لك أجمل المواقع في الطبيعة العراقية"
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "فريق ذو خبرة عالية لضمان راحتك وأمانك"
    },
    {
      icon: Shield,
      title: "معايير أمان عالية",
      description: "نلتزم بأعلى معايير السلامة والأمان"
    },
    {
      icon: Award,
      title: "خدمة متميزة",
      description: "نقدم أفضل الخدمات لتجربة لا تُنسى"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            شركة النيزك هي الخيار الأمثل لمحبي التخييم والطبيعة في العراق. نوفر لك تجربة 
            تخييم استثنائية مع كل ما تحتاجه من معدات وخدمات عالية الجودة في أجمل المواقع الطبيعية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 border border-border group hover:border-primary"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
