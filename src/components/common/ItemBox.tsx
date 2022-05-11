//import { FC, useEffect, useState, useCallback } from 'react';
import { FC } from 'react';
import { HeadBlock } from '../common/HeadBlock';
import { useNavigate } from "react-router-dom";
import classess from '../../scss/itembox.module.scss';

type Props = {
    itemTitle: string; //画像のタイトル
    itemFileName: string; //画像のファイル名
    itemPath: string; //画像のページのパス
    itemFolder:string; //親ページ名
    itemText?:string; //テキスト内容
};

export const ItemBox: FC<Props> = (props) => {
    const { itemTitle, itemFileName, itemPath, itemFolder, itemText } = props;

    let itemFolderSet:string; //小文字に返還
    let itemUrlPath :string; //ヘッダパスリンク
    let itemImg:string; //画像リンク
    let itemReturnUrl:string; //ひとつ前のリストページに戻るのリンク

    //リンク設定
    if(itemFolder === 'Web' ){
        itemFolderSet = 'web';
        itemUrlPath = '/'+itemFolderSet+'/'+itemPath;
        itemImg = process.env.PUBLIC_URL+'/'+itemFolderSet+'/'+itemFileName;
        itemReturnUrl = '/'+itemFolderSet+'/';
    } else if (itemFolder === 'Illustrations') {
        itemFolderSet = 'illustrations';
        itemUrlPath = '/'+itemFolderSet+'/'+itemPath;
        itemImg = process.env.PUBLIC_URL+'/'+itemFolderSet+'/'+itemFileName;
        itemReturnUrl = '/'+itemFolderSet+'/';
    }

    //HeaderBlockをセット
    function headerBlockSet () {
        return <HeadBlock path={itemUrlPath} title={`${itemTitle} | ${itemFolder}`} description={`${itemTitle} | ${itemFolder}`} />;
    }

    //h1セット
    function h1Set () {
        if(itemFolder === 'Web' ){
            return <h1 className={classess.ch1 + ' ' + classess.w_ch1}><span>{itemFolder}</span></h1>;
        }else if (itemFolder === 'Illustrations') {
            return <h1 className={classess.ch1 + ' ' + classess.i_ch1}><span>{itemFolder}</span></h1>;
        }
    }

    //画像の設定
    function imgSetWidth () {    
        return  <div className={classess.img}><img src={itemImg} alt={itemTitle} /></div>;
    }

    //画像の横のサイズを変更
    /*
    const useWindowResize = () => {
        const [open, setOpen] = useState(false)
      
        useEffect(() => {
          if (window.innerWidth >= 768) {
            setOpen(true)
          }
          resizeEvent()
          return () => window.removeEventListener('resize', resizeEvent);
        }, [])
      
        // 画面をリサイズした時にstate調整
        const resizeEvent = useCallback(() => {
          window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
              setOpen(false)
            } else {
              setOpen(true)
            }
          })
        },[open])
      
        return [ open, setOpen ] as const
    }
    */

    //コメントがあるかないか確認する
    function itemTextSet () {
        let testSet = itemText;
        if(!(testSet)){
            return;
        }else {
            return <p>{testSet}</p>;
        }
    }

    //ひとつ前のリストページに戻る
    const history = useNavigate();

    return (
        <>
        {/*{useWindowResize()}*/}
        {headerBlockSet()}
        {h1Set()}
            <section className={classess.itembox}>
                <article className={classess.resize}>
                    <h2>{itemTitle}</h2>
                    {imgSetWidth()}
                    {itemTextSet()}
                    <div className={classess.backbtn}><button onClick={() => history(-1)}>Return to {itemFolder}</button></div>
                </article>
            </section>
        </>
     );
};


