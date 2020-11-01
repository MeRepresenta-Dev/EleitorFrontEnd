import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Title from "../components/Title"
import Text from "../components/Text"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="contentBlock">
      <Title align="center">
        Olá Eleitor,
        <br />
        vamos conversar?
      </Title>
      <Text size={18} weight={300} align="center">Para descobrirmos candidatos que combinam com você, 
        precisamos de algumas informações.</Text>
    </div>

    <div className="contentBlock">
      <Title size={18} align="center">
        Qual estado deseja pesquisar? 
      </Title>
      <Text size={18} weight={300} align="center">Para descobrirmos candidatos que combinam com você, 
        precisamos de algumas informações.</Text>
    </div>
    
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
