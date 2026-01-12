import { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";


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
            {/* Floating Bubble */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-23 right-3 h-14 z-[1000] bg-[#25D366] p-8 rounded-full shadow-2xl hover:scale-120 transition border-9 border-white text-green-450"
            >
                <div className="text-green-400 text-4xl"> <FaWhatsapp /> </div>
            </button>

            <a
                href="https://www.linkedin.com/in/bharathgoda/"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 h-13 w-14 flex items-center justify-center
             rounded-full bg-[#0A66C2] shadow-2xl hover:scale-110 transition
             border-4 border-white z-[1000]"
            >
                <FaLinkedin className="text-white text-3xl" />
            </a>

            {/* Popup */}
            {open && (
                <div className="fixed bottom-28 right-6 w-80 bg-white rounded-2xl shadow-2xl z-[1001] animate-in slide-in-from-bottom-4 duration-300">

                    {/* Header */}
                    <div className="p-4 border-b flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                            GB
                        </div>
                        <div>
                            <p className="font-semibold text-black">FrontendLines</p>
                            <p className="text-xs text-green-400">online</p>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="ml-auto text-gray-400 hover:text-green-300"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Message */}
                    <div className="p-4">
                        <div className="bg-black rounded-xl font-semibold  p-3 text-sm">
                            Hii 👋 <br /> How can I help you?
                        </div>
                    </div>

                    {/* Action */}
                    <div className="p-4 border-t">
                        <button
                            onClick={openWhatsApp}
                            className="w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:bg-[#20ba56]"
                        >
                            Chat with us
                        </button>
                        <p className="text-xs text-center text-black mt-2">
                            Powered by WhatsApp
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppChat;
