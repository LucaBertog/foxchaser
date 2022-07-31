/* eslint-disable react/no-children-prop */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container, ArrowLeft, ArrowRight } from './OfferCards.styles';
import OfferCard from './OfferCard/OfferCard';
import { steam } from '../../assets/styles/Icons';

const OfferCards: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 6,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1400, min: 768 },
      items: 4,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <Container>
      <Carousel responsive={responsive} keyBoardControl>
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
        <OfferCard
          accentColor='#121212'
          gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
          bgColor='#000'
          logoEnt={steam}
          name='Grand Theft Auto V'
          discount='20%'
          price='R$ 100'
        />
      </Carousel>
    </Container>
  );
};

export default OfferCards;
