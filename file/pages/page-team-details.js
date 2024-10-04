import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamDetails from "@/components/sections/innerpages/TeamDetails"
import Subscribe1 from "@/components/sections/Subscribe1"


export default function pageTeamDetails() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="Team Details" />
    <TeamDetails />
    <Subscribe1 />

    </Layout>
    </>
    )
}