type Modes = Record<string, boolean | string>

export function classNames (cls: string, modes: Modes = {},
  additional: Array<string | undefined> = []): string {
  return [
    cls,
    ...additional.filter(el => !!el),
    ...(Object.keys(modes)
      .filter((key) => Boolean(modes[key]))
      .map((cls) => cls))
  ].join(" ").trim()
}
