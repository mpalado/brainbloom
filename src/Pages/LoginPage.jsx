import React from "react";
//import './index.css'; // Assuming you have a CSS file for styles
export default function BrainBloomLanding() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 shadow">
        <div className="text-blue-700 font-bold text-lg mb-2 sm:mb-0">BrainBloom</div>
        <nav className="space-x-2 sm:space-x-4 flex flex-wrap justify-center sm:justify-end">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#how-it-works" className="hover:text-blue-600">How it Works</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <button className="px-3 py-1 border rounded hover:bg-gray-100 mt-1 sm:mt-0">Login</button>
          <button className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 mt-1 sm:mt-0">Sign Up Free</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-16 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Bloom Your Brain with <span className="text-yellow-400">AI-Powered Reviewing</span>
        </h1>
      </section>

      {/* How It Works */}
      <section className="text-center py-12 px-4" id="how-it-works">
        <h2 className="text-lg sm:text-xl font-bold text-blue-700 mb-8">How BrainBloom Helps You Succeed</h2>
        <div className="grid gap-8 max-w-5xl mx-auto sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Upload & Create",
              desc: "Upload your notes (PDFs, text) or let our AI generate quizzes from any topic you provide.",
            },
            {
              title: "Intelligent Review",
              desc: "Our AI identifies key concepts, creates custom quizzes, and provides instant, insightful feedback.",
            },
            {
              title: "Track & Master",
              desc: "Monitor your progress, pinpoint weak areas, and ensure mastery before any exam with detailed analytics.",
            },
          ].map((step, idx) => (
            <div key={idx} className="p-6 border rounded shadow">
              <h3 className="font-semibold mb-2">{idx + 1}. {step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50 px-4" id="features">
        <h2 className="text-lg sm:text-xl font-bold text-center text-blue-700 mb-10">
          Unlock Your Full Learning Potential
        </h2>
        <div className="grid gap-10 max-w-5xl mx-auto sm:grid-cols-2">
          {[
            {
              title: "Personalized Quizzes",
              desc: "No more generic tests. BrainBloom crafts unique quizzes tailored to your study materials and learning style.",
            },
            {
              title: "Smart Progress Tracking",
              desc: "See your improvement over time with detailed analytics. Understand what to focus on to maximize efficiency.",
            },
            {
              title: "Comprehensive Review Modes",
              desc: "Choose from flashcards, multiple-choice, true/false – all dynamically generated and AI-powered for optimal learning.",
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-700 text-white text-center py-16 px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Transform Your Study Habits?</h2>
        <p className="mb-6">Join thousands of students blooming their brains with BrainBloom’s intelligent AI assistant.</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 px-6 rounded">
          Get started Free
        </button>
        <p className="mt-4 text-sm">No credit card required for your free trial.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-sm py-10 px-4">
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-white mb-2">BrainBloom</h3>
            <p>Your intelligent AI assistant for effortless reviewing and academic mastery.</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Quick Links</h3>
            <ul>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Connect With Us</h3>
            <ul>
              <li><a href="#contact" className="hover:underline">Contact Support</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
            <div className="flex space-x-2 mt-2">
              <span className="hover:text-white cursor-pointer">🌐</span>
              <span className="hover:text-white cursor-pointer">📘</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">© 2025 BrainBloom. All rights reserved.</div>
      </footer>
    </div>
  );
}
