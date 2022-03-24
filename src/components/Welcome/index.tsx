import { AssignmentTurnedIn, Publish } from "@material-ui/icons";
import { AdminPanelSettings, ManageSearch } from "@mui/icons-material";
import React from "react";
import { Container } from "./styles";
import { Link} from 'react-router-dom'

export const Welcome: React.FC = () => {
  return(
    <>
      <Container>
        <h1>Bem-vindo(a) ao Gerenciador de Relatórios!</h1>
        <h3>Aqui você pode:</h3>
        <div>
          <p><Publish htmlColor="#F35149"/> Importar relatórios em formato .csv;</p>
          <p><AssignmentTurnedIn htmlColor="#F35149"/> Listar relatórios;</p>
          <p><ManageSearch htmlColor="#F35149"/> Acompanhar status do relatório;</p>
          <p><AdminPanelSettings htmlColor="#F35149"/> Definir sua política de estoque.</p>
        </div>

        <Link to="/uploadFiles">
          <p className="link">Vamos lá?</p>
        </Link>
      </Container>
    </>
  )
}