import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ServiceGrid from "@/components/sections/innerpages/ServiceGrid"
import Subscribe1 from "@/components/sections/Subscribe1"


export default function pageService() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="Service Grid" />
    <ServiceGrid />
    {/* <Subscribe1 /> */}

    </Layout>
    </>
    )
}