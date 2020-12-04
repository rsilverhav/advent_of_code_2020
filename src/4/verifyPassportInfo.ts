export function verifyPasspostInfo(
  passportInfo: string,
  requiredFields: { [key: string]: (value: string) => boolean }
): boolean {
  const fields = passportInfo.split(/[ \n]/g)
  for (const requiredFieldKey of Object.keys(requiredFields)) {
    const findValidField = ([field, value]: string[]) =>
      field === requiredFieldKey && requiredFields[requiredFieldKey](value)

    if (!fields.find((field) => findValidField(field.split(':')))) {
      return false
    }
  }
  return true
}
