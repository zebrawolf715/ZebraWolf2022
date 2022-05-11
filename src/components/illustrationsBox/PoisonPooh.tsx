import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const PoisonPooh:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = "Poison Pooh"
            itemFileName = 'poison_pooh.jpg'
            itemPath = 'poison_pooh'
            itemFolder = 'Illustrations'
            //itemText='test test'
        />
        </>
    );
};