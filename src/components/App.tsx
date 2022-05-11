import { FC } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import '../scss/reset.module.scss';
import '../scss/base.module.scss';
import classess from '../scss/common.module.scss';

import { Home } from './Home';
import { Profile } from './Profile';
import { Web } from './Web';
import { Illustrations } from './Illustrations';
import { Japan } from './Japan';
import { NotFound } from "./NotFound";

import { PoisonPooh } from './illustrationsBox/PoisonPooh';
import { Birds } from './illustrationsBox/Birds';
import { Landscape } from './illustrationsBox/Landscape';
import { GreenAndPinkGirls } from './illustrationsBox/GreenAndPinkGirls';
import { Dragon } from './illustrationsBox/Dragon';
import { Boy } from './illustrationsBox/Boy';
import { Carp } from './illustrationsBox/Carp';
import { ZebraWolfLogo } from './illustrationsBox/ZebraWolfLogo';
import { BorderColliePuppy } from './illustrationsBox/BorderColliePuppy';
import { Goldfish } from './illustrationsBox/Goldfish';
import { MenuMaterial } from './illustrationsBox/MenuMaterial';
//import { BountyHunter } from './illustrationsBox/BountyHunter';
//import { Woman } from './illustrationsBox/Woman';

import { TokyoMegane } from './webBox/TokyoMegane';

export const App: FC = () => {
  return (
    <div className={classess.wrap}>
      <div className={classess.content}>
        <BrowserRouter>
          <Header />
            <Main />
          <Footer />  
        </BrowserRouter>
      </div>
    </div>
  );
};

function Main () {
  return(
    <>
     {/* メインページ */}
     <Routes>   
        <Route  path="/" element={<Home />}  />
        <Route path="profile" element={<Profile />} />
        <Route path="jp" element={<Japan />} />
        <Route path="illustrations/" element={<Illustrations />} />
        <Route path="web/" element={<Web />} />

        {/*　NotFound */}
        <Route path={'/*'} element={<NotFound />} />

        {/*　Web Children */}
        <Route path="web/*" element={<WebList />}>
          <Route path="tokyo_megane" element={<TokyoMegane />} />
        </Route>
        
        {/*　Illustrations Children */}
        <Route path="illustrations/*" element={<IllustrationsList />}>
          <Route path="poison_pooh" element={<PoisonPooh />} />
          <Route path="birds" element={<Birds />} />
          <Route path="landscape" element={<Landscape />} />
          <Route path="green_and_pink_girls" element={<GreenAndPinkGirls />} />
          <Route path="dragon" element={<Dragon />} />
          <Route path="boy" element={<Boy />} />
          <Route path="carp" element={<Carp />} />
          <Route path="zebrawolf_logo" element={<ZebraWolfLogo />} />
          <Route path="border_collie_puppy" element={<BorderColliePuppy />} />
          <Route path="goldfish" element={<Goldfish />} />
          <Route path="menu_material" element={<MenuMaterial />} />
        </Route>

        {/*　Potoshop
        <Route path="/illustrations/bounty_hunter" element={<BountyHunter />} />
        <Route path="/illustrations/woman" element={<Woman />} /> */}
      </Routes>
    </>
  );
}

function IllustrationsList () {
  return(
    <>
    <Outlet />
    </>
  );
}

function WebList () {
  return(
    <>
    <Outlet />
    </>
  );
}
