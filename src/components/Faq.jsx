import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";

const questions = [
  { q: "Idle / Tycoon Games details and Examples.", 
   a: "Games focused on building, upgrading, and generating continuous growth. Examples: Business simulation games where you grow a company (Like Business empire mobile), Factory or city-building management games (like satisfactory), Incremental games with automation and upgrades (Like Idle Miner). Core Idea: Start small → Upgrade → Expand → Automate.", },
  {
    q: "Co-op Games details and Examples.",
    a: "Games designed around teamwork, coordination, and shared objectives. Few Examples are: Multiplayer obstacle challenges requiring coordination (like Chained together), Physics-based co-op games with chaotic gameplay (like human fall flat), Puzzle games where each player has a unique role (Like It takes two). Core Idea: Work together to succeed (or fail hilariously) .",
  },
  {
    q: "Speedrun Games details and Examples.",
    a: "Games focused on precision, timing, and replayability. Fast-paced platformers with challenging levels (Like Only up), Obstacle courses designed for skilled completion (Like Getting over it), Reaction-based gameplay with timing challenges (Geometry Dash).",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="content-block faq-wrap"
      aria-label="Frequently asked questions">
      {questions.map((item, index) => {
        const open = openIndex === index;

        return (
          <article key={`${item.q}-${index}`} className="faq-item">
            <button
              type="button"
              className="faq-trigger"
              onClick={() => toggle(index)}
              aria-expanded={open}>
              <span>{item.q}</span>
              <span
                className={`faq-icon ${open ? "open" : ""}`}
                aria-hidden="true">
                <ExpandMore fontSize="small" />
              </span>
            </button>

            {open ? <p className="faq-answer">{item.a}</p> : null}
          </article>
        );
      })}
    </section>
  );
};

export default Faq;
