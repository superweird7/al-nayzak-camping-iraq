import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      info: "+964 770 123 4567",
      link: "tel:+9647701234567"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      info: "info@alnayzak.com",
      link: "mailto:info@alnayzak.com"
    },
    {
      icon: MapPin,
      title: "الموقع",
      info: "بغداد، العراق",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتك وحجز رحلتك القادمة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 border-border hover:border-primary group"
            >
              <a href={contact.link} className="block">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {contact.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {contact.info}
                </p>
              </a>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto p-8 shadow-lg">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center animate-pulse">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              تواصل معنا عبر واتساب
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              راسلنا مباشرة للحجز والاستفسارات
            </p>
            <a
              href="https://wa.me/9647701234567?text=مرحباً، أود الاستفسار عن خدمات التخييم"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-12 py-6 shadow-xl hover:shadow-2xl transition-all"
                size="lg"
              >
                <MessageCircle className="ml-2 h-6 w-6" />
                افتح واتساب
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
