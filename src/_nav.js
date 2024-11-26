import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Manutenção',
    to: '/manutencao',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Registrar',
        to: '/manutencao/registrar',
      },
      {
        component: CNavItem,
        name: 'Histórico',
        to: '/manutencao/historico',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Frota',
    to: '/frota',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Cadastrar veículo',
        to: '/frota/cadastrar',
      },
      {
        component: CNavItem,
        name: 'Lista de veículos',
        to: '/frota/veiculos',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Rodízio',
    to: '/rodizio',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Controle',
        to: '/rodizio/controle',
      },
      {
        component: CNavItem,
        name: 'Histórico',
        to: '/rodizio/historico',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Equipamentos',
    to: '/equipamentos',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Estoque',
    to: '/estoque',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Alertas e Lembretes',
    to: '/alertas',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Relatórios',
    to: '/relatorios',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
]

export default _nav
