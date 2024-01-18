// import Layout from "@/layouts"
// import { NextPageWithLayout } from "./_app"
// import Head from "next/head"
// import { Card } from "@/components"

// const HomePage: NextPageWithLayout = () => {

//   return (
//     <>
//       <Head>
//         <title>{'Halaman index'}</title>
//       </Head>
//       <Card>
//         {'ini adalah content halaman index'}
//       </Card>
//     </>
//   )
// }

// HomePage.getLayout = function getLayout(page)  {
//   return (<Layout>{page}</Layout>)
// }

// export default HomePage

import Layout from "@/layouts"
import Head from "next/head"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{'halaman index'}</title>
      </Head>
      <div>
        {'ini halaman index lagi'}
      </div>
      <div>
        {'ini halaman index'}
      </div>
    </Layout>
  )
}
