export default function calculateTotal<T extends { total: number }>(total: number, items: T[]) {
  let calculatedTotal = total

  if (!calculatedTotal) {
    calculatedTotal = items.reduce((acc, current) => {
      const sum = acc + current.total
      return sum
    }, 0)
  }

  return calculatedTotal
}
