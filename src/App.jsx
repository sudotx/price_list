import { useState } from "react";

// Course data with added image paths, descriptions, and features
const pricingPlans = [
  {
    id: 1,
    name: "Product Design (UI/UX)",
    price: 149500,
    duration: "10 Weeks",
    startDate: "January 29th, 2025",
    image:
      "https://res.cloudinary.com/dma1c8i6n/image/upload/f_auto,q_auto/rvqppfvqkd8dgpozqxsk",
    description:
      "Learn the fundamentals of UI/UX design, including wireframing, prototyping, and user testing. Master Figma and Adobe XD while building real-world projects.",
    features: [
      "User-centered design principles",
      "Wireframing and prototyping",
      "Figma and Adobe XD",
      "User testing and validation",
      "Responsive design",
      "Design systems and components",
    ],
  },
  {
    id: 2,
    name: "Data Analysis",
    price: 170500,
    duration: "12 Weeks",
    startDate: "January 29th, 2025",
    image:
      "https://res.cloudinary.com/dma1c8i6n/image/upload/f_auto,q_auto/vmnxivzx6mnzwxvue56g",
    description:
      "Master data analysis techniques using Python, SQL, and Excel. Learn to clean, analyze, and visualize data for business insights.",
    features: [
      "Python for data analysis",
      "SQL database management",
      "Excel advanced functions",
      "Data cleaning and preprocessing",
      "Data visualization",
      "Statistical analysis",
    ],
  },
  {
    id: 3,
    name: "Frontend Coding",
    price: 199500,
    duration: "12 Weeks",
    startDate: "January 13th, 2025",
    image:
      "https://res.cloudinary.com/dma1c8i6n/image/upload/f_auto,q_auto/tgmxfrgxjbdtuajjtx1c",
    description:
      "Become a proficient frontend developer with HTML, CSS, JavaScript, and React. Build responsive, interactive web applications.",
    features: [
      "HTML5 and CSS3",
      "JavaScript ES6+",
      "React.js fundamentals",
      "Responsive design",
      "CSS frameworks (Tailwind)",
      "API integration",
    ],
  },
  {
    id: 4,
    name: "Backend Coding",
    price: 199500,
    duration: "14 Weeks",
    startDate: "January 13th, 2025",
    image:
      "https://res.cloudinary.com/dma1c8i6n/image/upload/f_auto,q_auto/o3q3iifdmxtx2zfoanuh",
    description:
      "Learn to build robust backend systems using Node.js, Express, and MongoDB. Master server-side development and database management.",
    features: [
      "Node.js and Express",
      "MongoDB database",
      "RESTful APIs",
      "Authentication",
      "Server optimization",
      "Cloud deployment",
    ],
  },
  {
    id: 5,
    name: "Cybersecurity",
    price: 199500,
    duration: "16 Weeks",
    startDate: "January 17th, 2025",
    image:
      "https://res.cloudinary.com/dma1c8i6n/image/upload/f_auto,q_auto/cjoxs9niewvi9kmux6jb",
    description:
      "Learn to protect digital assets and networks. Master cybersecurity fundamentals, ethical hacking, and security best practices.",
    features: [
      "Network security",
      "Ethical hacking",
      "Vulnerability assessment",
      "Security protocols",
      "Incident response",
      "Compliance standards",
    ],
  },
  {
    id: 6,
    name: "Product Management",
    price: 149500,
    duration: "10 Weeks",
    startDate: "January 20th, 2025",
    image:
      "https://res.cloudinary.com/dma1c8i6n/image/upload/f_auto,q_auto/rsqkpsqrgdtiylhfzcmg",
    description:
      "Learn to lead product development from concept to launch. Master product strategy, user research, and agile methodologies.",
    features: [
      "Product strategy",
      "User research",
      "Agile methodologies",
      "Product roadmap",
      "Stakeholder management",
      "MVP development",
    ],
  },
  {
    id: 7,
    name: "Fullstack Development",
    price: 399500,
    duration: "24 Weeks",
    startDate: "January 13th, 2025",
    image:
      "https://res.cloudinary.com/dma1c8i6n/image/upload/f_auto,q_auto/g7roml50xxrfzroej6fz",
    description:
      "Become a fullstack developer with comprehensive knowledge of frontend, backend, and database technologies. Build complete web applications.",
    features: [
      "Frontend development (React)",
      "Backend development (Node.js)",
      "Database management (MongoDB)",
      "API development",
      "Authentication",
      "Deployment strategies",
    ],
  },
  {
    id: 8,
    name: "Python Fullstack Coding",
    price: 399500,
    duration: "28 Weeks",
    startDate: "January 17th, 2025",
    image:
      "https://res.cloudinary.com/dma1c8i6n/image/upload/f_auto,q_auto/owupbnootbqz3dfvvmcu",
    description:
      "Master Python fullstack development with Django and FastAPI. Learn to build scalable web applications from scratch.",
    features: [
      "Python programming",
      "Django framework",
      "FastAPI development",
      "Database integration",
      "RESTful APIs",
      "Deployment strategies",
    ],
  },
  {
    id: 9,
    name: "Data Science",
    price: 250000,
    duration: "20 Weeks",
    startDate: "January 20th, 2025",
    image:
      "https://res.cloudinary.com/dma1c8i6n/image/upload/f_auto,q_auto/mdssvyvdtudurcy3ptfm",
    description:
      "Learn data science fundamentals, machine learning, and statistical analysis. Master Python libraries for data science.",
    features: [
      "Python for data science",
      "Machine learning",
      "Statistical analysis",
      "Data visualization",
      "Big data processing",
      "Model deployment",
    ],
  },
];

function App() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const handleOpenDetails = (plan) => {
    setCurrentCourse(plan);
    setShowDetailsModal(true);
  };

  const handleCloseDetails = () => {
    setShowDetailsModal(false);
    setCurrentCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Explore Our Physical Courses
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-lg shadow-lg overflow-hidden h-64 relative group cursor-pointer"
              onClick={() => handleOpenDetails(plan)}
            >
              {/* Background Image */}
              <img
                src={plan.image}
                alt={plan.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl text-white mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">
                      ₦{plan.price.toLocaleString()}
                    </span>
                    <span className="ml-2 text-sm text-gray-300">
                      / {plan.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-300">
                    Starts: {plan.startDate}
                  </p>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {showDetailsModal && currentCourse && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={handleCloseDetails}
            ></div>
            {/* Modal panel */}
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                      onClick={handleCloseDetails}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {currentCourse.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Course Image */}
                      <div className="relative h-64">
                        <img
                          src={currentCourse.image}
                          alt={currentCourse.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      {/* Course Details */}
                      <div>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Course Overview
                          </h4>
                          <p className="text-gray-600">
                            {currentCourse.description}
                          </p>
                        </div>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Course Details
                          </h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-gray-600">
                              <span>Price:</span>
                              <span className="font-medium text-blue-600">
                                ₦{currentCourse.price.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                              <span>Duration:</span>
                              <span className="font-medium">
                                {currentCourse.duration}
                              </span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                              <span>Start Date:</span>
                              <span className="font-medium">
                                {currentCourse.startDate}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            What You'll Learn
                          </h4>
                          <ul className="list-disc list-inside text-gray-600">
                            {currentCourse.features.map((feature, index) => (
                              <li key={index} className="mb-1">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
