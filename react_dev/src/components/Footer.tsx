import { useRef } from "react";
import emailjs from "emailjs-com";

function Footer() {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cenjq6g",      // ✔ your service ID
        "template_tra2de8",     // ✔ your template ID
        form.current!,        // ✔ FORM ELEMENT
        "P8t_wz_TASMEHDUr8"   // ✔ public key
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Error sending message: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen  flex justify-center items-center px-6 py-20" style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/blue-purple-cloth-with-pattern-dots-it_675204-3378.jpg')",    
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }} 
    >
      <div className="w-full max-w-7xl p-[2px] rounded-3xl" data-aos="zoom-in">
        <div className="rounded-3xl p-10 md:p-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl font-bold text-blue-500 mb-3">
                  Contact Me
                </h2>
                <h1 className="text-6xl md:text-7xl font-black leading-none">
                  Get in
                </h1>
                <h1 className="text-6xl md:text-7xl italic font-light -mt-4">
                  Touch
                </h1>
              </div>

              <div className="space-y-6 text-sm">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=godabharath2004@gmail.com&su=Support&body=Hello"
                  className="block cursor-pointer"
                >
                  <div className="space-y-1">
                    <p className="font-semibold opacity-70">Email Support</p>
                    <p className="text-blue-500 hover:underline">
                      godabharath2004@gmail.com
                    </p>
                  </div>
                </a>
                <div>
                  <p className="font-semibold opacity-70">Live Chat</p>
                  <p>
                    Available 24/7 <br /> via in-app chat
                  </p>
                </div>

                <div>
                  <p className="font-semibold opacity-70">Phone Support</p>
                  <p>
                    9346352287 <br />(Mon–Fri)
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="https://github.com" target="_blank">
                    <button className="px-6 py-3 rounded-full bg-blue-700 text-white shadow-lg shadow-blue-500/50 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_20px_#0ea5e9] hover:bg-gradient-to-r from-blue-500 to-indigo-600">
                      GitHub
                    </button>
                  </a>

                  <a href="https://linkedin.com" target="_blank">
                    <button className="px-6 py-3 rounded-full bg-blue-700 text-white shadow-lg shadow-blue-500/50 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_20px_#0ea5e9] hover:bg-gradient-to-r from-blue-500 to-indigo-600">
                      LinkedIn
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm opacity-80">Full Name</label>
                  <div className="flex items-center mt-2 border border-white/20 rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm">
                    <span className="mr-3 text-gray-300">👤</span>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John David"
                      className="w-full bg-transparent outline-none placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm opacity-80">Email</label>
                  <div className="flex items-center mt-2 border border-white/20 rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm">
                    <span className="mr-3 text-gray-300">✉️</span>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="example@gmail.com"
                      className="w-full bg-transparent outline-none placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm opacity-80">Subject</label>
                <div className="flex items-center mt-2 border border-white/20 rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Technical issue"
                    className="w-full bg-transparent outline-none placeholder-gray-400"
                    required
                  />
                  <span className="text-gray-300 text-lg">▾</span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm opacity-80">Message</label>
                <div className="relative mt-2">
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full border border-white/20 rounded-2xl p-4 pr-10 bg-white/10 backdrop-blur-sm outline-none placeholder-gray-400"
                    required
                  ></textarea>
                  <span className="absolute right-4 bottom-4 text-gray-300">
                    ✎
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 font-semibold rounded-full py-3 mt-4 shadow-lg transition-all hover:bg-blue-700"
              >
                Submit ↗
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
