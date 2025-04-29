
import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SafetyButtonProps {
  onClick: () => void;
}

const SafetyButton: React.FC<SafetyButtonProps> = ({ onClick }) => {
  return (
    <Button 
      className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-black" 
      size="sm" 
      onClick={onClick}
      aria-label="Salir rápidamente de esta página"
    >
      <X className="mr-1 h-4 w-4" />
      Salida Rápida
    </Button>
  );
};

export default SafetyButton;
