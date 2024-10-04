import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Funfact1 from "@/components/sections/Funfact1"
import Project1 from "@/components/sections/Project1"
import Clients1 from "@/components/sections/Clients1"
import Country1 from "@/components/sections/Country1"
import Faq1 from "@/components/sections/Faq1"
import Features1 from "@/components/sections/Features1"
import News1 from "@/components/sections/News1"
import Progress1 from "@/components/sections/Progress1"
import Services1 from "@/components/sections/Services1"
import Slider1 from "@/components/sections/Slider1"
import Subscribe1 from "@/components/sections/Subscribe1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Video1 from "@/components/sections/Video1"
export default function Home() {

  return (
  <>
  <Layout headerStyle={1} footerStyle={1}>
    <Slider1 />
    <Services1 />
    <About1 />
    {/* <Funfact1 /> */}
    {/* <Project1 /> */}
    {/* <Country1 /> */}
    <Progress1 />
    <Features1 />
    {/* <Video1 /> */}
    {/* <Testimonial1 /> */}
    {/* <Faq1 /> */}
    {/* <Clients1 /> */}
    {/* <News1 /> */}
    {/* <Subscribe1 /> */}
  </Layout>
  </>
  )
}