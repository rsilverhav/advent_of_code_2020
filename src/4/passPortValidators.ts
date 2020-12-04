import { isValidHeight } from './isValidHeight'
import { isValidYear } from './isValidYear'

export const noValueValidator: { [key: string]: (value: string) => boolean } = {
  byr: () => true,
  iyr: () => true,
  eyr: () => true,
  hgt: () => true,
  hcl: () => true,
  ecl: () => true,
  pid: () => true,
}

export const valueValidator: { [key: string]: (value: string) => boolean } = {
  byr: (value) => isValidYear(value, 1920, 2002),
  iyr: (value) => isValidYear(value, 2010, 2020),
  eyr: (value) => isValidYear(value, 2020, 2030),
  hgt: (value) => isValidHeight(value, { cm: 150, in: 59 }, { cm: 193, in: 76 }),
  hcl: (value) => /^#[a-f0-9]{6}/.test(value),
  ecl: (value) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value),
  pid: (value) => /^[0-9]{9}$/.test(value),
}
