import { useState } from 'react';
import { X, Upload, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AnalysisBoxProps {
  mode: 'batting' | 'bowling';
  onClose: () => void;
}

function AnalysisBox({ mode, onClose }: AnalysisBoxProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 2000);
    }
  };

  const modeText = mode === 'batting' ? 'बैटिंग' : 'बॉलिंग';

  return (
    <div className="mt-8 bg-app-header rounded-[10px] p-6 border-2 border-app-accent/30 shadow-xl animate-slide-in">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-app-accent mb-2">
            {modeText} एनालिसिस शुरू...
          </h3>
          <p className="text-foreground/80">
            अपना वीडियो अपलोड करें (AI स्कैनिंग चालू होगी)
          </p>
        </div>
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="hover:bg-app-accent/20 text-foreground"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-6">
        <div className="border-2 border-dashed border-app-accent/40 rounded-lg p-8 text-center hover:border-app-accent/60 transition-colors">
          <Video className="h-16 w-16 mx-auto mb-4 text-app-accent" />
          <Label
            htmlFor="video-upload"
            className="cursor-pointer text-foreground hover:text-app-accent transition-colors"
          >
            <div className="space-y-2">
              <p className="text-lg font-semibold">वीडियो फ़ाइल चुनें</p>
              <p className="text-sm text-muted-foreground">
                MP4, MOV, AVI (अधिकतम 100MB)
              </p>
            </div>
          </Label>
          <Input
            id="video-upload"
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {selectedFile && (
          <div className="bg-app-primary/50 rounded-lg p-4 border border-app-accent/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Video className="h-8 w-8 text-app-accent" />
                <div>
                  <p className="font-semibold text-foreground">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setSelectedFile(null)}
                variant="ghost"
                size="icon"
                className="hover:bg-destructive/20 text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        <Button
          onClick={handleAnalyze}
          disabled={!selectedFile || isAnalyzing}
          className="w-full py-6 text-lg bg-app-accent hover:bg-app-accent/90 text-app-primary font-bold shadow-lg hover:shadow-app-accent/30 transition-all duration-300"
          size="lg"
        >
          {isAnalyzing ? (
            <>
              <span className="animate-spin mr-3">⚙️</span>
              AI स्कैनिंग चल रही है...
            </>
          ) : (
            <>
              <Upload className="mr-3 h-5 w-5" />
              {modeText} एनालिसिस शुरू करें
            </>
          )}
        </Button>

        {isAnalyzing && (
          <div className="bg-app-primary/50 rounded-lg p-4 border border-app-accent/20 animate-pulse">
            <p className="text-center text-app-accent font-semibold">
              🤖 AI आपके {modeText} तकनीक का विश्लेषण कर रहा है...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalysisBox;
