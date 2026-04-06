const ShareButton = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Portfolio",
          text: "Check out my portfolio 🚀",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="
        fixed bottom-58 right-6 z-[1000]    
    h-16 w-16                            
    sm:h-16 sm:w-16                        
    md:h-20 md:w-20                         
    flex items-center justify-center
    rounded-full bg-green-600
    shadow-2xl border-1 border-white
    hover:scale-110 transition-all duration-300
    active:scale-95
    text-white
  " aria-label="Share Portfolio"
    >
      {/* SHARE ICON */}
      <svg
        className="w-6 h-6 stroke-white"
        viewBox="0 0 24 24"
        fill=""
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    </button>
  );
};

export default ShareButton;
