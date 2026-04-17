export type WebApp = {
  name: string
  description: string
  url: string
  tags?: string[]
}

export const apps: WebApp[] = [
  {
    name: "Map Generator",
    description: "Generate orienteering maps in browser",
    url: "/apps/mapgen",
    tags: ["maps", "web"]
  }
]