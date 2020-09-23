import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import {
  Container,
  Row,
  Painel,
  Info,
  WarrantySection,
  Column,
  Galery,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Painel>
        <Column>
          <Galery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Galery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}
          {/* <SellerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Painel>
    </Container>
  );
};

export default Product;
