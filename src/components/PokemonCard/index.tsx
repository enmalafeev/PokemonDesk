import React from 'react';

import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
  attack: number;
  defense: number;
  types: string[];
  src: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, attack, defense, types, src }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading priority={3} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={s.label}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={src} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
