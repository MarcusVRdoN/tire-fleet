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
        <h2 className="h2">Cadastro de Veículo</h2>
        <CCard className="mb-4">
          <CCardBody>
            <p className="text-body-secondary small">Cadastrar novos veículos na frota.</p>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormInput id="vehicle" label="Placa do caminhão" placeholder="Ex. ABC-1234" />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  id="vehicle-model"
                  label="Modelo do caminhão"
                  placeholder="Ex. Scania R440"
                />
              </CCol>
              <CCol md={6}>
                <CFormInput id="vehicle" label="Tipo de pneu" placeholder="Ex. Radial" />
              </CCol>
              <CCol xs={6}>
                <CFormInput
                  type="number"
                  id="tires-quantity"
                  label="Quantidade de pneus"
                  placeholder="0"
                />
              </CCol>
              <CCol md={6}>
                <label className="form-label" htmlFor="vehicle">
                  Data de compra dos pneus
                </label>
                <input className="form-control" id="tires-date" type="date" />
              </CCol>
              <CCol xs={6}>
                <CFormInput
                  type="number"
                  id="kilometers"
                  label="Quilometragem inicial"
                  placeholder="Ex. 100000"
                />
              </CCol>
              <CCol xs={12}>
                <CFormTextarea
                  id="observation"
                  label="Observações (opcional)"
                  rows={3}
                  placeholder="Observações adicionais sobre o veículo"
                />
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
