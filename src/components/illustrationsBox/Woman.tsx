import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const Woman:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = "Woman"
            itemFileName = 'woman.jpg'
            itemPath = 'woman'
            itemFolder = 'Illustrations'
        />
        </>
    );
};