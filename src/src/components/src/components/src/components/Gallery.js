import React, { useEffect, useState } from "react";
import CardPreview from "./CardPreview";

export default function Gallery() {
  const [cards, setCards] = useState([]);

  // On mount, load cards from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("questforge-cards") || "[]");
    setCards(stored);
  }, []);

  return (
    <div>
      <h2>Saved Cards</h2>
      {cards.length === 0 && <div>No cards yet. Save from the Converter!</div>}
      <div>
        {cards.map((card, i) => (
          <div key={i} className="mb-4">
            <CardPreview data={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
