import React from "react";
import { Book, Heart, Brain, GraduationCap } from "lucide-react";

export const HeroParallax = () => {
  return (
    <div className="overflow-hidden antialiased relative flex flex-col">
      <Header />
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-5xl relative mx-auto md:py-20 px-4 w-full">
      <div className="space-y-16 md:space-y-24 font-bold w-full">
        <div className="flex flex-col md:flex-row w-full gap-14">
          {/* First Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              <Heart className="text-[#20477a] w-16 h-16 flex-shrink-0 rounded-lg p-2" />
              <h1 className="text-lg md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] mb-2 text-center">
                Parent-Child Empowerment
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] mb-8 text-center">
                By actively involving parents in the journey, we foster a
                nurturing and supportive environment that empowers and nurtures
                both academic and personal growth.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              <Brain className="text-[#20477a] w-16 h-16 flex-shrink-0 rounded-lg p-2" />
              <h1 className="text-lg md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] mb-2 text-center">
                Emotional and Social Development
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] mb-8 text-center">
                We focus on fostering emotional intelligence, helping children
                build healthy relationships, improve self-regulation, and grow
                into empathetic, confident individuals.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-14">
          {/* First Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              <Book className="text-[#20477a] w-16 h-16 flex-shrink-0 rounded-lg p-2" />
              <h1
                className="text-lg md:text-4xl font-bold mb-2 text-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #20477a, #2954E7)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  lineHeight: "1.2", // Ensure enough space for descenders
                  paddingBottom: "0.2em", // Add extra space below the text
                }}
              >
                Psychological Support
              </h1>

              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] mb-8 text-center">
                Our programs emphasize mental health and well-being, offering a
                psychological approach to support emotional balance, resilience,
                and growth.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              <GraduationCap className="text-[#20477a] w-16 h-16 flex-shrink-0 rounded-lg p-2" />
              <h1 className="text-lg md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] mb-2 text-center">
                Academic Excellence
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] mb-8 text-center">
                We empower children to achieve their highest potential by
                fostering curiosity, critical thinking, and resilience in
                academics and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
