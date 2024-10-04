import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ProjectGrid from "@/components/sections/innerpages/ProjectGrid"
import Subscribe1 from "@/components/sections/Subscribe1"


export default function pageProject() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="Project Grid" />
    <ProjectGrid />
    <Subscribe1 />

    </Layout>
    </>
    )
}