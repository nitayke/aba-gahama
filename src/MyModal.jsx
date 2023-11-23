import { useState } from "react";

export default function MyModal({ msg }) {
  const [clicked, click] = useState(false);
  return clicked ? (
    <div className="last">
      <div>פנייתך התקבלה, לא צריכה להיות בעיה.</div>
      <h2>מפל"ג ב' - מורידים את רמת המתח המבצעי בקו השני.</h2>
      <button
        className="btn clickable btn1"
        onClick={() => {
          window.location.reload();
        }}
      >
        חזור לדף הבית
      </button>
    </div>
  ) : (
    <div className="last">
      <h2>{msg}</h2>
      <button
        onClick={() => {
          click(true);
        }}
        className="btn clickable"
      >
        אישור
      </button>
    </div>
  );
}
