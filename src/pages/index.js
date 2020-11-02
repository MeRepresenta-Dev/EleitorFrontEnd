import React, { useState } from "react"
import { Link } from "gatsby"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"

import uf from '../utils/data/states.json'
import cities from '../utils/data/cities.json'
import Layout from "../components/layout"
import SearchField from "../components/SearchField"
import ThemeButton from "../components/ThemeButton"
import Button from "../components/Button"
import Title from "../components/Title"
import Text from "../components/Text"

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



const IndexPage = () => {
  const [cidades, setCidades] = useState([])
  const [filtros, escolherFiltro] = useState({
    search: '',
    temasEscolhidos: [],
    estado: '',
    cidade: ''
  })

  const handleTemas = tema => {
    const novosTemas = filtros.temasEscolhidos.includes(tema)
      ? filtros.temasEscolhidos.filter(t => t !== tema)
      : [...filtros.temasEscolhidos, tema]
    escolherFiltro({...filtros, temasEscolhidos: novosTemas})
  }

  const handleStates = estado => {
    escolherFiltro({...filtros, estado})
    const idUF = uf.filter(ufState => ufState.abbr === estado)[0].id
    const cids = cities.filter(city => city.state_id === idUF)
    setCidades(cids)
  }

  console.log(filtros)
  return (
    <Layout seoTitle="Eleitor">
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
            <Select label="Selecione um Estado" onChange={(e) => handleStates(e.target.value)}>
              {uf.map(estado => (
                <MenuItem value={estado.abbr}>{estado.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {filtros.estado && (
            <FormControl style={{marginTop: `24px`}} fullWidth variant="outlined">
              <InputLabel style={{ backgroundColor: `#FFF` }}>Selecione uma Cidade</InputLabel>
              <Select label="Selecione uma Cidade" onChange={(e) => escolherFiltro({...filtros, cidade: e.target.value})}>
                {cidades.map(cid => (
                  <MenuItem value={cid.name}>{cid.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
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
            <ThemeButton name={tema.name} onChoose={handleTemas} isActive={filtros.temasEscolhidos.includes(tema.name)}>
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
