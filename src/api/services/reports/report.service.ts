import { AxiosResponse } from "axios";
import ExceptionDTO from "../../../dto/erros/exception.dto";
import { IReport } from "../../../dto/report/report.dto"
import { api } from "../../api"

export const getAllReports = (url: string): Promise<{ items: IReport[], total: number }> => {
  return new Promise((resolve, reject) => {
    api.get<{ items: IReport[], total: number }>(url).then(response => {
      resolve(response.data)
    }).catch((error: ExceptionDTO)=> reject(error));
  })
}

export const uploadFile = (url: string, file: string, fileName: string): Promise<IReport[]> => {
  return new Promise((resolve, reject) => {
    api.post<IReport[]>(url, file, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {resolve(response.data)})
      .catch((error: ExceptionDTO) => reject(error))
  })
}

export const uploadFileService = async (file: File) => {
  const files = new FormData()
  files.append('file', file)
  const { data }: AxiosResponse<Response[]> = await api.post(
    '/api/reports',
    files
  )
  return data[0].body
}
