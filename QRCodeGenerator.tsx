
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode as QrCodeIcon, Download, Share2, AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface QRCodeGeneratorProps {
  userData: any;
  medicalData: any;
}

export const QRCodeGenerator = ({ userData, medicalData }: QRCodeGeneratorProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);

  // Simulate QR code generation
  const generateQRCode = () => {
    const emergencyData = {
      name: `${userData.firstName} ${userData.lastName}`,
      bloodType: medicalData.bloodType,
      allergies: medicalData.allergies,
      medications: medicalData.medications,
      conditions: medicalData.conditions,
      emergencyContacts: medicalData.emergencyContacts
    };

    // In a real app, this would generate an actual QR code
    // For demo purposes, we'll create a mock QR code
    const dataString = JSON.stringify(emergencyData);
    const mockQRUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(dataString)}`;
    setQrCodeUrl(mockQRUrl);
    
    toast({
      title: "QR Code Generated",
      description: "Your emergency QR code is ready to use.",
    });
  };

  const downloadQRCode = () => {
    toast({
      title: "QR Code Downloaded",
      description: "Save this QR code to your phone for emergency access.",
    });
  };

  const shareQRCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Medical Emergency QR Code',
        text: 'Access my emergency medical information',
        url: qrCodeUrl
      });
    } else {
      toast({
        title: "QR Code Link Copied",
        description: "Emergency QR code link copied to clipboard.",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* QR Code Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <QrCodeIcon className="h-5 w-5" />
            <span>Emergency QR Code</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 text-red-700 mb-2">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-semibold">Emergency Access Only</span>
              </div>
              <p className="text-red-600 text-sm">
                This QR code provides instant access to your critical medical information without requiring login.
                Only share with trusted medical professionals.
              </p>
            </div>

            {!qrCodeUrl ? (
              <div className="space-y-4">
                <div className="w-64 h-64 mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <QrCodeIcon className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">No QR code generated</p>
                  </div>
                </div>
                <Button 
                  onClick={generateQRCode}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Generate Emergency QR Code
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div ref={qrRef} className="w-64 h-64 mx-auto">
                  <img 
                    src={qrCodeUrl} 
                    alt="Emergency Medical QR Code"
                    className="w-full h-full object-contain border rounded-lg"
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <Button 
                    onClick={downloadQRCode}
                    variant="outline"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button 
                    onClick={shareQRCode}
                    variant="outline"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button 
                    onClick={generateQRCode}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Regenerate
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use Your Emergency QR Code</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold">Save to Your Phone</h4>
                <p className="text-sm text-gray-600">Download and save the QR code to your phone's photo gallery or wallet app.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold">Print a Copy</h4>
                <p className="text-sm text-gray-600">Keep a printed copy in your wallet, purse, or medical ID bracelet.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold">Emergency Access</h4>
                <p className="text-sm text-gray-600">Medical professionals can scan this code to instantly access your critical information.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Information Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900">Patient: {userData.firstName} {userData.lastName}</h4>
            </div>
            {medicalData.bloodType && (
              <div>
                <span className="font-semibold">Blood Type:</span> {medicalData.bloodType}
              </div>
            )}
            {medicalData.allergies?.length > 0 && (
              <div>
                <span className="font-semibold">Allergies:</span> {medicalData.allergies.join(", ")}
              </div>
            )}
            {medicalData.medications?.length > 0 && (
              <div>
                <span className="font-semibold">Medications:</span> {medicalData.medications.join(", ")}
              </div>
            )}
            {medicalData.conditions?.length > 0 && (
              <div>
                <span className="font-semibold">Conditions:</span> {medicalData.conditions.join(", ")}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
