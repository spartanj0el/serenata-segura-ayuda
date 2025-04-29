import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResourceCard from './ResourceCard';
import { Resource, faqItems } from '../data/resources';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InfoIcon } from 'lucide-react';

interface AssessmentResultsProps {
  riskScore: number;
  maxPossibleScore: number;
  resources: Resource[];
  onRestart: () => void;
}

const AssessmentResults: React.FC<AssessmentResultsProps> = ({
  riskScore,
  maxPossibleScore,
  resources,
  onRestart
}) => {
  // Calculate risk level
  const riskPercentage = (riskScore / maxPossibleScore) * 100;
  let riskLevel: 'low' | 'medium' | 'high';
  let message: string;

  if (riskPercentage < 30) {
    riskLevel = 'low';
    message = "Basado en tus respuestas, parece que tu situación presenta un nivel bajo de indicadores de preocupación. Sin embargo, es importante mantener relaciones saludables y estar atento a cambios.";
  } else if (riskPercentage < 60) {
    riskLevel = 'medium';
    message = "Tus respuestas indican algunos patrones que podrían ser preocupantes. Te recomendamos revisar los recursos proporcionados y considerar hablar con un profesional sobre tu situación.";
  } else {
    riskLevel = 'high';
    message = "Basado en tus respuestas, hay varios indicadores de una situación potencialmente peligrosa. Te recomendamos fuertemente que consideres los recursos de emergencia proporcionados y busques apoyo profesional lo antes posible.";
  }

  // Filter resources based on risk level
  const relevantResources = resources.filter(resource => 
    resource.riskLevel === riskLevel || resource.riskLevel === 'all'
  );

  // Emergency resources should always be shown for medium and high risk
  const emergencyResources = riskLevel !== 'low' 
    ? resources.filter(resource => resource.isEmergency) 
    : [];

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Resultados de tu Evaluación</CardTitle>
          <CardDescription>
            Gracias por completar la evaluación
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={`p-4 rounded-md ${
            riskLevel === 'high' ? 'bg-red-50 text-red-800' : 
            riskLevel === 'medium' ? 'bg-yellow-50 text-yellow-800' : 
            'bg-green-50 text-green-800'
          }`}>
            <p className="font-medium mb-2">
              {riskLevel === 'high' ? 'Nivel de riesgo: Alto' : 
               riskLevel === 'medium' ? 'Nivel de riesgo: Medio' : 
               'Nivel de riesgo: Bajo'}
            </p>
            <p>{message}</p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <InfoIcon className="h-4 w-4" />
            <p>Esta evaluación es una herramienta informativa, no un diagnóstico profesional</p>
          </div>
        </CardContent>
      </Card>

      <h3 className="text-xl font-semibold mb-3">Recursos Recomendados</h3>
      
      {/* Emergency Resources first if medium or high risk */}
      {emergencyResources.map((resource) => (
        <ResourceCard
          key={resource.id}
          title={resource.title}
          description={resource.description}
          phoneNumber={resource.phoneNumber}
          isEmergency={resource.isEmergency}
        />
      ))}
      
      {/* Other relevant resources */}
      {relevantResources.map((resource) => (
        <ResourceCard
          key={resource.id}
          title={resource.title}
          description={resource.description}
          phoneNumber={resource.phoneNumber}
          isEmergency={resource.isEmergency}
        />
      ))}

      {/* FAQs - always show these */}
      <Card className="mb-6 mt-8">
        <CardHeader>
          <CardTitle>Preguntas Frecuentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Button 
        onClick={onRestart} 
        className="w-full mt-4 mb-10 bg-lavender-600 hover:bg-lavender-700"
      >
        Reiniciar Evaluación
      </Button>
    </div>
  );
};

export default AssessmentResults;
