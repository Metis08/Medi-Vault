
import { AlertTriangle, Phone, QrCode, Clock, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const Emergency = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <Shield className="h-8 w-8 text-red-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">MedVault Emergency</h1>
          </Link>
          <Link to="/">
            <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Emergency Alert */}
        <Alert className="border-red-200 bg-red-50 mb-8 animate-pulse">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-800">Emergency Access</AlertTitle>
          <AlertDescription className="text-red-700">
            This page demonstrates emergency access features. In a real emergency, call 911 immediately.
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Emergency Access
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            When every second counts, MedVault provides instant access to life-saving medical information 
            for healthcare professionals and emergency responders.
          </p>
        </div>

        {/* Emergency Numbers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-red-200 bg-white/70 backdrop-blur-sm text-center hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-red-600">Emergency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-600 mb-2">911</p>
              <p className="text-gray-600">Life-threatening emergencies</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/70 backdrop-blur-sm text-center hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-orange-600">Poison Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-600 mb-2">1-800-222-1222</p>
              <p className="text-gray-600">Poison emergencies</p>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-white/70 backdrop-blur-sm text-center hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="text-yellow-600">Crisis Line</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600 mb-2">988</p>
              <p className="text-gray-600">Mental health emergencies</p>
            </CardContent>
          </Card>
        </div>

        {/* QR Code Demo */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-red-100 bg-white/70 backdrop-blur-sm">
            <CardHeader className="text-center">
              <QrCode className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-2xl bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Emergency QR Access Demo
              </CardTitle>
              <CardDescription className="text-lg">
                In a real emergency, scanning your MedVault QR code would instantly display critical medical information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Instantly Accessible Information:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Blood type and allergies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Current medications</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Medical conditions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Emergency contacts</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <QrCode className="h-32 w-32 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">QR Code would appear here</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Scannable by any smartphone camera
                  </p>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-gray-200">
                <Link to="/">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                    Set Up Your Emergency Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
