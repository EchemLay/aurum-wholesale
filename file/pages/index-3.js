import Layout from "@/components/layout/Layout"
import Banner3 from "@/components/sections/Banner3"
import About3 from "@/components/sections/About3"
import Features3 from "@/components/sections/Features3"
import Services3 from "@/components/sections/Services3"
import About1 from "@/components/sections/About1"
import Funfact1 from "@/components/sections/Funfact1"
import Project1 from "@/components/sections/Project1"
import Process2 from "@/components/sections/Process2"
import Offer2 from "@/components/sections/Offer2"
import Country2 from "@/components/sections/Country2"
import Tab1 from "@/components/sections/Tab1"
import News2 from "@/components/sections/News2"
import Clients2 from "@/components/sections/Clients2"
import Subscribe2 from "@/components/sections/Subscribe2"

export default function Home3() {

  return (
  <>
  <Layout headerStyle={2} footerStyle={1}>
    <Banner3 />
    <About3 />
    <Features3 />
    <Services3 />
    <About1 />
    <Funfact1 />
    <Project1 />
    <Process2 />
    <Offer2 />
    <Country2 />
    <Tab1 />
    <News2 />
    <Clients2 />
    <Subscribe2 />

  </Layout>
  </>
  )
}