import styled from "styled-components";
import {
  HiOutlineHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: row;
`;

export const Codition = styled.div`
  font-size: 14px;
  color: var(--color-gray);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: var(--color-blue);
  flex-shrink: 0;

  margin-left: 16px;
  cursor: pointer;
`;

export const DispatchTag = styled.div`
  margin-top: 12px;
  background: var(--color-blue);
  color: var(--color-white);
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 44px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }
  .cent {
    font-size: 20px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallementsInfo = styled.div`
  font-size: 16px;
`;

export const StockStatus = styled.div`
  font-size: 18px;
  height: 24px;
`;

export const MethodCard = styled.div`
  margin-top: 18px;
  display: flex;

  > div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    .title {
      color: var(--color-green);
      font-size: 16px;
    }
    .details {
      margin-top: 5px;
      color: var(--color-green);
      font-size: 16px;
    }
    .more {
      margin-top: 5px;
      color: var(--color-blue);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const CheckIcon = styled(HiOutlineCheck)`
  width: 24px;
  height: 24px;
  color: var(--color-green);
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;
  margin-top: 10px;
`;

export const Benefits = styled.div``;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;
