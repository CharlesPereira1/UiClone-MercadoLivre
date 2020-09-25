import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;

  > a {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-blue);
  }

  & + a {
    padding-left: 10px;
    border-left: 1px solid var(--color-border);
  }
`;

export const Painel = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: grid;
  grid-template-columns: 65fr 35fr;
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`;

export const Galery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;

  > img {
    height: 73%;
  }
`;

export const Section = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 48px 32px;

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

export const Description = styled.div``;
export const Info = styled.div``;
export const WarrantySection = styled.div``;
