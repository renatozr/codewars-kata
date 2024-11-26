export function hexStringToRGB(hexString: string): {
  r: number
  g: number
  b: number
} {
  hexString = hexString.toUpperCase()
  const hexMap: { [key: string]: number } = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  }

  const redHex = hexString.slice(1, 3)
  const greenHex = hexString.slice(3, 5)
  const blueHex = hexString.slice(5)

  const redValue = hexMap[redHex[0]] * 16 + hexMap[redHex[1]]
  const greenValue = hexMap[greenHex[0]] * 16 + hexMap[greenHex[1]]
  const blueValue = hexMap[blueHex[0]] * 16 + hexMap[blueHex[1]]

  return { r: redValue, g: greenValue, b: blueValue }
}
