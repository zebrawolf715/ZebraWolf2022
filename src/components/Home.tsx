import { FC } from 'react';
import { Link } from "react-router-dom";
import '../scss/reset.module.scss';
import '../scss/base.module.scss';
import classess from '../scss/home.module.scss';

export const Home: FC = () => {
    
    return (
        <>
        <div>
            <section className={classess.index_top}>
                <div className={classess.box}>
                    <div>
                        <h1>ZebraWolf</h1>
                        <p>I am Japanese.</p>
                        <aside><img src={`${process.env.PUBLIC_URL}/images/topcg.gif`} alt="舞子さん" /></aside>
                    </div>
                </div>
            </section>
        <nav className={classess.index_nav}>
            <ul>
 	            <li className={classess.index_nav01}><Link to="profile">Profile</Link></li>
 	            <li className={classess.index_nav02}><Link to="web/">Web</Link></li>
 	            <li className={classess.index_nav03}><Link to="illustrations/">Illustrations</Link></li>
 	            <li className={classess.index_nav04}><a href='https://forms.gle/ir4UokH2PymDmXQJ6' target='_blank'>Contact</a></li>
            </ul>
        </nav>
        <section className={classess.index_about}>
            <div>
                <h2>Welcome to my portfolio site!</h2>
                <p>I was a Web developer and a Designer from Japan.</p>
                <p>I created this site using React, TypeScript and SCSS.</p>
                <p>Previously I had made it using WordPress.</p>
                <p>I'm looking for a new job.</p>
                <aside><img src={`${process.env.PUBLIC_URL}/images/top_logo.gif`} alt="Zebra Wolf" /></aside></div>
        </section>
    </div>
    </>
    );
};