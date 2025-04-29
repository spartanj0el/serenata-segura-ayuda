
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AssessmentQuestionProps {
  question: string;
  onAnswer: (answer: boolean) => void;
  className?: string;
}

const AssessmentQuestion: React.FC<AssessmentQuestionProps> = ({
  question,
  onAnswer,
  className,
}) => {
  return (
    <Card className={cn("w-full max-w-md mx-auto", className)}>
      <CardContent className="pt-6">
        <p className="text-lg mb-6 text-center">{question}</p>
        <div className="flex justify-center gap-4">
          <Button 
            onClick={() => onAnswer(true)}
            className="bg-lavender-600 hover:bg-lavender-700"
          >
            Sí
          </Button>
          <Button 
            onClick={() => onAnswer(false)}
            variant="outline"
          >
            No
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssessmentQuestion;
