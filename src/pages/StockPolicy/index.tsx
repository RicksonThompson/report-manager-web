import { Edit, Close } from '@material-ui/icons'
import { useEffect, useState } from 'react';
import { Container, Table, Form, HeaderModal, ContainerModal } from './styles'
import Modal from 'react-modal'
import StockPolicyDTO from '../../dto/stockPolicy/stockPolicy.dto';
import { createStockPolicy, getOneStockPolicy, updateStockPolicy } from '../../api/services/stockPolicies/stockPolicy.service';
import ExceptionDTO from '../../dto/erros/exception.dto';
import { Formik } from 'formik'
import ICreateStockPolicy from '../../dto/stockPolicy/createStockPolicy.dto';
import IUpdateStockPolicy from '../../dto/stockPolicy/updateStockPolicy.dto';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export function StockPolicy() {
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState<boolean>(false)
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState<boolean>(false)
  const [stockPolicy, setStockPolicy] = useState<StockPolicyDTO>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ExceptionDTO>()

  useEffect(() => {
    setLoading(true)
    getOneStockPolicy('/api/stockPolicies').then(response => setStockPolicy(response)).catch(error => setError(error))
    setLoading(false)
  }, [])
  
  function openCreateIsOpen() {
    setModalCreateIsOpen(true)
  }
  
  function closeModalCreate() {
    setModalUpdateIsOpen(false)
  }

  function openUpdateIsOpen() {
    setModalUpdateIsOpen(true)
  }
  
  function closeModalUpdate() {
    setModalUpdateIsOpen(false)
  }

  async function handleCreateStockPolicy(payload: ICreateStockPolicy) {
    await createStockPolicy('/api/stockPolicies', payload)
  }

  async function handleUpdateStockPolicy(payload: IUpdateStockPolicy) {
    await updateStockPolicy('/api/stockPolicies', payload, stockPolicy!.id)
  }
  
  if(!loading) {
    return(
      <>
        <Container>
          <div>
            <h1>Política de Estoque</h1>
            <button  onClick={openCreateIsOpen}>CADASTRAR POLÍTICA DE ESTOQUE</button>
          </div>
          <Table>
            <thead>
            <tr>
              <th>Ótimo</th>
              <th>Bom</th>
              <th>Crítico</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
              <tr>
              {
                error ? <p>{error}</p> : 
                stockPolicy ? (
                  <>
                    <td>{`> ${stockPolicy.excellent}`}</td>
                    <td>{`de ${stockPolicy.critical} até ${stockPolicy.excellent}`}</td>
                    <td>{`< ${stockPolicy.critical}`}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )
              }
                <td>
                  <button onClick={openUpdateIsOpen}>
                    <Edit htmlColor=' #F35149'/>
                  </button>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </Table>
          <Modal
            isOpen={modalCreateIsOpen}
            onRequestClose={closeModalCreate}
            style={customStyles}
            contentLabel="create stock policy"
          >
            <ContainerModal>
              <HeaderModal>
                <p>Cadastrar Política de Estoque</p>
                <button onClick={closeModalCreate}><Close htmlColor='#F35149'/></button>
              </HeaderModal>
              <Formik
                initialValues={{ excellent: '', good: '', critical: '' }}
                onSubmit={async (values, { setSubmitting }) => {
                  const newValues = Object.assign({...values, excellent: parseInt(values.excellent), critical: parseInt(values.critical), good: parseInt(values.good) })
                  
                  await handleCreateStockPolicy(newValues)
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <input
                      type="excellent"
                      name="excellent"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.excellent}
                      placeholder={"Ótimo"}
                    />
                    {errors.excellent && touched.excellent && errors.excellent}

                    <input
                      type="good"
                      name="good"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.good}
                      placeholder={"Bom"}
                    />
                    {errors.good && touched.good && errors.good}

                    <input
                      type="critical"
                      name="critical"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.critical}
                      placeholder={"Crítico"}
                    />
                    {errors.critical && touched.critical && errors.critical}
                    
                    <div>
                      <button className='btn-1' type="submit" disabled={isSubmitting} onClick={closeModalCreate}>CANCELAR</button>
                      <button className='btn-2' type="submit" disabled={isSubmitting}>CADASTRAR</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </ContainerModal>
          </Modal>

          <Modal
            isOpen={modalUpdateIsOpen}
            onRequestClose={closeModalUpdate}
            style={customStyles}
            contentLabel="create stock policy"
          >
            <ContainerModal>
              <HeaderModal>
                <p>Edição de Política de Estoque</p>
                <button onClick={closeModalUpdate}><Close htmlColor='#F35149'/></button>
              </HeaderModal>
              <Formik
                initialValues={{ excellent: '', good: '', critical: '' }}
                onSubmit={async (values, { setSubmitting }) => {
                  const newValues = Object.assign({...values, excellent: parseInt(values.excellent), critical: parseInt(values.critical), good: parseInt(values.good) })
                  
                  await handleUpdateStockPolicy(newValues)
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <input
                      type="excellent"
                      name="excellent"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.excellent}
                      placeholder={"Ótimo"}
                    />
                    {errors.excellent && touched.excellent && errors.excellent}

                    <input
                      type="good"
                      name="good"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.good}
                      placeholder={"Bom"}
                    />
                    {errors.good && touched.good && errors.good}

                    <input
                      type="critical"
                      name="critical"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.critical}
                      placeholder={"Crítico"}
                    />
                    {errors.critical && touched.critical && errors.critical}
                    
                    <div>
                      <button className='btn-1' type="submit" disabled={isSubmitting} onClick={closeModalUpdate}>CANCELAR</button>
                      <button className='btn-2' type="submit" disabled={isSubmitting}>ATUALIZAR</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </ContainerModal>
          </Modal>
        </Container>
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}
