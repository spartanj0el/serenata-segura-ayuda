
import React, { useState, useEffect } from 'react';
import AssessmentIntro from './AssessmentIntro';
import AssessmentQuestion from './AssessmentQuestion';
import AssessmentResults from './AssessmentResults';
import ProgressBar from './ProgressBar';
import SafetyButton from './SafetyButton';
import assessmentQuestions, { Question } from '../data/assessmentQuestions';
import resources from '../data/resources';

type AssessmentStage = 'intro' | 'questions' | 'results';

const AssessmentChatbot: React.FC = () => {
  const [stage, setStage] = useState<AssessmentStage>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[id: number]: boolean}>({});
  const [riskScore, setRiskScore] = useState(0);
  const [maxPossibleScore, setMaxPossibleScore] = useState(0);

  // Calculate max possible risk score on load
  useEffect(() => {
    const totalRiskWeight = assessmentQuestions.reduce(
      (sum, question) => sum + question.riskWeight, 
      0
    );
    setMaxPossibleScore(totalRiskWeight);
  }, []);

  const handleStart = () => {
    setStage('questions');
  };

  const handleAnswer = (answer: boolean) => {
    const question = assessmentQuestions[currentQuestionIndex];
    
    // Save the answer
    setAnswers(prev => ({
      ...prev,
      [question.id]: answer
    }));

    // Update risk score if answered yes
    if (answer) {
      setRiskScore(prev => prev + question.riskWeight);
    }

    // Move to next question or to results if done
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStage('results');
    }
  };

  const handleRestart = () => {
    // Reset everything
    setStage('intro');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setRiskScore(0);
  };

  const handleSafeExit = () => {
    // Redirect to a neutral website like Google
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-50 to-white p-4 relative">
      <SafetyButton onClick={handleSafeExit} />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {stage === 'intro' && (
            <AssessmentIntro onStart={handleStart} />
          )}
          
          {stage === 'questions' && (
            <>
              <ProgressBar 
                current={currentQuestionIndex + 1} 
                total={assessmentQuestions.length} 
              />
              <AssessmentQuestion 
                question={assessmentQuestions[currentQuestionIndex].text}
                onAnswer={handleAnswer}
                className="fade-in"
              />
            </>
          )}
          
          {stage === 'results' && (
            <AssessmentResults 
              riskScore={riskScore}
              maxPossibleScore={maxPossibleScore}
              resources={resources}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentChatbot;
