import { FC } from 'react';
import { HeadBlock } from './common/HeadBlock';
import { Skills } from './common/Skills';
import '../scss/reset.module.scss';
import '../scss/base.module.scss';
import classess from '../scss/profile.module.scss';

export const Profile: FC = () => {
    return (
        <>
        <HeadBlock title="Profile" description="About me | Profile" path="/profile" />
            <h1 className={classess.ch1 + ' ' + classess.p_ch1}><span>Profile</span></h1>
            <section className={classess.prof}>
                <div>
                    <h2>About me</h2>
                    <dl>
 	                    <dt><img src={`${process.env.PUBLIC_URL}/images/prof.gif`} alt="Baru(Border Collie)" /></dt>
 	                    <dd>My name is Baru(Internet name).<br />
                        I was a Web developer and a Designer from Japan.<br />
                        I graduated with a major in Management and Information Science at University. At the same time, I learned Web Design in a vocational school.<br />
                        Therefore,  my skills are programs, designs and drawings. I'm also interested in Cyber Security.<br />
                        And I used to use Dreamweaver, Photoshop, Illustrator and Fireworks at work. But now I'm using Visual Studio Code and Affinity.<br />
                        Currently I am improving my skills daily and I am self-studying using books and online resources until now. I've been studying React, TypeScript, Go (Golang), Cyber Security lately.</dd>
                    </dl>
                    <Skills />
                </div>
            </section>
            <section className={classess.education + ' ' + classess.profbox}>
                <div>
                    <h3>Education</h3>
                    <p>I started making websites when I was in Junior High School. Since then, web design and illustration have become my hobbies.</p>
                    <p>At first, I wanted to take up Film and Web Design as a major. However, my parents told me to take up Programming and Networking instead. As a result, I graduated with a major of Management and Information science. At the same time, I studied a vocational course on Web Design for 6 months.</p>
                </div>
            </section>
            <section className={classess.work + ' ' + classess.profbox}>
                <div>
                    <h3>Work experience</h3>
                    <p>In 2009, I started my first job as a Front End Developer for a private IT company in Nagoya, Japan where I worked for four and a half years. In 2012, I won the best coder award in my company.</p>
                    <p>I did a 2 months internship working as a UI Designer and a Front End Developer for a local company in Malaysia. I was able to work in an English speaking environment. Unfortunately, halfway though my internship, I was robbed on my way to the office. After that incident I was transferred to a remote location, where I worked from home.</p>
                </div>
            </section>
            <section className={classess.philippines + ' ' + classess.profbox}>
                <div>
                    <h3>Studying English in the Philippines</h3>
                    <p>In September 2013, I left for the Philippines to study English in Baguio city for 3 months. For the first two months, I learned Basic English conversation and for my final term, I had lessons in Basic English and Business English.</p>
                </div>
            </section>
            <section className={classess.taiwan + ' ' + classess.profbox}>
                <div>
                    <h3>My visit to Taiwan</h3>
                    <p>In March 2014, I went to Taiwan for sightseeing for a month. I stayed in the shared house in Taipei and the host was Taiwanese. I had one week to tour Tainan and Kaohsiung. Staying in the shared house in Taipei was a very good experience because I met a lot of different people from many countries. As I was living with many different nationalities, I was able to speak English everyday. I also went to many Chinese museums in Taiwan. Therefore, I was able to experience a lot of Chinese culture.</p>
                </div>
            </section>
            <section className={classess.learn + ' ' + classess.profbox}>
                <div>
                    <h3>About illness recovery and self-study</h3>
                    <p>After Malaysia, I got carpal tunnel syndrome. Therefore, I had surgery. However, after surgery, I got the aftereffects of the operation. So I couldn't work for a long time because I couldn't use my arm. But I have finally recovered by rehabilitation recently. I'm so happy!</p>
                    <p>In April 2020, I was planning to go to study abroad to become an AI Engineer again, but I quit it because of the COVID-19. I was studying Python and English in preparation for studying abroad.<br />
                    In November and December 2021, I passed the exam of the cyber security basic and advanced course at an online seminar from R-PAC.<br />
                    I like learning new programming languages. I am currently studying React, TypeScript and Go (Golang) on my own using books and online resources. And I study English and Chinese as a hobby using Duolingo everyday.</p>
                </div>
            </section>
        </>
    );
};