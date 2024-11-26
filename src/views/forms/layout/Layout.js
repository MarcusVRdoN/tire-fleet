import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'

const Layout = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <h2 className="h2">Registro de Manutenção</h2>
        <CCard className="mb-4">
          <CCardBody>
            <p className="text-body-secondary small">
              Registrar manutenções realizadas pelos borracheiros.
            </p>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormInput id="vehicle" label="Placa do caminhão" placeholder="EX. ABC-1234" />
              </CCol>
              <CCol md={6}>
                <label className="form-label" htmlFor="vehicle">
                  Data da manutenção
                </label>
                <input className="form-control" id="date" type="date" />
              </CCol>
              <CCol md={6}>
                <CFormSelect id="service-type" label="Tipo de serviço">
                  <option value="">Troca</option>
                  <option value="">Recapagem</option>
                  <option value="">Inspeção</option>
                </CFormSelect>
              </CCol>
              <CCol xs={6}>
                <CFormInput
                  type="number"
                  id="tires-quantity"
                  label="Quantidade de pneus"
                  placeholder="0"
                />
              </CCol>
              <CCol xs={12}>
                <CFormTextarea
                  id="observation"
                  label="Observações adicionais"
                  rows={3}
                  placeholder="Descreva o que mais será necessário para a realização da manutenção"
                />
              </CCol>
              <CCol md={6}>
                <CFormSelect id="identity" label="Borracheiro responsável">
                  <option value="">Juliana Wasielewski Miritz</option>
                  <option value="">Marcus VInícius Ribeiro do Nascimento</option>
                  <option value="">Vinicius Santos Oliveira</option>
                  <option value="">Ryan Carlos Mendonça Silva</option>
                </CFormSelect>
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Registrar
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Layout
