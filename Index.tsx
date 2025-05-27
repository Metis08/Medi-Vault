import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, QrCode, Clock, Users, Lock, ArrowRight, Star, CheckCircle, Award, Zap, Globe, Phone } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";
import { MedicalProfile } from "@/components/MedicalProfile";
import { Link } from "react-router-dom";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData: any) => {
    setIsLoggedIn(true);
    setUser(userData);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  if (isLoggedIn) {
    return <MedicalProfile user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-yellow-400/15 to-red-400/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-emerald-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">MedVault</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors hover:scale-105 transform duration-200">About</Link>
            <Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">Features</Link>
            <Link to="/emergency" className="text-gray-600 hover:text-red-600 transition-colors hover:scale-105 transform duration-200">Emergency</Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors hover:scale-105 transform duration-200">Contact</Link>
          </nav>
          
          <Button 
            onClick={() => setShowAuth(true)}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Trusted by 50,000+ Healthcare Professionals
                </span>
              </div>
            </div>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Your Medical Information,
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2"> 
                Always Accessible When It Matters Most
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              In emergency situations, every second counts. MedVault ensures your critical health information 
              is instantly accessible to healthcare providers through secure QR codes, potentially saving your life 
              when you can't speak for yourself. Join the revolution in emergency medical care with bank-level 
              security and lightning-fast access.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <Button 
              size="lg" 
              onClick={() => setShowAuth(true)}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-10 py-4 text-lg hover:scale-105 transition-all duration-200"
            >
              Create Medical Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/emergency">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-10 py-4 text-lg hover:scale-105 transition-all duration-200"
              >
                View Emergency Demo
                <Shield className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Emergency Banner */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6 mb-16 animate-fade-in max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-red-700 mb-2">
              <Heart className="h-6 w-6" />
              <span className="font-bold text-lg">Emergency Mode Available 24/7</span>
            </div>
            <p className="text-red-600 mb-3">
              No login required - instant access via QR code for medical professionals worldwide
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-red-500">
              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Global Access</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Instant Response</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Works Offline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center animate-scale-in">
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3">50K+</div>
            <p className="text-gray-600 font-medium">Lives Protected Daily</p>
          </div>
          <div className="text-center animate-scale-in delay-100">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">99.9%</div>
            <p className="text-gray-600 font-medium">Uptime Guarantee</p>
          </div>
          <div className="text-center animate-scale-in delay-200">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-3">24/7</div>
            <p className="text-gray-600 font-medium">Emergency Access</p>
          </div>
          <div className="text-center animate-scale-in delay-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent mb-3">2s</div>
            <p className="text-gray-600 font-medium">Average Access Time</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">Life-Saving Features</span>
        </h3>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Discover how MedVault's innovative technology bridges the critical gap between patients and healthcare providers in emergency situations.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-emerald-100 bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in group">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <QrCode className="h-12 w-12 text-emerald-600 group-hover:scale-110 transition-transform" />
                <Zap className="h-6 w-6 text-emerald-400" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Instant QR Access</CardTitle>
              <CardDescription className="text-gray-600">
                Generate QR codes for emergency responders to access critical info instantly, even when you're unconscious
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Works without internet</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Universal smartphone compatibility</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />No app installation required</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100 bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-100 group">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Lock className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform" />
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Military-Grade Security</CardTitle>
              <CardDescription className="text-gray-600">
                Your medical data is protected with advanced encryption protocols trusted by financial institutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />End-to-end encryption</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />HIPAA compliant storage</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Zero-knowledge architecture</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-100 bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-200 group">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Clock className="h-12 w-12 text-purple-600 group-hover:scale-110 transition-transform" />
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">Always Available</CardTitle>
              <CardDescription className="text-gray-600">
                Access your medical profile 24/7 from anywhere in the world, with offline capability when needed most
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Global accessibility</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Offline emergency mode</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Real-time synchronization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-emerald-100 bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-300 group">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Heart className="h-12 w-12 text-emerald-600 group-hover:scale-110 transition-transform" />
                <Star className="h-6 w-6 text-emerald-400" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Complete Medical History</CardTitle>
              <CardDescription className="text-gray-600">
                Store comprehensive health information including allergies, medications, conditions, and vaccination records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Allergy & medication tracking</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Chronic condition management</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Vaccination history</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100 bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-400 group">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Users className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform" />
                <Phone className="h-6 w-6 text-blue-400" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Emergency Contacts</CardTitle>
              <CardDescription className="text-gray-600">
                Keep important contacts readily available for healthcare providers with instant notification capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Multiple contact types</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Automatic notifications</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Relationship mapping</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-100 bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-500 group">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Shield className="h-12 w-12 text-purple-600 group-hover:scale-110 transition-transform" />
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">Medical Professional Verified</CardTitle>
              <CardDescription className="text-gray-600">
                Designed with direct input from emergency responders, paramedics, and healthcare workers worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />EMT approved design</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Hospital tested interface</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Doctor recommended</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Trusted by Healthcare Heroes</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "MedVault saved precious time during a cardiac emergency. Having instant access to the patient's medication list and allergies was crucial."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    DR
                  </div>
                  <div>
                    <p className="font-semibold">Dr. Sarah Chen</p>
                    <p className="text-sm text-gray-500">Emergency Medicine Physician</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "As a paramedic, I've seen how critical seconds matter. MedVault's QR system gives us vital information instantly, even in the ambulance."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    MJ
                  </div>
                  <div>
                    <p className="font-semibold">Michael Johnson</p>
                    <p className="text-sm text-gray-500">Senior Paramedic</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The peace of mind MedVault provides is invaluable. My elderly mother's complex medical history is now always accessible to caregivers."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    LM
                  </div>
                  <div>
                    <p className="font-semibold">Lisa Martinez</p>
                    <p className="text-sm text-gray-500">Family Caregiver</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed to always show both buttons */}
      <section className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Protect Yourself and Your Loved Ones?
          </h3>
          <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join over 50,000 people who trust MedVault to keep their critical medical information 
            secure and accessible when it matters most. Start protecting your family today with our 
            comprehensive medical emergency solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowAuth(true)}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 text-lg hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Your Medical Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/features">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 text-lg hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Explore All Features
                <Star className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-50 to-white border-t border-emerald-100 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Shield className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">MedVault</span>
          </div>
          <div className="flex justify-center space-x-8 mb-6">
            <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">About</Link>
            <Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</Link>
            <Link to="/emergency" className="text-gray-600 hover:text-red-600 transition-colors font-medium">Emergency</Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Contact</Link>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              Secure medical records management • Emergency access technology • HIPAA-compliant design
            </p>
            <p className="text-sm text-gray-500">
              © 2024 MedVault. All rights reserved. Protecting lives through innovative medical technology.
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuth && (
        <AuthModal 
          onClose={() => setShowAuth(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default Index;
