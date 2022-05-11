import { FC } from 'react';

export const Skills: FC = () => {
    function skilSet () {
        //スキルを配列にセット
        let skillsSet:string[] = [
            'HTML5',
            'CSS3',
            'SCSS',
            'JavaScript',
            'TypeScript',
            'React',
            'Go(Golang)',
            'PHP',
            'jQuery',
            'jQuery Mobile',
            'Python',
            'Go(Golang)',
            'SQL',
            'CMS(WordPress and Movable Type)',
            'Cyber Security',
            'Visual Studio Code',
            'Affinity Designer',
            'Affinity Photo',
            'Affinity Publisher'
        ];
        const skillsList = [];
        for (let i = 0; i < skillsSet.length; i++) {
            skillsList.push(<li><span>{ skillsSet[i] }</span></li>)
        }
        return <ul>{ skillsList }</ul>;
    }
    return (
        <>
        { skilSet() }
        </>
    );
};