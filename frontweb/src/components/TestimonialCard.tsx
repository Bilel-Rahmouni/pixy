import type { Testimonial } from '../data/testimonials'
import './TestimonialCard.css'

function initials(name: string, company: string) {
  const source = company || name
  return source
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

type TestimonialCardProps = {
  story: Testimonial
  index: number
}

export function TestimonialCard({ story, index }: TestimonialCardProps) {
  const Tag = story.href ? 'a' : 'article'
  const linkProps = story.href
    ? {
        href: story.href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {}

  return (
    <Tag
      {...linkProps}
      className={`t-card t-card--${story.layout} t-card--${story.accent}`}
      style={{
        animationDelay: `${index * 0.08}s`,
        gridColumn: story.gridColumn,
        gridRow: story.gridRow,
      }}
    >
      <div className="t-card__top">
        <span className="t-card__index">0{index + 1}</span>
        {story.href && <span className="t-card__link" aria-hidden="true">↗</span>}
      </div>

      <div className="t-card__metric">
        <span className="t-card__metric-value">{story.metric}</span>
        <span className="t-card__metric-label">{story.metricLabel}</span>
      </div>

      <h3 className="t-card__headline">{story.headline}</h3>

      <p className="t-card__quote">"{story.quote}"</p>

      <footer className="t-card__footer">
        <span className="t-card__avatar" aria-hidden="true">
          {initials(story.name, story.company)}
        </span>
        <div className="t-card__author">
          <cite className="t-card__name">{story.name}</cite>
          <span className="t-card__role">
            {story.role}, {story.company}
          </span>
        </div>
      </footer>
    </Tag>
  )
}
