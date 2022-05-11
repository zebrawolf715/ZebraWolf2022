import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const Dragon:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = "Dragon"
            itemFileName = 'dragon.jpg'
            itemPath = 'dragon'
            itemFolder = 'Illustrations'
        />
        </>
    );
};