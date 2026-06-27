import './Marquee.css'

const items = [
  'Brand Strategy',
  'Digital Campaigns',
  'Social Media',
  'Motion Design',
  'Growth Marketing',
  'Experiential',
  'Content Creation',
  'Art Direction',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <span className="marquee__sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
