import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const Carp:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = "Carp"
            itemFileName = 'carp.jpg'
            itemPath = 'carp'
            itemFolder= 'Illustrations'
        />
        </>
    );
};