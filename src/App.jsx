import { useState } from "react";

// Course data with added image paths
const pricingPlans = [
  {
    id: 1,
    name: "Product Design (UI/UX)",
    price: 149500,
    duration: "10 Weeks",
    startDate: "January 29th, 2025",
    image: "/product-design.png",
  },
  {
    id: 2,
    name: "Data Analysis",
    price: 170500,
    duration: "12 Weeks",
    startDate: "January 29th, 2025",
    image: "/data-analytics.png",
  },
  {
    id: 3,
    name: "Frontend Coding",
    price: 199500,
    duration: "12 Weeks",
    startDate: "January 13th, 2025",
    image: "/coding-v2.png",
  },
  {
    id: 4,
    name: "Backend Coding",
    price: 199500,
    duration: "14 Weeks",
    startDate: "January 13th, 2025",
    image: "/coding-virtual.png",
  },
  {
    id: 5,
    name: "Cybersecurity",
    price: 199500,
    duration: "16 Weeks",
    startDate: "January 17th, 2025",
    image: "/pd-4.png",
  },
  {
    id: 6,
    name: "Product Management",
    price: 149500,
    duration: "10 Weeks",
    startDate: "January 20th, 2025",
    image: "/product-des.png",
  },
  {
    id: 7,
    name: "Fullstack Development",
    price: 399500,
    duration: "24 Weeks",
    startDate: "January 13th, 2025",
    image: "/coding-v2.png",
  },
  {
    id: 8,
    name: "Python Fullstack Coding",
    price: 399500,
    duration: "28 Weeks",
    startDate: "January 17th, 2025",
    image: "/malhub-python-coding.png",
  },
  {
    id: 9,
    name: "Data Science",
    price: 250000,
    duration: "20 Weeks",
    startDate: "January 20th, 2025",
    image: "/data-analytics1.png",
  },
];

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
  });

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
    setError("");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.fullName) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      try {
        const paystackOptions = {
          key: process.env.PAYSTACK_PUBLIC_KEY,
          email: formData.email,
          amount: selectedPlan.price * 100, // Paystack requires amount in kobo
          ref: `${selectedPlan.name}-${Date.now()}`,
          metadata: {
            fullName: formData.fullName,
            courseName: selectedPlan.name,
          },
          callback: (response) => {
            console.log("Payment successful:", response);
            setLoading(false);
            handleCloseModal();
            // You would typically show a success message or redirect here
          },
          onClose: () => {
            console.log("Payment cancelled");
            setLoading(false);
          },
        };

        const paystack = new window.PaystackPop();
        paystack.newTransaction(paystackOptions);
      } catch (err) {
        setError("Payment service unavailable. Please try again later.");
        setLoading(false);
      }
    }, 500);
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
              className="rounded-lg shadow-lg overflow-hidden h-64 relative group"
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
                      ₦{plan.price}
                    </span>
                    <span className="ml-2 text-sm text-gray-300">
                      / {plan.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-300">
                    Starts: {plan.startDate}
                  </p>
                </div>

                <button
                  onClick={() => handleOpenModal(plan)}
                  className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={handleCloseModal}
            ></div>

            {/* Modal panel */}
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Complete Your Payment
                    </h3>
                    <div className="mt-2">
                      <div className="mb-4 p-3 bg-blue-50 rounded-md">
                        <p className="text-sm text-gray-700">
                          Course:{" "}
                          <span className="font-medium">
                            {selectedPlan.name}
                          </span>
                        </p>
                        <p className="text-sm text-gray-700">
                          Price:{" "}
                          <span className="font-medium">
                            ₦{selectedPlan.price}
                          </span>
                        </p>
                        <p className="text-sm text-gray-700">
                          Duration:{" "}
                          <span className="font-medium">
                            {selectedPlan.duration}
                          </span>
                        </p>
                        <p className="text-sm text-gray-700">
                          Start Date:{" "}
                          <span className="font-medium">
                            {selectedPlan.startDate}
                          </span>
                        </p>
                      </div>

                      <form onSubmit={handlePayment}>
                        <div className="mb-4">
                          <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                          />
                        </div>

                        {error && (
                          <div className="mb-4 p-2 text-sm text-red-700 bg-red-50 rounded-md border-l-4 border-red-400">
                            {error}
                          </div>
                        )}

                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3">
                          <button
                            type="button"
                            onClick={handleCloseModal}
                            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                          >
                            {loading ? (
                              <span className="flex items-center">
                                <svg
                                  className="w-4 h-4 mr-2 animate-spin"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Processing...
                              </span>
                            ) : (
                              "Proceed to Payment"
                            )}
                          </button>
                        </div>
                      </form>
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
