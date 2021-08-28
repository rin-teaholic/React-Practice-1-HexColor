import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ChangeColor from "../components/ChangeColor"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <ChangeColor />
  </Layout>
)

export default IndexPage
