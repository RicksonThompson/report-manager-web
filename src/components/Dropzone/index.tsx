import { CloudUpload } from '@material-ui/icons'
import React, {useCallback, useState} from 'react'
import {useDropzone } from 'react-dropzone'
import { UploadFile, Container } from './styles'
import { api } from '../../api/api'
import { uploadFileService } from '../../api/services/reports/report.service'

interface FileDTO {
  path: string
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}

export const Dropzone: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<FileDTO[]>([])
  const [error, setError] = useState()

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map((file: File) => {
      
      return uploadFileService(file).then(response => {
      }).catch(error => setError(error))
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({ onDrop, accept: 'text/csv', maxFiles: 1 })

  const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) {
      return (
        <>
          <p>Clique aqui ou arraste o arquivo para enviá-lo...</p>
          <CloudUpload />
        </>
      )
    }

    if (isDragReject) {
      return <p>Arquivo não suportado</p>
    }

    return <p>Solte os arquivos aqui</p>
  }

  return (
    <>
      <Container>
        <p>Estoque principal</p>
        <UploadFile {...getRootProps()}>
          <input {...getInputProps()} />
          {
            renderDragMessage(isDragActive, isDragReject)
          }
        </UploadFile>
        <button className='btn-1' onClick={() => setUploadedFile([])}>CANCELAR</button>
        <button className='btn-2' onClick={() => onDrop}>ENVIAR ARQUIVOS</button>
      </Container>
    </>
  )
}