import { FC } from 'react';
import '../../scss/reset.module.scss';
import '../../scss/base.module.scss';
import '../../scss/common.module.scss';

export const Footer: FC = () => {
    return (
        <footer>
        <div>
            <p>ZebraWolf</p>
                <small>Copyright &copy; ZebraWolf. All Right Reserved.</small>
            </div>
        </footer>
    );
};