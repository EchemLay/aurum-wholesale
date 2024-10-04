import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import PricingTable from "@/components/sections/innerpages/PricingTable"
import Subscribe1 from "@/components/sections/Subscribe1"


export default function pagePricingTable() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="Our Products" />
    <PricingTable />
    {/* <Subscribe1 /> */}

    </Layout>
    </>
    )
}