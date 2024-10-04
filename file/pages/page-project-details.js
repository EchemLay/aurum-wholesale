import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ProjectDetails from "@/components/sections/innerpages/ProjectDetails"
import ProjectDetails2 from "@/components/sections/innerpages/ProjectDetails2"
import Subscribe1 from "@/components/sections/Subscribe1"


export default function pageProjectDetails() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="Project Details" />
    <ProjectDetails />
    <ProjectDetails2 />
    <Subscribe1 />

    </Layout>
    </>
    )
}