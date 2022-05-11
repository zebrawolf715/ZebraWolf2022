import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const Birds:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = 'Birds'
            itemFileName ='birds.jpg'
            itemPath = 'birds'
            itemFolder = 'Illustrations'
        />
        </>
    );
};