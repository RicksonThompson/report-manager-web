import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Template } from './components/template'
import { Welcome } from './components/Welcome'
import { Reports } from './pages/Reports'
import { StockPolicy } from './pages/StockPolicy'
import { UploadFiles } from './pages/UploadFiles'
import { GlobalStyle } from './styles/global'

export function App() {
  return(
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Template home={Welcome}/>} />
          <Route path="/reports" element={<Template reportsComponent={Reports} />} />
          <Route path="/stockPolicies" element={<Template stockPolicy={StockPolicy}/>} />
          <Route path="/uploadFiles" element={<Template uploadFile={UploadFiles} />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  )
}
