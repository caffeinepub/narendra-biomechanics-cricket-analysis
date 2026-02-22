import { Button } from '@/components/ui/button';

interface ProButtonProps {
  onClick: () => void;
}

function ProButton({ onClick }: ProButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="h-auto py-6 px-6 text-lg bg-gradient-to-r from-app-pro-start to-app-pro-end hover:from-app-pro-start/90 hover:to-app-pro-end/90 border-2 border-app-pro-border hover:border-app-pro-border/80 transition-all duration-300 shadow-lg hover:shadow-app-pro-border/30 relative overflow-hidden group"
      size="lg"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
      <span className="mr-3 text-2xl relative z-10">⭐</span>
      <span className="font-semibold relative z-10">प्रो फीचर (Live Coach)</span>
    </Button>
  );
}

export default ProButton;
