import { EReportStatus } from "../../utils/ETypes"

export interface IReport {
  id: number
  date: string
  high: number
  open: number
  low: number
  close: number
  volume: number
  status: EReportStatus
  createdAt: Date
  updatedAt?: Date
}