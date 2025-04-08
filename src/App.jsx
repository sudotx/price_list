import { useState } from "react";
import "./App.css";

const pricingPlans = [
  {
    id: 1,
    name: "Product Design (UI/UX)",
    price: 999,
    duration: "10 Weeks",
    startDate: "January 29th, 2025",
  },
  {
    id: 2,
    name: "Data Analysis",
    price: 1299,
    duration: "12 Weeks",
    startDate: "January 29th, 2025",
  },
  {
    id: 3,
    name: "Frontend Coding",
    price: 1299,
    duration: "12 Weeks",
    startDate: "January 13th, 2025",
  },
  {
    id: 4,
    name: "Backend Coding",
    price: 1499,
    duration: "14 Weeks",
    startDate: "January 13th, 2025",
  },
  {
    id: 5,
    name: "Cybersecurity",
    price: 1699,
    duration: "16 Weeks",
    startDate: "January 17th, 2025",
  },
  {
    id: 6,
    name: "Product Management",
    price: 999,
    duration: "10 Weeks",
    startDate: "January 20th, 2025",
  },
  {
    id: 7,
    name: "Fullstack Development",
    price: 2499,
    duration: "24 Weeks",
    startDate: "January 13th, 2025",
  },
  {
    id: 8,
    name: "Python Fullstack Coding",
    price: 2799,
    duration: "28 Weeks",
    startDate: "January 17th, 2025",
  },
  {
    id: 9,
    name: "Data Science",
    price: 1999,
    duration: "20 Weeks",
    startDate: "January 20th, 2025",
  },
];

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = (plan) => {
    const paystackOptions = {
      key: process.env.PAYSTACK_PUBLIC_KEY, // Replace with your Paystack public key
      email: "customer@example.com", // Replace with actual customer email
      amount: plan.price * 100, // Paystack requires amount in kobo (multiply by 100)
      ref: `${plan.name}-${Date.now()}`, // Generate a unique reference
      callback: (response) => {
        console.log("Payment successful:", response);
        // Handle successful payment
      },
      onClose: () => {
        console.log("Payment cancelled");
      },
    };

    const paystack = new window.PaystackPop();
    paystack.newTransaction(paystackOptions);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Explore Our Physical Courses</h1>
      </header>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <div className="pricing-header">
              <h2>{plan.name}</h2>
              <div className="price">
                <span className="currency">₦</span>
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.duration}</span>
              </div>
            </div>

            <button
              className="pay-button"
              onClick={() => handlePayment(plan)}
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </div>
        ))}
      </div>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default App;
