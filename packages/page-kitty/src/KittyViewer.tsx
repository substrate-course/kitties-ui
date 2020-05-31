// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';

import { Kitty } from './types';
import KittyAvatar from './KittyAvatar';

const Wrapper = styled.section``;

const KittyViewer: React.FC = ({ kitties }: { kitties: Array<Kitty> }) => (
  <Wrapper>
    <h1>Substrate Kitties</h1>
    { kitties.length === 0 && 'No kitties'}
    { kitties.map((k) => (
      <KittyAvatar
        dna={k.toU8a()}
        key={k.toHex()}
      />
    )) }
  </Wrapper>
);

export default KittyViewer;
