import React from 'react';

import {
  Container,
  WrapperLogo,
  EnterpriseLogo,
  GameName,
  WrapperDiscount,
  Discount,
  Price,
  Info,
} from './OfferCard.styles';

const OfferCard: React.FC<{
  accentColor: string;
  gameImg: string;
  bgColor: string;
  logoEnt: string;
  name: string;
  discount: string;
  price: string;
}> = ({ accentColor, gameImg, bgColor, logoEnt, name, discount, price }) => (
  <Container url={gameImg} accentColor={accentColor}>
    <WrapperLogo color={bgColor}>
      <EnterpriseLogo url={logoEnt} />
    </WrapperLogo>
    <Info>
      <GameName>{name}</GameName>
      <WrapperDiscount>
        <Discount accentColor={accentColor}>{discount}</Discount>
        <Price>{price}</Price>
      </WrapperDiscount>
    </Info>
  </Container>
);

export default OfferCard;
