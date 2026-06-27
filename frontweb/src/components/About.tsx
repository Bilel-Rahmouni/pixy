import './About.css'

const values = [
  { num: '01', title: 'Bold by default', desc: 'Safe work is invisible work.' },
  { num: '02', title: 'Data meets instinct', desc: 'Numbers inform. Gut decides.' },
  { num: '03', title: 'Culture first', desc: 'We build for how people actually live.' },
]

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <span className="section-label">About</span>
            <h2 className="section-title">
              A studio built<br />
              for the<br />
              <span className="about__highlight">attention economy</span>
            </h2>
          </div>

          <div className="about__right">
            <p className="about__lead">
              Pixy is a creative marketing agency obsessed with one thing: making brands matter in a world that scrolls past everything.
            </p>
            <p className="about__text">
              We're strategists, designers, filmmakers, and growth hackers — 28 people across London, Berlin, and New York. We partner with ambitious brands ready to break the template.
            </p>

            <div className="about__values">
              {values.map((v) => (
                <div key={v.num} className="about__value">
                  <span className="about__value-num">{v.num}</span>
                  <div>
                    <h3 className="about__value-title">{v.title}</h3>
                    <p className="about__value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about__banner">
          <div className="about__banner-text" aria-hidden="true">
            PIXY PIXY PIXY PIXY PIXY PIXY PIXY PIXY
          </div>
          <div className="about__banner-overlay">
            <span className="about__banner-stat">Since 2018</span>
            <span className="about__banner-stat">28 team members</span>
            <span className="about__banner-stat">3 studios</span>
          </div>
        </div>
      </div>
    </section>
  )
}
