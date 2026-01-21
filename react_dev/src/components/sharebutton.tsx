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
        fixed top-66 right-6 z-[1000] 
        h-15 w-18 flex items-center justify-center
        rounded-full bg-green-600
        shadow-2xl border-4 border-white
        hover:scale-110 transition-all duration-300
        active:scale-95
        text-white
      "
            aria-label="Share Portfolio"
        >
            {/* SHARE ICON */}
            <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
                strokeWidth="4"
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
