import React from "react"
import StyledCardCandidato from "./CardCandidato.style"
import Title from '../Title';
import Text from '../Text';
import Button from '../Button';

type CardCandidatoProps = {
  nome: string
  partido: string
  nota: number
  uf: string
  cidade: string
  foto: string
}

const InfoDetail = ({label, value}) => (
  <div className="detail">
    <div className="label"><Text size={12} family="Lato" weight={300}>{label}</Text></div>
    <div className="value"><Text size={12} family="Lato" weight={label === 'nota coligação' ? 800 : 400}>{value}</Text></div>
  </div>
)

const CardCandidato = ({ nome, partido, nota, uf, cidade, foto }: CardCandidatoProps) => (
  <StyledCardCandidato className="CardCandidato" data-testid="CardCandidato">
    <div className="card">
      <div className="avatar">
        <img src={foto} alt={`Foto de ${nome}`} />
      </div>
      <div className="info">
        <Title level="h3" size={16}>{nome}</Title>
        <InfoDetail label="partido" value={partido} />
        <InfoDetail label="nota coligação" value={nota} />
        <InfoDetail label="estado" value={uf} />
        <InfoDetail label="cidade" value={cidade} />
      </div>
    </div>
    <div className="action">
      <Button color="secondary">Ver Perfil Completo</Button>
    </div>
  </StyledCardCandidato>
)

export default CardCandidato
