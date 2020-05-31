// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { Button, TxButton } from '@polkadot/react-components';

 type Props = {
   accountId: string | null
 };

const KittyActions: React.FC<Props> = ({ accountId }: Props) => (
  <section>
    <h1>Kitty Actions</h1>
    <div className='ui--row'>
      <div className='large'>
        <Button.Group>
          <TxButton
            accountId={accountId}
            label='Create New Kitty'
            params={[]}
            tx='kitties.create'
          />
        </Button.Group>
      </div>
    </div>
  </section>
);

export default KittyActions;
