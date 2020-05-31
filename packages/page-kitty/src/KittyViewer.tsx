// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/react-api/hoc';

import KittyCard from './KittyCard';

const Wrapper = styled.section``;
const KittiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  kittiesCount?: BN
};

const KittyViewer: React.FC<Props> = ({ kittiesCount }: Props) => {
  const count = kittiesCount ? kittiesCount.toNumber() : 0;
  const kitties = [];

  for (let i = 0; i < count; ++i) {
    kitties.push(
      <KittyCard
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
      <KittiesWrapper>
        { kitties }
      </KittiesWrapper>
    </Wrapper>
  );
};

export default withCalls<Props>(
  ['query.kitties.kittiesCount', { propName: 'kittiesCount' }]
)(KittyViewer);
