import { Button } from './Button'
import './Contact.css'

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container contact__inner">
        <div className="contact__content">
          <span className="section-label">Contact</span>
          <h2 className="contact__title">
            Let's build<br />
            something<br />
            <span className="contact__title-accent">loud.</span>
          </h2>
        </div>

        <div className="contact__direct">
          <a href="mailto:hello@pixystudio.io" className="contact__email">
            hello@pixystudio.io
          </a>
          <Button href="mailto:hello@pixystudio.io" size="lg">
            Email us
          </Button>
          <div className="contact__locations">
            <span>London</span>
            <span>Berlin</span>
            <span>New York</span>
          </div>
        </div>
      </div>
    </section>
  )
}
