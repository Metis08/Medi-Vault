
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, LogOut, QrCode as QrCodeIcon, Edit, Plus } from "lucide-react";
import { ProfileForm } from "./ProfileForm";
import { EmergencyContacts } from "./EmergencyContacts";
import { QRCodeGenerator } from "./QRCodeGenerator";

interface MedicalProfileProps {
  user: any;
  onLogout: () => void;
}

export const MedicalProfile = ({ user, onLogout }: MedicalProfileProps) => {
  const [activeTab, setActiveTab] = useState("profile");
  const [medicalData, setMedicalData] = useState({
    bloodType: "",
    allergies: [],
    medications: [],
    conditions: [],
    emergencyContacts: []
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-emerald-600" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">MedVault</h1>
                <p className="text-sm text-gray-600">Welcome back, {user.firstName}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveTab("qr")}
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <QrCodeIcon className="h-4 w-4 mr-2" />
                Emergency QR
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onLogout}
                className="text-gray-600 hover:text-gray-900"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Your Medical Profile
            </h2>
            <p className="text-gray-600">
              Keep your medical information up-to-date and accessible for emergency situations.
            </p>
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="profile">Medical Info</TabsTrigger>
              <TabsTrigger value="contacts">Emergency Contacts</TabsTrigger>
              <TabsTrigger value="qr">QR Code</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <ProfileForm 
                data={medicalData} 
                onUpdate={setMedicalData}
              />
            </TabsContent>

            <TabsContent value="contacts" className="space-y-6">
              <EmergencyContacts 
                contacts={medicalData.emergencyContacts}
                onUpdate={(contacts) => setMedicalData({...medicalData, emergencyContacts: contacts})}
              />
            </TabsContent>

            <TabsContent value="qr" className="space-y-6">
              <QRCodeGenerator 
                userData={user}
                medicalData={medicalData}
              />
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Privacy Settings</h3>
                    <p className="text-sm text-gray-600">
                      Your medical data is encrypted and stored securely. You control who has access.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Data Export</h3>
                    <p className="text-sm text-gray-600">
                      Download your medical profile as a PDF for offline access.
                    </p>
                    <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      Export as PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
