import React from "react";

export default function CardPreview({ data }) {
  if (!data) return null;

  const placeholder =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";

  return (
    <div
      className="p-4 rounded-xl shadow bg-white dark:bg-gray-800 max-w-xs mx-auto mb-4"
      style={{
        border: "3px solid #111",
        fontFamily: "serif",
        minHeight: 340,
        position: "relative",
      }}
    >
      <img
        src={data.image || placeholder}
        alt={data.name}
        style={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          borderRadius: 12,
          border: "2px solid #bbb",
        }}
      />
      <div className="mt-2">
        <div className="font-bold text-lg">{data.name || "Unnamed"}</div>
        <div className="mb-1 text-gray-500">{data.type === "monster" ? "Monster" : data.class || "Hero"}</div>
        <div>
          <b>Attack:</b> {data.attack} &nbsp;
          <b>Defend:</b> {data.defense}
        </div>
        <div>
          <b>Body:</b> {data.body} &nbsp;
          <b>Mind:</b> {data.mind}
        </div>
        {data.type === "monster" && (
          <div className="text-xs mt-1">
            <b>CR:</b> {data.cr} &nbsp;
            <b>AC:</b> {data.ac} &nbsp;
            <b>HP:</b> {data.hp}
          </div>
        )}
      </div>
    </div>
  );
}
