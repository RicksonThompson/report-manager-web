import { Dropzone } from '../../components/Dropzone'
import { Container } from './styles'

export function UploadFiles() {
  return(
    <>
      <Container>
        <h1>Upload de Arquivo</h1>
        <Dropzone />
      </Container>
    </>
  )
}