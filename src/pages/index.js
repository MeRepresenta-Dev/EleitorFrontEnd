import React, { useState } from "react"
import { Link } from "gatsby"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"

import Layout from "../components/layout"
import Select from "@material-ui/core/Select"
import SearchField from "../components/SearchField"
import ThemeButton from "../components/ThemeButton"
import Button from "../components/Button"
import Title from "../components/Title"
import Text from "../components/Text"
import SEO from "../components/seo"

const temas = [
  { label: `#Gênero`, name: `genero` },
  { label: `#LGBT`, name: `lgbt` },
  { label: `#Povos Tradicionais & Meio Ambiente`, name: `povostradicionais` },
  { label: `#Saúde, Educação & Trabalho`, name: `saudeeducacaotrabalho` },
  { label: `#Raça`, name: `raca` },
  { label: `#Corrupção`, name: `corrupcao` },
  { label: `#Migrantes`, name: `migrantes` },
  { label: `#Segurança`, name: `seguranca` },
  { label: `#Drogas`, name: `drogas` },
]

const uf = [
  { sigla: `AC`, nome: `Acre` },
  { sigla: `AL`, nome: `Alagoas` },
  { sigla: `AP`, nome: `Amapá` },
  { sigla: `AM`, nome: `Amazonas` },
  { sigla: `BA`, nome: `Bahia` },
  { sigla: `CE`, nome: `Ceará` },
  { sigla: `DF`, nome: `Distrito Federal` },
  { sigla: `ES`, nome: `Espírito Santo` },
  { sigla: `GO`, nome: `Goías` },
  { sigla: `MA`, nome: `Maranhão` },
  { sigla: `MT`, nome: `Mato Grosso` },
  { sigla: `MS`, nome: `Mato Grosso do Sul` },
  { sigla: `MG`, nome: `Minas Gerais` },
  { sigla: `PA`, nome: `Pará` },
  { sigla: `PB`, nome: `Paraíba` },
  { sigla: `PR`, nome: `Paraná` },
  { sigla: `PE`, nome: `Pernambuco` },
  { sigla: `PI`, nome: `Piauí` },
  { sigla: `RJ`, nome: `Rio de Janeiro` },
  { sigla: `RN`, nome: `Rio Grande do Norte` },
  { sigla: `RS`, nome: `Rio Grande do Sul` },
  { sigla: `RO`, nome: `Rondônia` },
  { sigla: `RR`, nome: `Roraíma` },
  { sigla: `SC`, nome: `Santa Catarina` },
  { sigla: `SP`, nome: `São Paulo` },
  { sigla: `SE`, nome: `Sergipe` },
  { sigla: `TO`, nome: `Tocantins` },
]

const IndexPage = () => {
  const [temasEscolhidos, escolherTema] = useState([])

  const handleTemas = tema => {
    const novosTemas = temasEscolhidos.includes(tema)
      ? temasEscolhidos.filter(t => t !== tema)
      : [...temasEscolhidos, tema]
    escolherTema(novosTemas)
  }

  console.log(temasEscolhidos)
  return (
    <Layout>
      <SEO title="Home" />
      <SearchField onSearch={console.log} />
      <div className="contentBlock">
        <Title align="center">
          Olá Eleitor(a),
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
              {uf.map(estado => (
                <MenuItem value={estado.sigla}>{estado.nome}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="contentBlock">
        <Title size={18} align="center">
          O que é importante para você?
        </Title>
        <Text size={18} weight={300} align="center">
          Escolha um tema ou <br />
          os nove temas se quiser.
          <br /> Descubra candidatas/os que
          <br /> combinam com você!
        </Text>
        <div className="contentBlock temas">
          {temas.map(tema => (
            <ThemeButton name={tema.name} onChoose={handleTemas} isActive={temasEscolhidos.includes(tema.name)}>
              {tema.label}
            </ThemeButton>
          ))}
        </div>
      </div>
      <div className="contentBlock" style={{ textAlign: `center` }}>
        <Button color="secondary">CONTINUAR</Button>
      </div>
    </Layout>
  )
}

export default IndexPage
