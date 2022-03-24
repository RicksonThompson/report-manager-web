import { api } from '../../api'
import IStockPolicy from '../../../dto/stockPolicy/stockPolicy.dto'
import ExceptionDTO from '../../../dto/erros/exception.dto'
import ICreateStockPolicy from '../../../dto/stockPolicy/createStockPolicy.dto'
import IUpdateStockPolicy from '../../../dto/stockPolicy/updateStockPolicy.dto'

export const getOneStockPolicy = (url: string): Promise<IStockPolicy> => {
  return new Promise((resolve, reject) => {
    api.get<IStockPolicy>(url)
      .then(response => resolve(response.data))
      .catch((error: ExceptionDTO) => reject(error))
  })
}

export const createStockPolicy = (url: string, payload: ICreateStockPolicy): Promise<IStockPolicy> => {
  return new Promise((resolve, reject) => {
    api.post<IStockPolicy>(url, payload)
      .then(response => resolve(response.data))
      .catch((error: ExceptionDTO) => reject(error))
  })
}

export const updateStockPolicy = (url: string, payload: IUpdateStockPolicy, id: number): Promise<IStockPolicy> => {
  return new Promise((resolve, reject) => {
    api.put<IStockPolicy>(`${url}/${id}`, payload)
      .then(response => resolve(response.data))
      .catch((error: ExceptionDTO) => reject(error))
  })
}
