
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface AssessmentIntroProps {
  onStart: () => void;
}

const AssessmentIntro: React.FC<AssessmentIntroProps> = ({ onStart }) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-full flex justify-center mb-4">
          <Shield className="h-12 w-12 text-lavender-600" />
        </div>
        <CardTitle className="text-2xl">Evaluación de Bienestar</CardTitle>
        <CardDescription>
          Este cuestionario está diseñado para ayudarte a reflexionar sobre tu situación personal.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Te haremos una serie de preguntas sobre tu entorno y relaciones para proporcionar
          recursos adecuados según tus respuestas.
        </p>
        <p>
          Tus respuestas son confidenciales y puedes abandonar la evaluación en cualquier momento.
        </p>
        <div className="bg-muted p-4 rounded-md">
          <p className="text-sm font-medium">Información importante:</p>
          <ul className="text-sm list-disc pl-5 mt-2">
            <li>Esta evaluación no es un diagnóstico profesional</li>
            <li>Toma aproximadamente 5 minutos completarla</li>
            <li>Usa el botón "Salida Rápida" en la esquina si necesitas salir rápidamente</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onStart} 
          className="w-full bg-lavender-600 hover:bg-lavender-700"
        >
          Comenzar Evaluación
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AssessmentIntro;
