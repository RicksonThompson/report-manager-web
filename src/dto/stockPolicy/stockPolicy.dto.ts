export default interface IStockPolicy {
  id: number
  critical: number
  good: number
  excellent: number
  createdAt: Date
  updatedAt?: Date
}
