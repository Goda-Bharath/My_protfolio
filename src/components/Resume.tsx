function Resume() {
    return (
        <section
            id="resume"
            className="relative w-full bg-gradient-to-br from-slate-900 via-black to-gray-950 py-24 px-4 md:px-8 overflow-hidden text-white min-h-screen"
        >
            
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl animate-pulse blur-xl"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-2xl animate-pulse blur-lg"></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl animate-bounce blur-xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Hero Title */}
                <div className="text-center mb-24 pt-12">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 pb-4 relative">
                        <span className="relative text-blue-400" data-aos="zoom-in">
                            RESUME
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg"></div>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        My technical journey as a Full Stack Developer, showcasing skills,
                        internship experience, and passion for building scalable applications
                    </p>
                </div>
                {/* Right Column */}
                <div className="relative" data-aos="zoom-in">
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-4 group max-w-md mx-auto">
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl border border-cyan-400/50 flex items-center justify-center">
                                <svg
                                    className="w-10 h-10 text-cyan-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 16v-8m0 8l-3-3m3 3l3-3"
                                    />
                                </svg>
                            </div>

                            <h2 className="text-3xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
                                Get My Resume
                            </h2>

                            <p className="text-gray-300 mb-10 leading-relaxed max-w-sm mx-auto">
                                Complete overview of my Full Stack Developer journey,
                                internship, technical skills, and projects
                            </p>

                            <a
                                href="/Bharath_Fullstack_Resume.pdf"
                                download
                                className="flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg  duration-300 hover:text-white"
                            >
                                ⬇ Download PDF
                            </a>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
                                    <div>📱 Mobile-friendly</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;