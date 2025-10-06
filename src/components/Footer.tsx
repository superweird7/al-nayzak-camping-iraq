import { Tent } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Tent className="w-8 h-8" />
            <span className="text-2xl font-bold">شركة النيزك</span>
          </div>
          <p className="text-background/80 mb-4 max-w-md">
            تجربة تخييم فريدة في قلب الطبيعة العراقية الخلابة
          </p>
          <div className="border-t border-background/20 w-full pt-4 mt-4">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} شركة النيزك. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
