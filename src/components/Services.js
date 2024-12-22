import { motion } from "framer-motion";

const Services = () => {
    const services = [
        {
            title: "MERN Stack Development",
            description: "Developing robust and scalable web applications using React, Node.js, and MongoDB.",
            icon: "💻",
        },
        {
            title: "Data Science",
            description: "Analyzing complex datasets and creating insightful visualizations using Python and Tableau.",
            icon: "📊",
        },
        {
            title: "Web Design",
            description: "Designing responsive and visually appealing websites using HTML, CSS, and Tailwind CSS.",
            icon: "🎨",
        },
    ];

    return (
        <motion.div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12"
                >
                    My Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition-all duration-300"></div>
                            <div className="relative bg-gray-900 p-8 rounded-xl h-full border border-gray-800 hover:border-purple-500 transition-all duration-300">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Services;
