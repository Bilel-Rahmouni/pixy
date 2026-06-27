export type ProjectAccent = 'coral' | 'lime' | 'blue'

export type Project = {
  id: string
  name: string
  href: string
  accent: ProjectAccent
  col: number
  row: number
  width: number
  height: number
}

export const projects: Project[] = [
  {
    id: 'wyngo',
    name: 'Wyngo',
    href: 'https://wyngo.co',
    accent: 'coral',
    col: 0,
    row: 0,
    width: 5,
    height: 3,
  },
  {
    id: 'cashcash',
    name: 'Cash Cash',
    href: 'https://cashcash.app',
    accent: 'lime',
    col: 5,
    row: 0,
    width: 4,
    height: 2,
  },
  {
    id: 'dozone',
    name: 'Dozone',
    href: 'https://dozone.com',
    accent: 'blue',
    col: 9,
    row: 0,
    width: 3,
    height: 3,
  },
  {
    id: 'onecrew-pro',
    name: 'onecrew.pro',
    href: 'https://onecrew.pro',
    accent: 'coral',
    col: 12,
    row: 0,
    width: 4,
    height: 2,
  },
  {
    id: 'onecrew-me',
    name: 'onecrew.me',
    href: 'https://onecrew.me',
    accent: 'lime',
    col: 16,
    row: 0,
    width: 4,
    height: 2,
  },
  {
    id: 'takwira',
    name: 'Takwira',
    href: 'https://takwira.com',
    accent: 'blue',
    col: 20,
    row: 0,
    width: 4,
    height: 2,
  },
  {
    id: 'koultounsi',
    name: 'koultounsi.com',
    href: 'https://koultounsi.com',
    accent: 'lime',
    col: 0,
    row: 3,
    width: 5,
    height: 2,
  },
  {
    id: 'tounsy',
    name: 'tounsy.com',
    href: 'https://tounsy.com',
    accent: 'blue',
    col: 5,
    row: 3,
    width: 4,
    height: 2,
  },
  {
    id: 'ultimate-calculator',
    name: 'Ultimate Calculator',
    href: 'https://ultimatecalculator.app',
    accent: 'coral',
    col: 9,
    row: 3,
    width: 5,
    height: 2,
  },
  {
    id: 'brain-gym',
    name: 'Brain Gym',
    href: 'https://braingym.app',
    accent: 'lime',
    col: 14,
    row: 3,
    width: 4,
    height: 2,
  },
  {
    id: 'renklar',
    name: 'renklar.dk',
    href: 'https://www.renklar.dk',
    accent: 'blue',
    col: 18,
    row: 3,
    width: 6,
    height: 2,
  },
  {
    id: 'lumara',
    name: 'lumara.hu',
    href: 'https://lumara.hu',
    accent: 'coral',
    col: 0,
    row: 5,
    width: 4,
    height: 2,
  },
  {
    id: 'dustbusters',
    name: 'Dustbusters',
    href: 'https://dustbusters.dk',
    accent: 'lime',
    col: 4,
    row: 5,
    width: 5,
    height: 2,
  },
  {
    id: 'iconmaker',
    name: 'iconmaker.pro',
    href: 'https://iconmaker.pro',
    accent: 'blue',
    col: 9,
    row: 5,
    width: 4,
    height: 2,
  },
]

export const MOSAIC_COLS = 24
export const MOSAIC_ROWS = 7

export function projectCells(projectList: Project[]) {
  const occupied = new Set<string>()
  for (const p of projectList) {
    for (let r = 0; r < p.height; r++) {
      for (let c = 0; c < p.width; c++) {
        occupied.add(`${p.col + c}-${p.row + r}`)
      }
    }
  }
  return occupied
}
