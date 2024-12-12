export function friend(friends: string[]): string[] {
  return friends.filter((f) => f.length === 4)
}
