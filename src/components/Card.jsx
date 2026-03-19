import CardImage1 from "../assets/card1.png";
import CardImage2 from "../assets/card2.png";
import CardImage3 from "../assets/card3.png";

const tracks = [
  {
    platform: "For Mobile Only",
    title: "Idle / Tycoon Games",
    body: "Build, Expand, Automate, Profit. Start from nothing and grow into something massive. Design systems where players build businesses, cities, or industries that generate continuous income and evolve over time.",
    image: CardImage1,
  },
  {
    platform: "For PC / Mobile",
    title: "Co-op Games",
    body: "Teamwork, Chaos. Fun, Create experiences where players must work together to succeed. Whether it’s solving puzzles, surviving challenges, or navigating obstacles, communication should be the key to winning.",
    image: CardImage2,
  },
  {
    platform: "For PC / Mobile",
    title: "Speedrun Games",
    body: "Fast, Precise, Addictive. Design levels that challenge players to improve their skills and beat their best time. Every second matters, and replayability is everything.",
    image: CardImage3,
  },
];

const Card = () => {
  return (
    <section className="content-block cards-wrap">
      <div className="track-grid">
        {tracks.map((track) => (
          <article key={track.title} className="track-card">
            <div
              className="track-cover"
              style={{ backgroundImage: `url(${track.image})` }}>
              <span className="track-tag">{track.platform}</span>
            </div>

            <h3>{track.title}</h3>
            <p>{track.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Card;
