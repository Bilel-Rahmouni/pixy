import { testimonials, testimonialStats } from '../data/testimonials'
import { TestimonialCard } from './TestimonialCard'
import './Testimonials.css'

const clients = [
  'Wyngo',
  'renklar.dk',
  'lumara.hu',
  'onecrew.pro',
  'iconmaker.pro',
  'Takwira',
  'Dozone',
  'tounsy.com',
  'koultounsi.com',
  'Cash Cash',
  'Dustbusters',
  'Brain Gym',
]

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__intro">
          <div className="testimonials__intro-left">
            <span className="section-label">Client stories</span>
            <h2 className="section-title">
              Real results,<br />
              <span className="section-title--outline">not fluff</span>
            </h2>
          </div>

          <div className="testimonials__stats">
            {testimonialStats.map((stat) => (
              <div key={stat.label} className="testimonials__stat">
                <span className="testimonials__stat-value">{stat.value}</span>
                <span className="testimonials__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials__bento">
          {testimonials.map((story, i) => (
            <TestimonialCard key={story.id} story={story} index={i} />
          ))}
        </div>
      </div>

      <div className="testimonials__strip" aria-hidden="true">
        <div className="testimonials__strip-track">
          {[...clients, ...clients].map((name, i) => (
            <span key={i} className="testimonials__strip-item">
              {name}
              <span className="testimonials__strip-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
