import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import AppHeader from './components/AppHeader';
import UserGreeting from './components/UserGreeting';
import AnalysisButton from './components/AnalysisButton';
import ProButton from './components/ProButton';
import AnalysisBox from './components/AnalysisBox';
import MessageDisplay from './components/MessageDisplay';

type AnalysisMode = 'batting' | 'bowling' | null;

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [analysisMode, setAnalysisMode] = useState<AnalysisMode>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showProMessage, setShowProMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartAnalysis = (mode: 'batting' | 'bowling') => {
    setAnalysisMode(mode);
    setShowAbout(false);
    setShowProMessage(false);
  };

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowProMessage(false);
    setAnalysisMode(null);
  };

  const handleShowProMessage = () => {
    setShowProMessage(true);
    setShowAbout(false);
    setAnalysisMode(null);
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-app-primary text-foreground">
      <AppHeader />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <UserGreeting />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <AnalysisButton
            emoji="🏏"
            label="बैटिंग बायोमैकेनिक्स"
            onClick={() => handleStartAnalysis('batting')}
          />
          <AnalysisButton
            emoji="⚾"
            label="बॉलिंग बायोमैकेनिक्स"
            onClick={() => handleStartAnalysis('bowling')}
          />
          <AnalysisButton
            emoji="ℹ️"
            label="अबाउट सेक्शन"
            onClick={handleShowAbout}
          />
          <ProButton onClick={handleShowProMessage} />
        </div>

        {showAbout && (
          <MessageDisplay
            title="अबाउट"
            message="यह ऐप मेरे पिता नरेंद्र यादव के सम्मान और क्रिकेट की बारीकियों को समझने के लिए बनाया गया है।"
            onClose={() => setShowAbout(false)}
          />
        )}

        {showProMessage && (
          <MessageDisplay
            title="प्रो फीचर"
            message="जल्द ही आप सीधे एक्सपर्ट कोच से बात कर पाएंगे!"
            onClose={() => setShowProMessage(false)}
          />
        )}

        {analysisMode && (
          <AnalysisBox
            mode={analysisMode}
            onClose={() => setAnalysisMode(null)}
          />
        )}
      </main>

      <footer className="mt-16 py-6 border-t border-app-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} नरेंद्र बायोमैकेनिक्स क्रिकेट एनालिसिस</p>
          <p className="mt-2">
            Built with <span className="text-app-accent">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'cricket-biomechanics')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-app-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
