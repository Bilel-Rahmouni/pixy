import './Services.css'

const services = [
  {
    id: 'brand',
    title: 'Brand Strategy',
    desc: 'Positioning, identity systems, and narratives that cut through.',
    tag: 'Strategy',
    size: 'large',
    accent: 'coral',
  },
  {
    id: 'digital',
    title: 'Digital Campaigns',
    desc: 'Full-funnel campaigns across every channel.',
    tag: 'Campaigns',
    size: 'medium',
    accent: 'lime',
  },
  {
    id: 'social',
    title: 'Social & Content',
    desc: 'Scroll-stopping content built for culture.',
    tag: 'Social',
    size: 'medium',
    accent: 'blue',
  },
  {
    id: 'motion',
    title: 'Motion & Film',
    desc: 'Cinematic storytelling for screens of every size.',
    tag: 'Film',
    size: 'small',
    accent: 'coral',
  },
  {
    id: 'growth',
    title: 'Growth Marketing',
    desc: 'Performance that compounds.',
    tag: 'Growth',
    size: 'small',
    accent: 'lime',
  },
  {
    id: 'experiential',
    title: 'Experiential',
    desc: 'IRL moments people remember.',
    tag: 'Events',
    size: 'wide',
    accent: 'blue',
  },
]

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <span className="section-label">Services</span>
          <h2 className="section-title">
            What we<br />
            <span className="section-title--outline">do best</span>
          </h2>
        </div>

        <div className="services__bento">
          {services.map((service) => (
            <article
              key={service.id}
              className={`service-card service-card--${service.size} service-card--${service.accent}`}
            >
              <span className="service-card__tag">{service.tag}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <span className="service-card__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
