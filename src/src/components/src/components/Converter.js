import React, { useState } from "react";
import CardPreview from "./CardPreview";

export default function Converter() {
  const [type, setType] = useState("monster"); // "monster" or "hero"
  const [input, setInput] = useState({ name: "", cr: "", ac: "", hp: "", class: "" });
  const [cardData, setCardData] = useState(null);

  // Handle changes in input fields
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Converts D&D stats to HQ stats using basic logic
  const handleConvert = () => {
    if (type === "monster") {
      // Convert a D&D monster to HQ card
      setCardData({
        name: input.name,
        type: "monster",
        attack: Math.ceil(Number(input.cr) * 1.5),
        defense: Math.ceil(Number(input.ac) / 4),
        body: Math.ceil(Number(input.hp) / 10),
        mind: 2,
        cr: input.cr,
        ac: input.ac,
        hp: input.hp,
      });
    } else {
      // Convert a D&D hero (class/race) to HQ hero card (simple mapping)
      setCardData({
        name: input.name,
        type: "hero",
        class: input.class,
        attack: 2,
        defense: 2,
        body: 6,
        mind: 4,
      });
    }
  };

  return (
    <div>
      <div className="mb-2">
        <label>
          <input
            type="radio"
            checked={type === "monster"}
            onChange={() => setType("monster")}
          />
          Monster
        </label>
        <label className="ml-4">
          <input
            type="radio"
            checked={type === "hero"}
            onChange={() => setType("hero")}
          />
          Hero
        </label>
      </div>
      <div className="mb-4">
        <input
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {type === "monster" ? (
          <>
            <input
              name="cr"
              value={input.cr}
              onChange={handleChange}
              placeholder="CR"
              type="number"
              step="0.25"
            />
            <input
              name="ac"
              value={input.ac}
              onChange={handleChange}
              placeholder="AC"
              type="number"
            />
            <input
              name="hp"
              value={input.hp}
              onChange={handleChange}
              placeholder="HP"
              type="number"
            />
          </>
        ) : (
          <>
            <input
              name="class"
              value={input.class}
              onChange={handleChange}
              placeholder="Class"
            />
          </>
        )}
        <button onClick={handleConvert}>Convert</button>
      </div>
      {cardData && <CardPreview data={cardData} />}
    </div>
  );
}
