import { useEffect, useState } from "react"
import { getAllReports } from "../../api/services/reports/report.service"
import ExceptionDTO from "../../dto/erros/exception.dto"
import { IReport } from "../../dto/report/report.dto"
import { convertStatus, getKeyByValue } from "../../utils/Utils"
import { Container, Table } from "./styles"

export function Reports() {
  const [reports, setReports] = useState<IReport[]>([])
  const [load, setLoad] = useState(false)
  const [error, setError] = useState<ExceptionDTO>()

  useEffect(() => {
    setLoad(true)
    getAllReports('/api/reports').then(res => setReports(res.items)).catch(error => setError(error))
    setLoad(false)
  }, [])  

  if (!load) {
    return(
      <>
        <Container>
          <div>
            <h1>Relatórios</h1>
            <button>Resumo</button>
          </div>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Data</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Volume</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {error ? <p>{ error }</p> : reports.map(report => {
                return(
                  <tr>
                  <td><input type="checkbox" id={report.id.toString()}/></td>
                  <td key={getKeyByValue(report, report.date)}>{report.date}</td>
                  <td key={getKeyByValue(report, report.open)}>{report.open}</td>
                  <td key={getKeyByValue(report, report.high)}>{report.high}</td>
                  <td key={getKeyByValue(report, report.low)}>{report.low}</td>
                  <td key={getKeyByValue(report, report.close)}>{report.close}</td>
                  <td key={getKeyByValue(report, report.volume)}>{report.volume}</td>
                  <td key={getKeyByValue(report, report.status)}>{convertStatus(report?.status)}</td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </Container>
      </>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}