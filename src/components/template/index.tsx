import { Assignment, Home, Menu } from '@material-ui/icons'
import PolicyIcon from '@mui/icons-material/Policy'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { Header, Button, MenuBar, Container, Content, Main } from './styles'
import React from 'react'
import { Link } from 'react-router-dom'

interface TemplateProps {
  reportsComponent?: React.ComponentType
  uploadFile?: React.ComponentType
  stockPolicy?: React.ComponentType,
  home?: React.ComponentType
}

export const Template: React.FC<TemplateProps> = ({ 
  uploadFile: UploadFile, 
  stockPolicy: StockPolicy, 
  reportsComponent: Reports,
  home: HomeComponent,
  ...rest }) => {

  return(
    <>
      <Container>
        <Header>
          <Button>
            <Menu htmlColor='#F35149' />
          </Button>
        </Header>
        <Main>
          <MenuBar>
            <Link to="/home"><Home htmlColor='#3F4042'/></Link>
            <Link to="/uploadFiles"><DriveFolderUploadIcon htmlColor='#3F4042'/></Link>
            <Link to="/reports"><Assignment htmlColor='#3F4042'/></Link>
            <Link to="/stockPolicies"><PolicyIcon htmlColor='#3F4042'/></Link>
          </MenuBar>
          <Content>
            {UploadFile && <UploadFile />}
            {StockPolicy && <StockPolicy />}
            {Reports && <Reports />}
            {HomeComponent && <HomeComponent />}
          </Content>
        </Main>
      </Container>
    </>
  )
}
