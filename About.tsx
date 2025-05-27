
import { Shield, Heart, Users, Lock, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
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
            About MedVault
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from the urgent need to save lives in emergency situations, MedVault bridges the critical 
            gap between patients and healthcare providers when every second counts.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="border-emerald-100 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Heart className="h-12 w-12 text-emerald-600 mb-4" />
              <CardTitle className="text-2xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To eliminate preventable medical emergencies by ensuring critical health information 
                is instantly accessible to healthcare professionals, regardless of the patient's condition.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-100 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                A world where no patient suffers from delayed or incorrect treatment due to 
                inaccessible medical records during critical moments.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center animate-scale-in">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">10,000+</div>
            <p className="text-gray-600">Lives Protected</p>
          </div>
          <div className="text-center animate-scale-in delay-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">99.9%</div>
            <p className="text-gray-600">Uptime Guarantee</p>
          </div>
          <div className="text-center animate-scale-in delay-200">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">24/7</div>
            <p className="text-gray-600">Emergency Access</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-emerald-100 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Lock className="h-10 w-10 text-emerald-600 mb-3" />
              <CardTitle className="text-lg">Bank-Level Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Your medical data is encrypted with military-grade security protocols.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-100 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Clock className="h-10 w-10 text-blue-600 mb-3" />
              <CardTitle className="text-lg">Instant Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                QR codes provide immediate access to critical information in emergencies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-100 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Users className="h-10 w-10 text-purple-600 mb-3" />
              <CardTitle className="text-lg">Healthcare Verified</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Designed with input from emergency responders and medical professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
