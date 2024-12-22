import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
            <motion.section
                id="contact"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-8"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
                        Contact Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    📧
                                </div>
                                <div>
                                    <p className="text-gray-400">Email</p>
                                    <p className="font-medium">thathadevilalitha@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    📱
                                </div>
                                <div>
                                    <p className="text-gray-400">Phone</p>
                                    <p className="font-medium">+1 234 567 890</p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                />
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                />
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                            </div>
                            <div className="relative group">
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                ></textarea>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative group w-full py-3 px-6"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg px-6 py-3 text-white font-raleway">
                                    Send Message
                                </div>
                            </motion.button>
                        </form>
                    </div>
                </div>
            </motion.section>
    );
};

export default Contact;
