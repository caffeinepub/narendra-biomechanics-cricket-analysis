import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MessageDisplayProps {
  title: string;
  message: string;
  onClose: () => void;
}

function MessageDisplay({ title, message, onClose }: MessageDisplayProps) {
  return (
    <div className="mt-8 bg-app-header rounded-[10px] p-6 border-2 border-app-accent/30 shadow-xl animate-slide-in">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-app-accent">{title}</h3>
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="hover:bg-app-accent/20 text-foreground"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      <p className="text-foreground leading-relaxed">{message}</p>
    </div>
  );
}

export default MessageDisplay;
