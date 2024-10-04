import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ServiceDetails from "@/components/sections/innerpages/ServiceDetails"
import Subscribe1 from "@/components/sections/Subscribe1"


export default function pageServiceDetails() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="Service Details" />
    <ServiceDetails />
    {/* <Subscribe1 /> */}

    </Layout>
    </>
    )
}