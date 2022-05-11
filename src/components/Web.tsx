import { FC } from 'react';
import { HeadBlock } from './common/HeadBlock';
import { ItemList } from './common/ItemList';
import '../scss/reset.module.scss';
import '../scss/base.module.scss';
import classess from '../scss/itemlist.module.scss';

export const Web: FC = () => {
    let pageType: string = 'web';
    let itemNum:number;
    let webNum: number = 1;
    //自動的に番号がつく関数
    function webAdd () {
        return webNum++;
    }
    return (
        <>
        <HeadBlock title="Web" description="Web" path="/web/" />
        <h1 className={classess.ch1 + ' ' + classess.w_ch1}><span>Web</span></h1>
        <section className={classess.itemlist}>
            <div>
                <h2>Works</h2>
                <ul>
                    <ItemList
                        itemTitle="Tokyo Megane from Malaysia"
                        itemPath='tokyo_megane'
                        itemImgNum={itemNum=1}
                        itemListNum={webAdd()} itemType={pageType} />
                </ul>
            </div>
        </section>
        </>
    );
};

