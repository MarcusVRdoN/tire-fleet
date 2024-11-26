import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon, { CIconSvg } from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CIconSvg size="4xl" style={{ width: '100%', height: '10rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 938 563">
            <path d="M423 281.5c0 105.8 0 106.5 2 106.5s2-.7 2-106.5 0-106.5-2-106.5-2 .7-2 106.5zM557.8 175.8l-5.8.3V269h22v-35h2.4c6.4 0 7.8 1.4 16.9 17.5 4.9 8.5 9.7 16 10.8 16.5 1.1.6 6.7.9 12.9.8l11-.3-10-16.5c-5.5-9.1-11.4-17.8-13.1-19.4-2.5-2.2-2.9-3-1.8-3.7.8-.5 1.7-.9 2.2-.9 1.7 0 10-8.7 11.9-12.3 4.1-8.1 3.4-19.7-1.7-27.7-2.9-4.6-11-9.4-18.5-10.9-5.5-1.1-28.5-1.9-39.2-1.3zm34.2 18c8.3 4.1 9.2 17.8 1.4 22.8-3.3 2.2-9.9 3.4-15.1 2.7l-4.3-.6V192h7.3c4.8 0 8.3.6 10.7 1.8zM662 176.9c-12.3 3.9-22 12.2-27.6 23.6-9.1 18.6-5.6 41.4 8.6 55.6 12 12 29.5 16.5 48 12.3 13.6-3.1 24.5-12 30.8-25.3 3.2-6.7 3.6-8.4 4-18.1.3-8.1 0-12.1-1.3-16.6-4.3-15-15.2-26.3-30.2-31.3-8.1-2.7-24.2-2.8-32.3-.2zm27.5 18c9.2 4.1 13.6 12 14.3 25.3.5 10.3-1.4 17.6-6.1 23.3-8.4 10.2-26.5 11.5-36.7 2.7-5.1-4.3-7.7-9.3-8.9-17.3-2.3-14.5 3.1-28.9 12.6-33.4 7.9-3.8 17.1-4 24.8-.6zM480 222.5l.1 46.5H502v-36h32v-17h-32v-24h38.8l.1-8 .1-8h-61v46.5zM727 184.5v8.5h26v76h22v-76h26v-17h-74v8.5zM824 186.7c-2.2 6-10.3 26.8-17.9 46.3l-13.7 35.5 9.4.3c12.3.4 13-.1 16.7-11.7l2.9-9.1 17.9.2 17.9.3 3.2 8.9c1.8 4.9 4.1 9.5 5.1 10.2 1.3 1 4.9 1.4 11.6 1.4h9.6l-18-46.5-18-46.5h-22.5l-4.2 10.7zm21.6 26.5c3.1 9.5 5.9 17.9 6.2 18.5.3 1-2.6 1.3-12.3 1.3-9.7 0-12.6-.3-12.3-1.3.3-.6 3.1-9 6.2-18.5 3.2-9.4 5.9-17.2 6.1-17.2.2 0 2.9 7.8 6.1 17.2zM51.7 178.7c-.4.3-.7 3.7-.7 7.5v6.8h166.1l-.3-7.3-.3-7.2-82.1-.3c-45.1-.1-82.4.1-82.7.5zM240 186v7l28.8.2 28.7.3.3 29.2.2 29.3h46.5l13.3 20 13.2 20.1V340h-16.8l-.6-3.4c-.4-1.9-2.5-6.2-4.7-9.5-15.2-22.7-48.9-21-60.8 3.2-1.6 3.4-3.2 7-3.5 7.9-.5 1.7-3.6 1.8-47.6 1.8h-47v15H282.7l1.2 4.2c1.6 5.4 7.3 13.9 11.4 17.1 15.6 11.9 34.6 10.7 47.9-3 4.3-4.4 9.8-14 9.8-17.1 0-.9 3.9-1.2 16-1.2h16v-69l-15.6-24-15.6-24H313v-59h-73v7zm87.6 141.1c3.6 1.3 9.4 6.9 11.5 11.2 2.3 4.3 2.7 12.4 1 17-4 10.3-15.6 16.5-25.9 13.7-5.3-1.4-11.9-7.2-14.3-12.5-8-17.5 9.6-36.2 27.7-29.4zM78 218v7h139v-14H78v7z" />
            <path d="M108 250.5v7.5h109v-15H108v7.5zM138 283v7h78v-14h-78v7zM480 340.4l-.1 46.6H502v-30.8l12.3-.4c18.7-.7 27.8-5.3 33.4-16.6 2.4-4.9 2.8-6.9 2.8-14.3 0-7.5-.4-9.2-3-14.4-3.5-6.9-9.2-11.7-16.8-14.2-4.1-1.3-10.1-1.7-27.9-2.1l-22.6-.4-.2 46.6zm41.7-28.5c5.2 2.4 7.3 6.3 7.3 13.4 0 6.7-3 11.7-8 13.4-1.9.7-7 1.2-11.2 1.2l-7.8.1v-30h7.8c5.4 0 8.9.6 11.9 1.9zM562 340.5V387h19l.1-29.3v-29.2l2.5 3c1.3 1.6 11.8 14.7 23.2 29l20.7 26 8.3.3 8.2.3V294h-19l-.2 29.2-.3 29.2L606 329c-10.2-12.9-20.7-26.1-23.3-29.2l-4.8-5.8H562v46.5zM659 340.5V387h61v-16h-39.1l.3-11.3.3-11.2 14.8-.3 14.8-.3-.3-7.7-.3-7.7-14.7-.3-14.8-.3V311l19.3-.2 19.2-.3.3-8.3.3-8.2H659v46.5zM731.2 327.2l.3 33.3 3.1 6.5c4 8.2 9.2 13.4 17.4 17.4 6.2 3 7.1 3.1 19 3.1 11.4 0 13-.2 18.1-2.6 6.9-3.2 13.2-8.8 16.5-14.6 4.9-8.2 5.4-12.4 5.4-45.6V294h-22v31.2c0 35.1-.4 37.1-7.1 41.9-2.9 2-4.6 2.4-11.1 2.4-9 0-11.8-1.5-15.8-8.6-2.5-4.4-2.5-4.4-2.8-35.7l-.4-31.2h-20.9l.3 33.2zM163 315v7h54v-14h-54v7z" />
          </svg>
        </CIconSvg>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1 className="h1">Entrar</h1>
                    <p className="text-body-secondary">Acesse todos os recursos do sistema.</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <Link to="/dashboard">
                          <CButton color="primary" className="px-4">
                            Entrar
                          </CButton>
                        </Link>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Esqueci minha senha
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5">
                <CCardBody className="text-center">
                  <div>
                    <h2>Cadastre-se</h2>
                    <p>Cadastre-se para ter acesso a todos os recursos do sistema.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Crar nova conta!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
