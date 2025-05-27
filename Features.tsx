
import { Shield, QrCode, Heart, Users, Clock, Lock, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: QrCode,
      title: "Emergency QR Codes",
      description: "Generate instant-access QR codes for emergency responders",
      benefits: ["No login required", "Works offline", "Instant scanning"],
      color: "emerald"
    },
    {
      icon: Lock,
      title: "Military-Grade Security",
      description: "Your data is protected with bank-level encryption",
      benefits: ["End-to-end encryption", "HIPAA compliant", "Zero-knowledge architecture"],
      color: "blue"
    },
    {
      icon: Heart,
      title: "Complete Medical Profile",
      description: "Store all critical health information in one place",
      benefits: ["Allergies & medications", "Medical conditions", "Vaccination records"],
      color: "purple"
    },
    {
      icon: Users,
      title: "Emergency Contacts",
      description: "Keep important contacts readily available",
      benefits: ["Multiple contact types", "Instant notification", "Relationship mapping"],
      color: "emerald"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access your medical data anytime, anywhere",
      benefits: ["Global accessibility", "Offline capability", "Real-time sync"],
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect experience on any device",
      benefits: ["Responsive design", "Touch-friendly", "Fast loading"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          icon: "text-emerald-600",
          title: "from-emerald-600 to-blue-600",
          badge: "bg-emerald-100 text-emerald-700"
        };
      case "blue":
        return {
          icon: "text-blue-600",
          title: "from-blue-600 to-purple-600",
          badge: "bg-blue-100 text-blue-700"
        };
      case "purple":
        return {
          icon: "text-purple-600",
          title: "from-purple-600 to-emerald-600",
          badge: "bg-purple-100 text-purple-700"
        };
      default:
        return {
          icon: "text-emerald-600",
          title: "from-emerald-600 to-blue-600",
          badge: "bg-emerald-100 text-emerald-700"
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-br from-purple-400/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <Shield className="h-8 w-8 text-emerald-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">MedVault</h1>
          </Link>
          <Link to="/">
            <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how MedVault's innovative features are designed to save lives and provide 
            peace of mind in critical moments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <Card 
                key={feature.title} 
                className="border-white/20 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <feature.icon className={`h-12 w-12 ${colors.icon} mb-4`} />
                  <CardTitle className={`text-xl bg-gradient-to-r ${colors.title} bg-clip-text text-transparent`}>
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <Badge key={benefit} variant="outline" className={colors.badge}>
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-blue-600/90"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands who trust MedVault to keep their medical information secure and accessible.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                Create Your Profile Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
