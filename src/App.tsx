import { useState } from "react";
import "./App.css";

const phrases = [
  "ไม่",
  "ไม่จริงๆหรอออ?",
  "จริงอะป่าววววว?",
  "ขอร้องงน้าา",
  "เค้ารักเธอจริงๆน้าาาาา><",
  "รักจริงๆน้าารักมากๆๆๆๆๆ",
  "หึหึหยุดหัวใจของเค้าไม่ได้หรอก><",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="val-container">
      {" "}
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="yes-pic"
          />
          <div className="val-text">Yea!!! I LOVE YOU</div>
        </>
      ) : (
        <>
          <img
            src="https://media.tenor.com/gTL4U6T5QVEAAAAj/thinking-of-you-cat.gif"
            alt="bear-asking"
          />
          <div className="val-text">เราน่ารักมั้ยยยยยย?</div>
          <div>
            <button
              className="button yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={() => setNoCount(noCount + 1)}
              className="button no-button"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
