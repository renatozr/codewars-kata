export function sumStr(a: string, b: string): string {
  if (!a) a = '0'
  if (!b) b = '0'

  return (parseInt(a) + parseInt(b)).toString()
}
