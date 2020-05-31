// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable camelcase */

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/react-api/hoc';

import { Kitty } from './types';
import KittyAvatar from './KittyAvatar';

const Wrapper = styled.section``;

type Props = {
  kitties_kittiesCount: BN
};

const KittyViewer: React.FC<Props> = ({ kitties_kittiesCount: count }: Props) => (
  <Wrapper>
    <h1>Substrate Kitties</h1>
    {/* { kitties.length === 0 && 'No kitties'}
    { kitties.map((k) => (
      <KittyAvatar
        dna={k.toU8a()}
        key={k.toHex()}
      />
    )) } */}
    kitty count: {count && count.toString()}
  </Wrapper>
);

export default withCalls<Props>(
  'query.kitties.kittiesCount'
)(KittyViewer);
