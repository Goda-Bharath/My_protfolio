import { useState, useEffect } from "react";

const WhatsAppChat = () => {
    const [open, setOpen] = useState(false);
    const phoneNumber = "919346352287";
    const openWhatsApp = () => {
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hi! How can I help you?"
            )}`,
            "_blank"
        );
        setOpen(false);
    };

    return (
        <>
            {/* WhatsApp Bubble - SVG Icon */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-22 right-6 z-[100] h-16 w-19 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white flex items-center justify-center active:scale-95"
                aria-label="Open WhatsApp Chat"
            >
                <svg className="w-21 h-18" viewBox="0 0 24 25" fill="#0eff36">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
            </button>

            {/* LinkedIn Bubble - SVG Icon */}
            <a
                href="https://www.linkedin.com/in/bharathgoda/"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-8 z-[1000] h-13 w-13 flex items-center justify-center rounded-full bg-[#0A66C2] shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white active:scale-95"
                aria-label="Visit LinkedIn Profile"
            >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </a>

     

            {/* Rest of your popup code stays exactly the same */}
            {open && (
                <div className="fixed bottom-35 right-6 w-120 bg-white rounded-2xl shadow-2xl z-[1001] border border-gray-200 animate-in slide-in-from-bottom-2 duration-300 max-h-[500px]">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                            GB
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">FrontendLines</p>
                            <p className="text-xs text-green-500 font-medium">online</p>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="ml-auto p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200 flex items-center justify-center w-8 h-8"
                            aria-label="Close chat"
                        >
                            ×
                        </button>
                    </div>

                    {/* Message */}
                    <div className="p-5 pb-2">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                                GB
                            </div>
                            <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-[85%]">
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Hii 👋<br />How can I help you?
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="p-4 border-t border-gray-200">
                        <button
                            onClick={openWhatsApp}
                            className="w-full bg-[#25D366] text-white py-3.5 px-4 rounded-xl font-semibold text-sm hover:bg-[#20ba56] active:scale-[0.98] transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149..." />
                            </svg>
                            <span>Chat with us</span>
                        </button>
                        <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921..." />
                            </svg>
                            Powered by WhatsApp
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppChat;
