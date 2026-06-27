import { useMemo, type CSSProperties } from 'react'
import {
  projects,
  projectCells,
  MOSAIC_COLS,
  MOSAIC_ROWS,
} from '../data/projects'
import './Work.css'

type ColorTile = 'coral' | 'lime' | 'blue' | 'dark'

function tileColor(col: number, row: number): ColorTile {
  const n = (col * 17 + row * 31 + col * row) % 100

  if (n < 8) return 'dark'
  if (n < 38) return 'coral'
  if (n < 68) return 'lime'
  return 'blue'
}

function buildColorTiles(occupied: Set<string>) {
  const tiles: { key: string; color: ColorTile; col: number; row: number; delay: number }[] = []

  for (let row = 0; row < MOSAIC_ROWS; row++) {
    for (let col = 0; col < MOSAIC_COLS; col++) {
      const key = `${col}-${row}`
      if (occupied.has(key)) continue

      tiles.push({
        key,
        color: tileColor(col, row),
        col,
        row,
        delay: (col + row) * 0.008,
      })
    }
  }

  return tiles
}

export function Work() {
  const occupied = useMemo(() => projectCells(projects), [])
  const colorTiles = useMemo(() => buildColorTiles(occupied), [occupied])

  return (
    <section className="work" id="work">
      <div className="container work__header">
        <span className="section-label">Selected Work</span>
        <h2 className="section-title">Cases that<br />moved the needle</h2>
      </div>

      <div
        className="work__mosaic"
        style={
          {
            '--mosaic-cols': MOSAIC_COLS,
            '--mosaic-rows': MOSAIC_ROWS,
          } as CSSProperties
        }
      >
        {colorTiles.map((tile) => (
          <div
            key={tile.key}
            className={`work__tile work__tile--${tile.color}`}
            style={{
              gridColumn: tile.col + 1,
              gridRow: tile.row + 1,
              animationDelay: `${tile.delay}s`,
            }}
          />
        ))}

        {projects.map((project, i) => (
          <a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`work__project work__project--${project.accent}`}
            style={{
              gridColumn: `${project.col + 1} / span ${project.width}`,
              gridRow: `${project.row + 1} / span ${project.height}`,
              animationDelay: `${i * 0.04}s`,
            }}
          >
            <span className="work__project-index">0{i + 1}</span>
            <span className="work__project-name">{project.name}</span>
            <span className="work__project-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
