function rgb(r, g, b) {
  const toHex = (value) => {
    value = Math.max(0, Math.min(255, value))
    return value.toString(16).toUpperCase().padStart(2, '0')
  }
  return toHex(r) + toHex(g) + toHex(b)
}
