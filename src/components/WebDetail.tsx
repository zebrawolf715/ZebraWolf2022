import { FC } from 'react';
import { ItemBox } from './common/ItemBox';

export const WebDetail :FC = () => {
    return (
        <>
        <TokyoMegane />
        </>
    );
};

function TokyoMegane () {
    return(
        <>
        <ItemBox
            itemTitle = 'Tokyo Megane from Malaysia'
            itemFileName ='tokyo_megane.jpg'
            itemPath = 'tokyo_megane'
            itemFolder = 'Web'
        />
        </>
    );
}