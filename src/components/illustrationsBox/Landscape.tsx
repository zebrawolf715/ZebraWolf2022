import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const Landscape:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = "Landscape"
            itemFileName = 'landscape.jpg'
            itemPath = 'landscape'
            itemFolder = 'Illustrations'
        />
        </>
    );
};