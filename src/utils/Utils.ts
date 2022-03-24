import { EReportStatus, TReportStatus } from "./ETypes";

export function getKeyByValue(object: any, value: any) {
  for (const prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value)
        return prop
      }
  }
}

export function convertStatus(status?: EReportStatus): TReportStatus {
  if (!status) return "Cadastre uma política de estoque"

  switch (status) {
    case EReportStatus.CRITICAL: return "Crítico"
    case EReportStatus.GOOD: return "Bom"
    case EReportStatus.EXCELLENT: return "Ótimo"
  }
}