import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const TokyoMegane:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = 'Tokyo Megane from Malaysia'
            itemFileName ='tokyo_megane.jpg'
            itemPath = 'tokyo_megane'
            itemFolder = 'Web'
        />
        </>
    );
};