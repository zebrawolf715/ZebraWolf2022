import { FC } from 'react';
import { HeadBlock } from './common/HeadBlock';
import { ItemList } from './common/ItemList';
import { Outlet } from 'react-router-dom';
import '../scss/reset.module.scss';
import '../scss/base.module.scss';
import classess from '../scss/itemlist.module.scss';

export const Illustrations:FC = () => {
    //ページ振り分け
    let pageType: string = 'illustrations';

    //ソフト名
    let itemKindsSet1:string = 'illustrator';
    //let itemKindsSet2:string = 'photoshop';

    //画像のファイル番号
    let itemNum:number;

    //自動的に番号を振り分け
    let illustratorNum: number = 1;
    //let photoshopNum: number = 1;
    function illustratorAdd () {
        return illustratorNum++;
    }
    /*
    function photoshopAdd () {
        return photoshopNum++;
    }
    */
    return (
        <>
        <HeadBlock title="Illustrations" description="Illustrations" path="/illustrations/" />
        <h1 className={classess.ch1 + ' ' + classess.i_ch1}><span>Illustrations</span></h1>
        <section className={classess.itemlist}>
            <div>
                <h2>Illustrator</h2>
                <ul>
                    <ItemList
                        itemTitle="Poison Pooh"
                        itemPath="poison_pooh"
                        itemImgNum={itemNum=1}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Birds"
                        itemPath="birds"
                        itemImgNum={itemNum=2}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Landscape"
                        itemPath="landscape"
                        itemImgNum={itemNum=3}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Green And Pink Girls"
                        itemPath='green_and_pink_girls'
                        itemImgNum={itemNum=4}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Dragon"
                        itemPath='dragon'
                        itemImgNum={itemNum=5}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Boy"
                        itemPath='boy'
                        itemImgNum={itemNum=6}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Carp"
                        itemPath='carp'
                        itemImgNum={itemNum=7}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="ZebraWolf Logo"
                        itemPath='zebrawolf_logo'
                        itemImgNum={itemNum=8}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Border collie puppy"
                        itemPath='border_collie_puppy'
                        itemImgNum={itemNum=9}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Goldfish"
                        itemPath='goldfish'
                        itemImgNum={itemNum=10}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Menu material"
                        itemPath='menu_material'
                        itemImgNum={itemNum=11}
                        itemKinds={itemKindsSet1} itemListNum={illustratorAdd()} itemType={pageType} />
                </ul>
            </div>
            {/*
            <div>
                <h2>Photoshop</h2>
                <ul>
                    <ItemList
                        itemTitle="Bounty hunter"
                        itemPath='bounty_hunter'
                        itemImgNum={itemNum=1}
                        itemKinds={itemKindsSet2} itemListNum={photoshopAdd()} itemType={pageType} />
                    <ItemList
                        itemTitle="Woman"
                        itemPath='woman'
                        itemImgNum={itemNum=2}
                        itemKinds={itemKindsSet2} itemListNum={photoshopAdd()} itemType={pageType} />
                </ul>
           
            </div>
             */}
        </section>
        <Outlet />
        </>
    );
};