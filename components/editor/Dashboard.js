import { PaginateMenuProvider } from '../../context/PaginateMenuContext'
import HeaderDashboard from './HeaderDashboard'
import ContentPaginate from './ContentPaginate'
import ContentList from './ContentList'
import { container } from '../../styles/components/editor/dashboard.module.scss'

const Dashboard = () => {
  return (
    <section className={container}>
      <PaginateMenuProvider>
        <HeaderDashboard />
        <ContentPaginate />
        <ContentList />
      </PaginateMenuProvider>
    </section>
  )
}

export default Dashboard
