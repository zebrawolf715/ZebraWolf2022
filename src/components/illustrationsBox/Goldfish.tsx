import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const Goldfish:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = "Goldfish"
            itemFileName =  'goldfish.jpg'
            itemPath = 'goldfish'
            itemFolder = 'Illustrations'
        />
        </>
    );
};