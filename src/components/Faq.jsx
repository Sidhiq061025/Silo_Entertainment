import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";

const questions = [
  {
    q: "Idle / Tycoon Games details and Examples.",
    a: "Games focused on building, upgrading, and generating continuous growth. Examples: Business simulation games where you grow a company, Factory or city-building management games, Incremental games with automation and upgrades. Core Idea: Start small → Upgrade → Expand → Automate.",
  },
  {
    q: "Lorem ipsum dolor sit amet.",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "Lorem ipsum dolor sit amet.",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
