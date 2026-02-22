function SplashScreen() {
  return (
    <div className="min-h-screen bg-app-primary flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-bold text-foreground animate-fade-in mb-4">
        रोहित नरेंद्र यादव
      </h1>
      <p className="text-app-accent text-xl tracking-[3px] animate-fade-in-delay">
        प्रस्तुत करते हैं
      </p>
    </div>
  );
}

export default SplashScreen;
