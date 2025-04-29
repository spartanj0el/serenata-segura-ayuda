
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  phoneNumber?: string;
  isEmergency?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  phoneNumber,
  isEmergency = false,
}) => {
  return (
    <Card className={`mb-4 ${isEmergency ? 'border-destructive shadow-md' : ''}`}>
      <CardHeader className={isEmergency ? 'bg-destructive/10' : ''}>
        <CardTitle className={isEmergency ? 'text-destructive' : ''}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {phoneNumber && (
          <Button 
            className={`w-full ${isEmergency ? 'bg-destructive hover:bg-destructive/90' : ''}`}
            onClick={() => window.open(`tel:${phoneNumber.replace(/\D/g, '')}`)}
          >
            <Phone className="mr-2 h-4 w-4" />
            Llamar {phoneNumber}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
