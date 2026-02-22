import { Button } from '@/components/ui/button';

interface AnalysisButtonProps {
  emoji: string;
  label: string;
  onClick: () => void;
}

function AnalysisButton({ emoji, label, onClick }: AnalysisButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="h-auto py-6 px-6 text-lg bg-app-button hover:bg-app-button-hover border-2 border-app-accent/30 hover:border-app-accent transition-all duration-300 shadow-lg hover:shadow-app-accent/20"
      size="lg"
    >
      <span className="mr-3 text-2xl">{emoji}</span>
      <span className="font-semibold">{label}</span>
    </Button>
  );
}

export default AnalysisButton;
