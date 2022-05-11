import { FC } from 'react';
import { Route } from "react-router-dom";
import { Home } from '../Home';
import { Profile } from '../Profile';
import { Illustrations } from '../Illustrations';
import { Japan } from '../Japan';
//Illustrations Page Path
import { PoisonPooh } from '../illustrationsBox/PoisonPooh';
import { Birds } from '../illustrationsBox/Birds';
import { Landscape } from '../illustrationsBox/Landscape';
import { GreenAndPinkGirls } from '../illustrationsBox/GreenAndPinkGirls';
import { Dragon } from '../illustrationsBox/Dragon';
import { Boy } from '../illustrationsBox/Boy';
import { Carp } from '../illustrationsBox/Carp';
import { ZebraWolfLogo } from '../illustrationsBox/ZebraWolfLogo';
import { BorderColliePuppy } from '../illustrationsBox/BorderColliePuppy';
import { Goldfish } from '../illustrationsBox/Goldfish';
import { MenuMaterial } from '../illustrationsBox/MenuMaterial';
//import { BountyHunter } from './illustrationsBox/BountyHunter';
//import { Woman } from './illustrationsBox/Woman';
//NotFound
import { NotFound } from "../NotFound";

export const Router: FC = () => {
  //const homeUrl: string = process.env.PUBLIC_URL;
    return (
            <>
            
                {/* メインページ */}
                <Route  path="/" element={<Home />}  />
                <Route path="profile" element={<Profile />} />
                <Route path="jp" element={<Japan />} />
                
                {/*　IllustrationsのChildrenページ
                Illustrator */}
                <Route path="illustrations/*" element={<Illustrations />}>
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
  
                {/*　NotFound */}
                <Route path={'/*'} element={<NotFound />} />
          </>
    );
  };

