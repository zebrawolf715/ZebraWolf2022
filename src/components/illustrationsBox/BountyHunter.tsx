import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const BountyHunter:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = "Bounty hunter"
            itemFileName = 'bounty_hunter.jpg'
            itemPath = 'bounty_hunter'
            itemFolder = 'Illustrations'
        />
        </>
    );
};