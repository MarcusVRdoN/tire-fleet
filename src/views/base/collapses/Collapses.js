import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Collapses = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Histórico de Controle de Rodízio</CCardHeader>
        <CCardBody>
          <p>Registros de rodízios realizados nos caminhões da frota.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Placa do Caminhão</th>
                <th>Data do Rodízio</th>
                <th>Quilometragem Atual</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC-1234</td>
                <td>01/11/2024</td>
                <td>200000</td>
                <td>Rodízio completo realizado com sucesso.</td>
              </tr>
              <tr>
                <td>DEF-5678</td>
                <td>02/11/2024</td>
                <td>205000</td>
                <td>Rodízio parcial realizado, pneus dianteiros invertidos.</td>
              </tr>
              <tr>
                <td>GHI-9012</td>
                <td>03/11/2024</td>
                <td>190000</td>
                <td>Rodízio realizado antes de viagem longa.</td>
              </tr>
              <tr>
                <td>JKL-3456</td>
                <td>05/11/2024</td>
                <td>210000</td>
                <td>Pneus traseiros com desgaste médio.</td>
              </tr>
              <tr>
                <td>MNO-7890</td>
                <td>07/11/2024</td>
                <td>220000</td>
                <td>Rodízio completo, alinhamento realizado.</td>
              </tr>
              <tr>
                <td>PQR-4321</td>
                <td>08/11/2024</td>
                <td>215000</td>
                <td>Rodízio programado para inspeção preventiva.</td>
              </tr>
              <tr>
                <td>STU-6543</td>
                <td>10/11/2024</td>
                <td>195000</td>
                <td>Rodízio parcial devido a desgaste lateral.</td>
              </tr>
              <tr>
                <td>VWX-0987</td>
                <td>12/11/2024</td>
                <td>225000</td>
                <td>Rodízio realizado com observação de desgaste em pneus traseiros.</td>
              </tr>
              <tr>
                <td>YZA-5432</td>
                <td>15/11/2024</td>
                <td>230000</td>
                <td>Rodízio completo com substituição de dois pneus.</td>
              </tr>
              <tr>
                <td>BCA-7896</td>
                <td>18/11/2024</td>
                <td>240000</td>
                <td>Rodízio realizado após inspeção de segurança.</td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Collapses
