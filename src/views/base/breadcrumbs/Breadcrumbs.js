import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Breadcrumbs = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Veículos Cadastrados</CCardHeader>
        <CCardBody>
          <p>
            Lista dos veículos cadastrados na frota, com detalhes de pneus e informações básicas.
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Placa do Caminhão</th>
                <th>Modelo</th>
                <th>Tipo de Pneu</th>
                <th>Quantidade de Pneus</th>
                <th>Quilometragem Inicial</th>
                <th>Data de Compra dos Pneus</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC-1234</td>
                <td>Scania R440</td>
                <td>Radial</td>
                <td>10</td>
                <td>100000</td>
                <td>01/11/2024</td>
                <td>Veículo em excelente estado.</td>
              </tr>
              <tr>
                <td>DEF-5678</td>
                <td>Volvo FH16</td>
                <td>Diagonal</td>
                <td>12</td>
                <td>120000</td>
                <td>15/10/2024</td>
                <td>Pneus novos adquiridos recentemente.</td>
              </tr>
              <tr>
                <td>GHI-9012</td>
                <td>Mercedes Actros</td>
                <td>Radial</td>
                <td>8</td>
                <td>80000</td>
                <td>20/09/2024</td>
                <td>Quilometragem média de rodagem.</td>
              </tr>
              <tr>
                <td>JKL-3456</td>
                <td>Iveco Stralis</td>
                <td>Radial</td>
                <td>10</td>
                <td>110000</td>
                <td>10/08/2024</td>
                <td>Veículo para transporte pesado.</td>
              </tr>
              <tr>
                <td>MNO-7890</td>
                <td>Daf XF</td>
                <td>Diagonal</td>
                <td>14</td>
                <td>90000</td>
                <td>05/07/2024</td>
                <td>Usado em longas viagens.</td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Breadcrumbs
