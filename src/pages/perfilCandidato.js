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

const PerfilCandidatoPage = () => {
  
  return (
    <Layout seoTitle="Perfil Candidaura">      
      <div className="lista-candidatos-sub">
        <div className="lista-candidatos-qtd">
          <Text size={14} family="Lato" weight={400}><strong>37</strong> vereadores</Text>
        </div>

        <div className="lista-candidatos-Filtro">
          <Text size={14} family="Lato" weight={400}>Filtrar</Text>
        </div>
      </div>

        <CardCandidato
          nome={"Fabi Rodrigues"}
          partido={"perifa"}
          uf={"RJ"}
          cidade={"Rio de Janeiro"}
          nota={9.2} 
          hideButton
          foto={"https://cdn.discordapp.com/attachments/748213396993867866/751891144979251383/IMG_20200905_154817_514.jpg"}
        />

      <div className="perfil-candidato-title">
        <Title size={16}>Um pouco sobre a/o candidata/o</Title>
        <Text size={14} family="Lato" weight={300}>Resultado de acordo com os temas que você 
        escolheu! Para alterar seus temas, clique aqui!</Text>
        <Text size={12} family="Lato" weight={400}><a href="#">Continuar lendo</a></Text>
      </div>


      
      <div className="perfil-candidato-title">
        <Title size={16}>Temas prioritários</Title>
        <span className="tema-badge"><Text size={14} family="Montserrat" weight={500}>#Raça</Text></span>
      </div>

      <div className="perfil-candidato-title">
        <Title size={16}>Veja como a Enfermeira Bombeira Thaís se posiciona</Title>
        <Text size={14} family="Lato" weight={300}>Resultado de acordo com os temas que você 
        escolheu! Para alterar seus temas, clique aqui!</Text>
        <Text size={12} family="Lato" weight={400}><a href="#">Continuar lendo</a></Text>
      </div>
    </Layout>
  )
}

export default PerfilCandidatoPage
