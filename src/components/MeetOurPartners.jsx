import { motion } from "framer-motion";
const partners = [
  {
    id: 1,
    name: "Tech Solutions",
    logo: "https://via.placeholder.com/100",
    description: "Innovative IT solutions for modern businesses.",
  },
  {
    id: 2,
    name: "Green Earth Co.",
    logo: "https://via.placeholder.com/100",
    description: "Sustainable energy solutions for a greener future.",
  },
  {
    id: 3,
    name: "HealthFirst",
    logo: "https://via.placeholder.com/100",
    description: "Advanced healthcare services and wellness programs.",
  },
  {
    id: 4,
    name: "EduWorld",
    logo: "https://via.placeholder.com/100",
    description: "Empowering education with cutting-edge technology.",
  },
];
const MeetOurPartners = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Partners
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We collaborate with industry leaders to bring you the best services
          and solutions.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {partner.name}
              </h3>
              <p className="text-gray-600 font-medium text-base mt-2">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurPartners;
