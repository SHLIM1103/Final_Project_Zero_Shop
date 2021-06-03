import React from "react"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import { Layout, Breadcrumb } from "__common__/index"
import TeamMemberOne from "__payment__/modules/TeamMemberOne"

const SuccessPage = ({ location }) => {
  const { pathname } = location

  return (
    <>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>PaySuccess</BreadcrumbsItem>
      <Layout headerTop="visible">
        <Breadcrumb />
        {/* team member */}
        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />
      </Layout>
    </>
  )
}

export default SuccessPage
