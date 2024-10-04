import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import FaqInner from "@/components/sections/innerpages/FaqInner"
import Clients2 from "@/components/sections/Clients2"
import Subscribe1 from "@/components/sections/Subscribe1"


export default function pageFaq() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="Faq" />
    <FaqInner />
    <Clients2 />
    <Subscribe1 />

    </Layout>
    </>
    )
}