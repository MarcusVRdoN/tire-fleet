import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))

//Forms
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))

// Charts
const Charts = React.lazy(() => import('./views/charts/Charts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/manutencao', name: 'Manutenção', element: Colors, exact: true },
  { path: '/manutencao/registrar', name: 'Registrar', element: Layout },
  { path: '/manutencao/historico', name: 'Histórico', element: Typography },
  { path: '/frota', name: 'Frota', element: Cards, exact: true },
  { path: '/frota/cadastrar', name: 'Cadastrar', element: Accordion },
  { path: '/frota/veiculos', name: 'Veículos', element: Breadcrumbs },
  { path: '/rodizio', name: 'Rodízio', element: Cards, exact: true },
  { path: '/rodizio/controle', name: 'Controle', element: Carousels },
  { path: '/rodizio/histórico', name: 'Histórico de Controle de Rodízio', element: Collapses },
  { path: '/relatorios', name: 'Charts', element: Charts },
]

export default routes
