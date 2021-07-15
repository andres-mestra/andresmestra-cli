import { useQuery } from '@apollo/client'
import { ALLUSERS } from '../../../queries/editorQueries'

import HeaderDashboard from '../../../components/dashboard/HeaderDashboard'
import StaffList from '../../../components/dashboard/StaffList'

import { container } from '../../../styles/components/dashboard/dashboard.module.scss'

const DashboardUsers = () => {
  const { data, loading, error } = useQuery(ALLUSERS)

  return (
    <section className={container}>
      <HeaderDashboard
        title="Staff users"
        urlNew="/admin/users/new"
        textLink="New user"
      />
      <StaffList items={data?.allUsers} error={error} loading={loading} />
    </section>
  )
}

DashboardUsers.layout = 'ADMIN'
export default DashboardUsers
