import Head from 'next/head'

const PageHead = ({ headTitle }) => {
  return (
  <>
  <Head>
    <title>
      {headTitle ? headTitle : "Aurum Wholesale | Premier Source of Wholesale Supplies"}
    </title>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </Head>
  </>
  )
}

export default PageHead