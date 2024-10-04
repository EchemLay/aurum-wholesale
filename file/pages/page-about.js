import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import About3 from "@/components/sections/About3"
import Services2 from "@/components/sections/Services2"
import Team2 from "@/components/sections/Team2"
import Subscribe2 from "@/components/sections/Subscribe2"


export default function pageAbout() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="About Us" />
    <About3 />
    <Services2 />
    {/* <Team2 /> */}
    {/* <Subscribe2 /> */}

    </Layout>
    </>
    )
}