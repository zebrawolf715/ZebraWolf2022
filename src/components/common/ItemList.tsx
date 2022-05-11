import { FC } from 'react';
import { Link } from "react-router-dom";
import classess from '../../scss/itemlist.module.scss';

type Props = {
    itemType: string;
    itemImgNum: number;
    itemListNum: number;
    itemPath?: string;
    itemTitle?: string;
    itemKinds?: string;
};

export const ItemList: FC<Props> = (props) => {
  const { itemType, itemImgNum, itemTitle, itemKinds, itemListNum, itemPath } = props;
  function itemList () {
    let itemSet = itemKinds;
    let itemNum = itemListNum;
    let itemImgLink1:string = process.env.PUBLIC_URL+'/itemlist/item_'+ itemType + itemImgNum +'.jpg'; //itemKindsの中身がない時
    let itemImgLink2:string = process.env.PUBLIC_URL+'/itemlist/item_'+ itemKinds + itemImgNum +'.jpg'; //itemKindsの中身がある時

    //itemKindsの中身があるか確認
    if(!(itemSet)) {
        //画像リストが5で割り切れる時にリストがつく
        if((itemNum % 5) != 0) {
            return <li><Link to={itemPath ?? '#' }><img src={itemImgLink1} alt={itemTitle} /></Link></li>;
        }else{
            return <li className={classess.none_right}><Link to={itemPath ?? '#' }><img src={itemImgLink1} alt={itemTitle} /></Link></li>;
        }
    }else{
        if((itemNum % 5) != 0) {
            return <li><Link to={itemPath ?? '#'}><img src={itemImgLink2} alt={itemTitle} /></Link></li>;
        } else {
            return <li className={classess.none_right}><Link to={itemPath ?? '#'}><img src={itemImgLink2} alt={itemTitle} /></Link></li>;
        }
    }
  }
  return (
    <>
     { itemList() }
    </>
  );
};
