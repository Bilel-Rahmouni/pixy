import { Button } from './Button'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__mesh" />
        <div className="hero__grain" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__content container">
        <div className="hero__badge reveal">
          <span className="hero__badge-dot" />
          Creative Marketing Agency
        </div>

        <h1 className="hero__title">
          <span className="hero__line reveal reveal-delay-1">
            We turn
          </span>
          <span className="hero__line hero__line--accent reveal reveal-delay-2">
            <em>noise</em>
          </span>
          <span className="hero__line reveal reveal-delay-3">
            into signal.
          </span>
        </h1>

        <p className="hero__sub reveal reveal-delay-4">
          Strategy, design, and campaigns that make brands impossible to ignore.
        </p>

        <div className="hero__actions reveal reveal-delay-5">
          <Button href="#work" size="lg">See our work</Button>
          <Button href="#contact" variant="outline" size="lg">Get in touch</Button>
        </div>

        <div className="hero__stats reveal reveal-delay-5">
          <div className="hero__stat">
            <span className="hero__stat-num">140+</span>
            <span className="hero__stat-label">Campaigns</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">38</span>
            <span className="hero__stat-label">Awards</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">12</span>
            <span className="hero__stat-label">Countries</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
