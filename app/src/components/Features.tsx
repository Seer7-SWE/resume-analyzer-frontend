import { motion } from "framer-motion";

const Features = () => {
  const featureData = [
    { title: "AI-Powered Analysis", description: "Boost your resume with cutting-edge AI analysis." },
    { title: "Keyword Matching", description: "Supercharge Your Resume with Next-Gen AI-Driven Keyword Optimization." },
    { title: "Instant Feedback", description: "Instant Insights, Real-Time Impact – Get Feedback That Elevates Your Resume." }
  ];

  return (
    <section id="features" className="py-20 px-10 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900">Why Use ResumeAnalyzer?</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="max-w-sm p-8 border rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-blue-600">{feature.title}</h3>
            <p className="mt-3 text-gray-700">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
