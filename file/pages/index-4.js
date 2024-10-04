import Layout from "@/components/layout/Layout"
import Banner4 from "@/components/sections/Banner4"
import Services4 from "@/components/sections/Services4"
import About5 from "@/components/sections/About5"
import Services5 from "@/components/sections/Services5"
import Funfact3 from "@/components/sections/Funfact3"
import Project3 from "@/components/sections/Project3"
import About4 from "@/components/sections/About4"
import Process3 from "@/components/sections/Process3"
import WhyChose from "@/components/sections/WhyChose"
import Testimonial3 from "@/components/sections/Testimonial3"
import Video3 from "@/components/sections/Video3"
import Tab2 from "@/components/sections/Tab2"
import News3 from "@/components/sections/News3"
import Subscribe2 from "@/components/sections/Subscribe2"

export default function Home4() {

  return (
  <>
  <Layout headerStyle={3} footerStyle={1}>
    <Banner4 />
    <Services4 />
    <About5 />
    <Services5 />
    <Funfact3 />
    <Project3 />
    <About4 />
    <Process3 />
    <WhyChose />
    <Testimonial3 />
    <Video3 />
    <Tab2 />
    <News3 />
    <Subscribe2 />

  </Layout>
  </>
  )
}