import React from "react";

import meetupHeroImage from "../assets/images/meetup/meetup.jpg";

const Meetup: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      {/* Hero Section with Rounded Container - Centered */}
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Rounded Container with Background Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${meetupHeroImage})`,
              }}
            />

            {/* Gradient Overlay - Red to Blue */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/80 via-purple-400/80 to-blue-400/80" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                We run monthly meetups,
                <br />
                online, and in person.
              </h1>
              <a
                href="https://www.meetup.com/en-AU/Tech-Leading-Ladies/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded hover:bg-gray-100 transition-all duration-300"
              >
                Join Us On Meetup
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meetup;
