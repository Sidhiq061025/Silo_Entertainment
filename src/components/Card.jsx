import CardImage1 from "../assets/card1.png";
import CardImage2 from "../assets/card2.png";
import CardImage3 from "../assets/card3.png";

const tracks = [
  {
    platform: "PC / Mobile",
    title: "Idle / Tycoon Games",
    body: "Build factories, cities, or businesses that generate endless profit.",
    image: CardImage1,
  },
  {
    platform: "PC / Mobile",
    title: "Co-op Games",
    body: "Communication and teamwork should be essential to win.",
    image: CardImage2,
  },
  {
    platform: "PC / Mobile",
    title: "Speedrun Games",
    body: "Players should be able to replay levels to beat their best time.",
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
