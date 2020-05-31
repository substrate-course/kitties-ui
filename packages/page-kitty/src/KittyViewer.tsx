// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable camelcase */

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/react-api/hoc';

import LoadKittyAvatar from './LoadKittyAvatar';

const Wrapper = styled.section``;

type Props = {
  kitties_kittiesCount?: BN
};

const KittyViewer: React.FC<Props> = ({ kitties_kittiesCount }: Props) => {
  const count = kitties_kittiesCount ? kitties_kittiesCount.toNumber() : 0;
  const kitties = [];

  for (let i = 0; i < count; ++i) {
    kitties.push(
      <LoadKittyAvatar
        key={i}
        kittyId={new BN(i)}
      />
    );
  }

  return (
    <Wrapper>
      <h1>Substrate Kitties</h1>
      <h2>
          Total kitties count: {count}
      </h2>
      { kitties }
    </Wrapper>
  );
};

export default withCalls<Props>(
  'query.kitties.kittiesCount'
)(KittyViewer);
