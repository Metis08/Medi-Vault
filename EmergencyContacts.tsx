import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Phone, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Contact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}

interface EmergencyContactsProps {
  contacts: Contact[];
  onUpdate: (contacts: Contact[]) => void;
}

export const EmergencyContacts = ({ contacts, onUpdate }: EmergencyContactsProps) => {
  const [newContact, setNewContact] = useState<Contact>({
    name: "",
    relationship: "",
    phone: "",
    email: ""
  });

  const relationships = [
    "Spouse", "Parent", "Child", "Sibling", "Friend", 
    "Doctor", "Other Family", "Caregiver", "Other"
  ];

  const addContact = () => {
    if (newContact.name && newContact.relationship && newContact.phone) {
      onUpdate([...contacts, newContact]);
      setNewContact({ name: "", relationship: "", phone: "", email: "" });
      toast({
        title: "Contact added",
        description: `${newContact.name} has been added to your emergency contacts.`,
      });
    } else {
      toast({
        title: "Missing information",
        description: "Please fill in name, relationship, and phone number.",
        variant: "destructive"
      });
    }
  };

  const removeContact = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    onUpdate(updatedContacts);
    toast({
      title: "Contact removed",
      description: "Emergency contact has been removed.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Add New Contact */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add Emergency Contact</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Full Name</Label>
              <Input
                id="contact-name"
                placeholder="John Smith"
                value={newContact.name}
                onChange={(e) => setNewContact({...newContact, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="relationship">Relationship</Label>
              <Select 
                value={newContact.relationship}
                onValueChange={(value) => setNewContact({...newContact, relationship: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  {relationships.map((rel) => (
                    <SelectItem key={rel} value={rel}>{rel}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone Number</Label>
              <Input
                id="contact-phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={newContact.phone}
                onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email (Optional)</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="john@example.com"
                value={newContact.email}
                onChange={(e) => setNewContact({...newContact, email: e.target.value})}
              />
            </div>
          </div>
          <Button onClick={addContact} className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
        </CardContent>
      </Card>

      {/* Existing Contacts */}
      {contacts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Your Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <User className="h-4 w-4 text-gray-600" />
                        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                        <span className="text-sm text-gray-500">({contact.relationship})</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{contact.phone}</span>
                      </div>
                      {contact.email && (
                        <div className="text-sm text-gray-600 mt-1">
                          {contact.email}
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeContact(index)}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {contacts.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <User className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Emergency Contacts Added
            </h3>
            <p className="text-gray-600 mb-4">
              Add your emergency contacts so healthcare providers can reach your loved ones quickly.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
