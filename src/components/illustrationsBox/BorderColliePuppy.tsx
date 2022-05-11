import { FC } from 'react';
import { ItemBox } from '../common/ItemBox';

export const BorderColliePuppy:FC = () => {
    return (
        <>
        <ItemBox
            itemTitle = "Border collie puppy"
            itemFileName ='border_collie_puppy.jpg'
            itemPath = 'border_collie_puppy'
            itemFolder = 'Illustrations'
        />
        </>
    );
};