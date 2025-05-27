
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ProfileFormProps {
  data: any;
  onUpdate: (data: any) => void;
}

export const ProfileForm = ({ data, onUpdate }: ProfileFormProps) => {
  const [newAllergy, setNewAllergy] = useState("");
  const [newMedication, setNewMedication] = useState("");
  const [newCondition, setNewCondition] = useState("");

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const addItem = (type: string, value: string, setter: (value: string) => void) => {
    if (value.trim()) {
      const updated = {
        ...data,
        [type]: [...(data[type] || []), value.trim()]
      };
      onUpdate(updated);
      setter("");
      toast({
        title: "Added successfully",
        description: `${value} has been added to your ${type}.`,
      });
    }
  };

  const removeItem = (type: string, index: number) => {
    const updated = {
      ...data,
      [type]: data[type].filter((_: any, i: number) => i !== index)
    };
    onUpdate(updated);
  };

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your medical profile has been saved successfully.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Basic Medical Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bloodType">Blood Type</Label>
              <Select 
                value={data.bloodType} 
                onValueChange={(value) => onUpdate({...data, bloodType: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select blood type" />
                </SelectTrigger>
                <SelectContent>
                  {bloodTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (lbs)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="150"
                value={data.weight || ""}
                onChange={(e) => onUpdate({...data, weight: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Allergies */}
      <Card>
        <CardHeader>
          <CardTitle>Allergies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Add allergy (e.g., Penicillin, Nuts)"
              value={newAllergy}
              onChange={(e) => setNewAllergy(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem('allergies', newAllergy, setNewAllergy)}
            />
            <Button 
              onClick={() => addItem('allergies', newAllergy, setNewAllergy)}
              size="sm"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.allergies?.map((allergy: string, index: number) => (
              <Badge key={index} variant="destructive" className="flex items-center space-x-1">
                <span>{allergy}</span>
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => removeItem('allergies', index)}
                />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Medications */}
      <Card>
        <CardHeader>
          <CardTitle>Current Medications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Add medication (e.g., Aspirin 81mg daily)"
              value={newMedication}
              onChange={(e) => setNewMedication(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem('medications', newMedication, setNewMedication)}
            />
            <Button 
              onClick={() => addItem('medications', newMedication, setNewMedication)}
              size="sm"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.medications?.map((medication: string, index: number) => (
              <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                <span>{medication}</span>
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => removeItem('medications', index)}
                />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Medical Conditions */}
      <Card>
        <CardHeader>
          <CardTitle>Medical Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Add condition (e.g., Diabetes Type 2, Hypertension)"
              value={newCondition}
              onChange={(e) => setNewCondition(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem('conditions', newCondition, setNewCondition)}
            />
            <Button 
              onClick={() => addItem('conditions', newCondition, setNewCondition)}
              size="sm"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.conditions?.map((condition: string, index: number) => (
              <Badge key={index} variant="outline" className="flex items-center space-x-1">
                <span>{condition}</span>
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => removeItem('conditions', index)}
                />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Medical Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Any additional medical information, special instructions, or notes for healthcare providers..."
            value={data.notes || ""}
            onChange={(e) => onUpdate({...data, notes: e.target.value})}
            rows={4}
          />
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-700">
        Save Medical Profile
      </Button>
    </div>
  );
};
