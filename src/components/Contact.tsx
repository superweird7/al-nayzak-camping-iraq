import { Phone, Mail, MapPin, Send } from "lucide-react";
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
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            أرسل لنا رسالة
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-foreground mb-2 font-semibold">الاسم</label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="أدخل اسمك"
              />
            </div>
            <div>
              <label className="block text-foreground mb-2 font-semibold">رقم الهاتف</label>
              <input 
                type="tel" 
                className="w-full p-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="أدخل رقم هاتفك"
              />
            </div>
            <div>
              <label className="block text-foreground mb-2 font-semibold">البريد الإلكتروني</label>
              <input 
                type="email" 
                className="w-full p-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            <div>
              <label className="block text-foreground mb-2 font-semibold">الرسالة</label>
              <textarea 
                rows={4}
                className="w-full p-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>
            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              <Send className="ml-2 h-5 w-5" />
              إرسال الرسالة
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
