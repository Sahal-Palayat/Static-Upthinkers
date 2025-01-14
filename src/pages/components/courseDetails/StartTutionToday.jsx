import React from "react";

// Card Component
const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center p-4">
      <img
        src={image}
        alt={`Image for ${title}`}
        className="w-full h-40 object-cover"
      />
      <h2 className="text-lg font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2 mb-4">{description}</p>
    </div>
  );
};

// Main Component
const StartTutionToday = () => {
  const cardData = [
    {
      id: 1,
      title: "Card Title 1",
      description:
        "This is a simple description for card 1. It explains the content briefly.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Card Title 2",
      description:
        "This is a simple description for card 2. It explains the content briefly.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Card Title 3",
      description:
        "This is a simple description for card 3. It explains the content briefly.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Card Title 4",
      description:
        "This is a simple description for card 4. It explains the content briefly.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default StartTutionToday;
