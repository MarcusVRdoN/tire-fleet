import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Typography = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Histórico de Manutenção</CCardHeader>
        <CCardBody>
          <p>Registros das manutenções realizadas nos veículos da frota.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Placa do Caminhão</th>
                <th>Data da Manutenção</th>
                <th>Tipo de Serviço</th>
                <th>Quantidade de Pneus</th>
                <th>Borracheiro Responsável</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC-1234</td>
                <td>01/11/2024</td>
                <td>Troca</td>
                <td>2</td>
                <td>Juliana Wasielewski Miritz</td>
                <td>Troca devido a desgaste.</td>
              </tr>
              <tr>
                <td>DEF-5678</td>
                <td>02/11/2024</td>
                <td>Recapagem</td>
                <td>4</td>
                <td>Marcus Vinícius Ribeiro do Nascimento</td>
                <td>Recapagem para economia de custos.</td>
              </tr>
              <tr>
                <td>GHI-9012</td>
                <td>03/11/2024</td>
                <td>Troca</td>
                <td>6</td>
                <td>Ryan Carlos Mendonça Silva</td>
                <td>Pneu furado em operação.</td>
              </tr>
              <tr>
                <td>JKL-3456</td>
                <td>05/11/2024</td>
                <td>Recapagem</td>
                <td>3</td>
                <td>Vinicius Santos Oliveira</td>
                <td>Recapagem após inspeção preventiva.</td>
              </tr>
              <tr>
                <td>MNO-7890</td>
                <td>07/11/2024</td>
                <td>Troca</td>
                <td>1</td>
                <td>Juliana Wasielewski Miritz</td>
                <td>Troca necessária após acidente.</td>
              </tr>
              <tr>
                <td>PQR-4321</td>
                <td>08/11/2024</td>
                <td>Recapagem</td>
                <td>2</td>
                <td>Marcus Vinícius Ribeiro do Nascimento</td>
                <td>Recapagem programada.</td>
              </tr>
              <tr>
                <td>STU-6543</td>
                <td>10/11/2024</td>
                <td>Troca</td>
                <td>8</td>
                <td>Ryan Carlos Mendonça Silva</td>
                <td>Pneu desgastado por uso contínuo.</td>
              </tr>
              <tr>
                <td>VWX-0987</td>
                <td>12/11/2024</td>
                <td>Recapagem</td>
                <td>5</td>
                <td>Vinicius Santos Oliveira</td>
                <td>Recapagem realizada com sucesso.</td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
