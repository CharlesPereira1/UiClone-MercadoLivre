import React from "react";

import { Container, Codition } from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Codition>Novo</Codition>

      <Row>
        <h1>Camiseta Branca de Marca Desconhecida</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">325</span>
          <span className="cent">99</span>
        </PriceRow>

        <InstallementsInfo>em 3x de R$ 115,69</InstallementsInfo>
      </PriceCard>
    </Container>
  );
};

export default ProductAction;
