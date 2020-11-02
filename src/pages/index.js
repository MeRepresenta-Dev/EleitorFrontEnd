import React from "react"
import { Link } from "gatsby"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"

import Layout from "../components/layout"
import Select from "@material-ui/core/Select"
import SearchField from "../components/SearchField"
import Button from "../components/Button"
import Title from "../components/Title"
import Text from "../components/Text"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SearchField onSearch={console.log} />
    <div className="contentBlock">
      <Title align="center">
        Olá Eleitor,
        <br />
        vamos conversar?
      </Title>
      <Text size={18} weight={300} align="center">
        Para descobrirmos candidatos que combinam com você, precisamos de algumas informações.
      </Text>
    </div>
    <div className="contentBlock">
      <Title size={18} align="center">
        Qual estado deseja pesquisar?
      </Title>
      <div className="contentBlock">
        <FormControl fullWidth variant="outlined">
          <InputLabel style={{ backgroundColor: `#FFF` }}>Selecione um Estado</InputLabel>
          <Select label="Selecione um Estado">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
    <div className="contentBlock">
      <Title size={18} align="center">
        O que é importante para você?
      </Title>
      <Text size={18} weight={300} align="center">
        Escolha um tema ou os nove temas se quiser. Descubra candidatas/os que combinam com você!
      </Text>
      <div className="contentBlock">
        {/* colocar os blocos de temas */}
      </div>
    </div>
    <div className="contentBlock" style={{textAlign: 'center'}}>
        <Button color="secondary">CONTINUAR</Button>
    </div>
  </Layout>
)

export default IndexPage
