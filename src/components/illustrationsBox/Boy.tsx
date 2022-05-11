import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const Boy:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = "Boy"
            itemFileName = 'boy.jpg'
            itemPath = 'boy'
            itemFolder = 'Illustrations'
        />
        </>
    );
};