export const isValidYear = (value: string, min: number, max: number) =>
  /^\d{4}$/.test(value) && Number(value) >= min && Number(value) <= max
