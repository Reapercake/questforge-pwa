import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function PdfExport({ cardRef }) {
  const handleExport = async () => {
    if (!cardRef.current) return;
    // Take a snapshot of the card with html2canvas
    const canvas = await html2canvas(cardRef.current);
    const imgData = canvas.toDataURL("image/png");
    // Create a PDF and add the card image
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("hq-card.pdf");
  };

  return (
    <button onClick={handleExport} className="mt-2">
      Export as PDF
    </button>
  );
}
