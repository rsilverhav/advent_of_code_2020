import { noValueValidator, valueValidator } from './passPortValidators'
import { verifyPasspostInfo } from './verifyPassportInfo'

describe('verifyPasspostInfo', () => {
  describe('no value validation', () => {
    const allTestData: { passportInfo: string; expectedValidity: boolean }[] = [
      {
        passportInfo: `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm`,
        expectedValidity: true,
      },
      {
        passportInfo: `iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929`,
        expectedValidity: false,
      },
      {
        passportInfo: `hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm`,
        expectedValidity: true,
      },
      {
        passportInfo: `hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`,
        expectedValidity: false,
      },
    ]

    for (const testData of allTestData) {
      it(`should return ${testData.expectedValidity.toString()} for "${
        testData.passportInfo
      }"`, () => {
        expect(verifyPasspostInfo(testData.passportInfo, noValueValidator)).toBe(
          testData.expectedValidity
        )
      })
    }
  })

  describe('with value validation', () => {
    const allTestData: { passportInfo: string; expectedValidity: boolean }[] = [
      {
        passportInfo: `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926`,
        expectedValidity: false,
      },
      {
        passportInfo: `iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946`,
        expectedValidity: false,
      },
      {
        passportInfo: `hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277`,
        expectedValidity: false,
      },
      {
        passportInfo: `hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`,
        expectedValidity: false,
      },

      {
        passportInfo: `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f`,
        expectedValidity: true,
      },
      {
        passportInfo: `eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm`,
        expectedValidity: true,
      },
      {
        passportInfo: `hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022`,
        expectedValidity: true,
      },
      {
        passportInfo: `iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`,
        expectedValidity: true,
      },
    ]

    for (const testData of allTestData) {
      it(`should return ${testData.expectedValidity.toString()} for "${
        testData.passportInfo
      }"`, () => {
        expect(verifyPasspostInfo(testData.passportInfo, valueValidator)).toBe(
          testData.expectedValidity
        )
      })
    }
  })
})
