// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import KittyAvatar from './KittyAvatar';
import withKitty, { Props } from './withKitty';

const LoadKittyAvatar = ({ kitties_kitties: kitty }: Props) =>
  (kitty && kitty.isSome) ? <KittyAvatar dna={kitty.unwrap().toU8a()} /> : <div>Loading...</div>;

export default withKitty(LoadKittyAvatar);
