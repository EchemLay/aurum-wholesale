import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TestimonialGrid from "@/components/sections/innerpages/TestimonialGrid"
import Subscribe1 from "@/components/sections/Subscribe1"


export default function pageTestimonialGrid() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>

    <PageTitle pageName="Testimonial Grid" />
    <TestimonialGrid />
    <Subscribe1 />

    </Layout>
    </>
    )
}