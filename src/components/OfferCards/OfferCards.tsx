import React, { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';

import { Container, ArrowLeft, ArrowRight } from './OfferCards.styles';
import OfferCard from './OfferCard/OfferCard';
import { steam } from '../../assets/styles/Icons';

const OfferCards: React.FC = () => {
  const [glide] = useState(
    new Glide('.glide', {
      perView: 5,
      breakpoints: {
        768: {
          perView: 3,
        },
      },
      gap: 16,
      bound: true,
    })
  );

  useEffect(() => {
    glide.mount();
  }, []);

  return (
    <Container className='glide'>
      <div className='glide__arrows' data-glide-el='controls'>
        <button
          type='button'
          className='glide__arrow glide__arrow--left'
          data-glide-dir='<'
        >
          <ArrowLeft />
        </button>
      </div>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          <OfferCard
            accentColor='#121212'
            gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
            bgColor='#000'
            logoEnt={steam}
            name='Grand Theft Auto V'
            discount='20%'
            price='R$ 100'
          />{' '}
          <OfferCard
            accentColor='#1BC200'
            gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
            bgColor='#000'
            logoEnt={steam}
            name='Grand Theft Auto V'
            discount='20%'
            price='R$ 100'
          />{' '}
          <OfferCard
            accentColor='#1BC200'
            gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
            bgColor='#000'
            logoEnt={steam}
            name='Grand Theft Auto V'
            discount='20%'
            price='R$ 100'
          />{' '}
          <OfferCard
            accentColor='#1BC200'
            gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
            bgColor='#000'
            logoEnt={steam}
            name='Grand Theft Auto V'
            discount='20%'
            price='R$ 100'
          />{' '}
          <OfferCard
            accentColor='#1BC200'
            gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
            bgColor='#000'
            logoEnt={steam}
            name='Grand Theft Auto V'
            discount='-20%'
            price='R$ 100'
          />{' '}
          <OfferCard
            accentColor='#1BC200'
            gameImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBqbIYZaZEfstssFiKSNtQPetyj8rUYI9ONYRuIaBlpe9v4JoR2-Ova6QHIZuGFDORI&usqp=CAU'
            bgColor='#000'
            logoEnt={steam}
            name='Grand Theft Auto V'
            discount='20%'
            price='R$ 100'
          />
        </ul>
      </div>
      <div className='glide__arrows' data-glide-el='controls'>
        <button
          type='button'
          className='glide__arrow glide__arrow--right'
          data-glide-dir='>'
        >
          <ArrowRight />
        </button>
      </div>
    </Container>
  );
};

export default OfferCards;
