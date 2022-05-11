import { FC } from 'react';
import { HeadBlock } from './common/HeadBlock';
import { Link } from "react-router-dom";
import classess from '../scss/notfound.module.scss';

export const NotFound: FC = () => {
  return (
    <>
    <HeadBlock title="NotFound" description="NotFound" path="/notfound" />
    <h1 className={classess.ch1 + ' ' + classess.n_ch1}><span>NotFound</span></h1>
     <section className={classess.notfound}>
         <div>
            <p>The requested URL was not found on this server.</p>
            <aside><Link to={`/`}>Return to ZebraWolf</Link></aside>
        </div>
     </section>
    </>
    );
};