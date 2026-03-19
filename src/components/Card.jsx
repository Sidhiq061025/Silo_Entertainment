import CardImage1 from "../assets/card1.png";
import CardImage2 from "../assets/card2.png";
import CardImage3 from "../assets/card3.png";

const tracks = [
  {
    platform: "For Mobile Only",
    title: "Idle / Tycoon Games",
    body: "Build and grow systems where players start small and expand into profitable empires.",
    image: CardImage1,
  },
  {
    platform: "For PC / Mobile",
    title: "Co-op Games",
    body: "Create gameplay where teamwork and communication are essential to succeed.",
    image: CardImage2,
  },
  {
    platform: "For PC / Mobile",
    title: "Speedrun Games",
    body: "Design fast-paced challenges that reward skill, precision, and replayability.",
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
