// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';
import { AddressMini } from '@polkadot/react-components';
import { u8aToHex } from '@polkadot/util';
import { Balance } from '@polkadot/types/interfaces';
import { Option } from '@polkadot/types';

import KittyAvatar from './KittyAvatar';
import withKitty, { Props } from './withKitty';

const Wrapper = styled.div`
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 333px;
`;

const StyledKittyAvatar = styled(KittyAvatar)`
  margin: auto;
`;

const Line = styled.div`
  height: 2px;
  background: #eee;
  margin: 10px -10px;
`;

type PriceProps = {
  price?: Option<Balance>;
};

const Price: React.FC<PriceProps> = ({ price }: PriceProps) => {
  if (price && price.isSome) {
    const value = price.unwrap();

    return <label>Price: {value}</label>;
  }

  return <label>Not for sale</label>;
};

const KittyCard: React.FC<Props> = ({ kitty, kittyId, owner, price }: Props) => {
  if (kitty && kitty.isSome) {
    const dna = kitty.unwrap().toU8a();

    return (
      <Wrapper>
        <StyledKittyAvatar dna={dna} />
        <Line />
        <label>Kitty ID: {kittyId.toString()}</label>
        <label>
           Owner:
          <AddressMini
            value={owner && owner.unwrap()}
          />
        </label>
        <label>DNA: {u8aToHex(dna)}</label>
        <Price price={price}/>
      </Wrapper>
    );
  }

  return <div>Loading...</div>;
};

export default withKitty(KittyCard);
