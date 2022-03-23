import ExceptionDTO from "../../../dto/erros/exception.dto";
import { ReportDTO } from "../../../dto/report/report.dto"
import { api } from "../../api"

export const getAllReports = (url: string): Promise<{ items: ReportDTO[], total: number }> => {
  return new Promise((resolve, reject) => {
    api.get<{ items: ReportDTO[], total: number }>(url).then(response => {
      resolve(response.data)
    }).catch((error: ExceptionDTO)=> reject(error));
  })
}
