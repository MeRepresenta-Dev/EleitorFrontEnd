import React from "react"
import { Link } from "gatsby"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Layout from "../components/layout"
import CardCandidato from "../components/CardCandidato"
import SearchField from "../components/SearchField"
import Text from "../components/Text"
import Title from "../components/Title"
import Button from "../components/Button"
import faceIcon from "../images/facebook-icon.png"
import questionIcon from "../images/question-icon.png"

const ListaCandidatosPage = () => {
  
  return (
    <Layout seoTitle="Lista de Candidatos">
      <SearchField onSearch={console.log} />
      <div className="lista-candidatos-title">
        <Title>Quem te representa?</Title>
        <Text size={14} family="Lato" weight={300}>Resultado de acordo com os temas que você 
        escolheu! Para alterar seus temas, clique aqui!</Text>
      </div>
      
      <div className="lista-candidatos-sub">
        <div className="lista-candidatos-qtd">
          <Text size={14} family="Lato" weight={400}><strong>37</strong> vereadores</Text>
        </div>

        <div className="lista-candidatos-Filtro">
          <Text size={14} family="Lato" weight={400}>Filtrar</Text>
        </div>
      </div>
      <AliceCarousel
        disableDotsControls
        infinite
        mouseDragEnabled
        responsive={{ 0: { items: 1 }, 1024: { items: 3 } }}
      >
        <CardCandidato
          nome={"Fabi Rodrigues"}
          partido={"perifa"}
          uf={"RJ"}
          cidade={"Rio de Janeiro"}
          nota={9.2} 
          foto={"https://cdn.discordapp.com/attachments/748213396993867866/751891144979251383/IMG_20200905_154817_514.jpg"}
        />
        <CardCandidato
          nome={"Fabi 2"}
          partido={"perifa"}
          uf={"RJ"}
          cidade={"Rio de Janeiro"}
          nota={9.2} 
          foto={"https://cdn.discordapp.com/attachments/748213396993867866/751891144979251383/IMG_20200905_154817_514.jpg"}
        />
      </AliceCarousel>
      
      <div className="lista-candidatos-notes">
        <Text>E se você puder, dá <br />uma força pra gente?</Text>

        <div className="lista-candidatos-actions">
          <Button><img src={questionIcon} /></Button>
          <Button><img src={faceIcon} /></Button>
        </div>
      </div>
    </Layout>
  )
}

export default ListaCandidatosPage
