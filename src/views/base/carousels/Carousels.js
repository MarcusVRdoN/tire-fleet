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
        <h2 className="h2">Controle de Rodízio</h2>
        <CCard className="mb-4">
          <CCardBody>
            <p className="text-body-secondary small">Controlar o rodízio dos caminhões.</p>
            <CForm className="row g-3">
              <CCol md={6}>
                <label className="form-label" htmlFor="vehicle">
                  Data de rodízio
                </label>
                <input className="form-control" id="date" type="date" />
              </CCol>
              <CCol xs={6}>
                <CFormInput
                  type="number"
                  id="kilometers"
                  label="Quilometragem atual"
                  placeholder="Ex. 200000"
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
