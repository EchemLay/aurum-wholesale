import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamGrid from "@/components/sections/innerpages/TeamGrid"
import Subscribe1 from "@/components/sections/Subscribe1"


export default function pageTeamGrid() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="Team Grid" />
    <TeamGrid />
    <Subscribe1 />

    </Layout>
    </>
    )
}