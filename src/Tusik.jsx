import { useEffect, useState } from "react";
import MyModal from "./MyModal";

export default function Tusik({ o }) {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (typeof o === "string") {
      setIsOpen(true);
      setMsg(o);
    }
  }, []);
  function aa(a) {
    setMsg(o[a]);
    setIsOpen(true);
  }
  return isOpen ? (
    <MyModal msg={msg}></MyModal>
  ) : (
    <div>
      {Object.keys(o).map((a, i) => (
        <div key={i} onClick={() => aa(a)} className="clickable">
          {a}
        </div>
      ))}
    </div>
  );
}
