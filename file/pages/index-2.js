import Layout from "@/components/layout/Layout.js"
import Banner2 from "@/components/sections/Banner2"
import Features2 from "@/components/sections/Features2"
import About2 from "@/components/sections/About2"
import Services2 from "@/components/sections/Services2"
import Process2 from "@/components/sections/Process2"
import Offer2 from "@/components/sections/Offer2"
import About2T2 from "@/components/sections/About2T2"
import Funfact2 from "@/components/sections/Funfact2"
import Project2 from "@/components/sections/Project2"
import Team2 from "@/components/sections/Team2"
import Video2 from "@/components/sections/Video2"
import Testimonial2 from "@/components/sections/Testimonial2"
import News2 from "@/components/sections/News2"
import Clients2 from "@/components/sections/Clients2"
import Subscribe2 from "@/components/sections/Subscribe2"
export default function Home2() {

  return (
  <>
  <Layout headerStyle={2} footerStyle={1}>
    <Banner2 />
    <Features2 />
    <About2 />
    <Services2 />
    <Process2 />
    <Offer2 />
    <About2T2 />
    <Funfact2 />
    <Project2 />
    <Team2 />
    <Video2 />
    <Testimonial2 />
    <News2 />
    <Clients2 />
    <Subscribe2 />
  </Layout>
  </>
  )
}