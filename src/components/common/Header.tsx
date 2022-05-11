import { FC } from 'react';
import React from 'react';
import { NavLink, Link } from "react-router-dom";
import '../../scss/reset.module.scss';
import '../../scss/base.module.scss';
import classess from '../../scss/common.module.scss';

//モバイルメニュー
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }),
);

export const Header: FC = () => {
    /*
	const setNav = [
        {page:'HOME', url:'/'},
        {page:'Profile', url:'/profile/'},
        {page:'Web', url:'/web/'},
        {page:'Illustrations', url:'/illustrations/'},
        {page:'Contact', url:'/contact/'},
        {page:'Japanese language', url:'/jp/'},
    ];
	function navMobileSet () {
        let menuNavList = [];
        for (let i = 0; i < setNav.length; i++) {
        	if(!(setNav[i].page === 'Japanese language')){
                menuNavList.push(<li><Link to={setNav[i].url}><span>{setNav[i].page}</span></Link></li>)
            }else{
                menuNavList.push(<li className={classess.last}><Link to={setNav[i].url}><span><img src="../images/japan.gif" alt={setNav[i].page} />{setNav[i].page}</span></Link></li>)
            }
		}
		return <ul className="wj-labeled-input switch">{ menuNavList }</ul>;
    }
    */

    return (
		<header className={classess.fixed}>
	        <div>
		        <h1><a href="/"><img src={`${process.env.PUBLIC_URL}/images/logo.gif`} alt="ZebraWolf" /></a></h1>
		        <nav className={classess.pc_nav}>
			        <ul>
				        <li className={classess.nav_index}>
                  <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#666666' : '' })}>Home</NavLink>
                </li>
				        <li className={classess.nav_profile}>
                  <NavLink to="profile" style={({ isActive }) => ({ color: isActive ? '#666666' : '' })}>Profile</NavLink>
                </li>
				        <li className={classess.nav_web}>
                  <NavLink to="web/" style={({ isActive }) => ({ color: isActive ? '#666666' : '' })}>Web</NavLink>
                </li>
				        <li className={classess.nav_illustrations}>
                  <NavLink to="illustrations/" style={({ isActive }) => ({ color: isActive ? '#666666' : '' })}>Illustrations</NavLink>
                </li>
				        <li className={classess.nav_contact}>
                  <a href='https://forms.gle/ir4UokH2PymDmXQJ6' target='_blank'>Contact</a>
                </li>
				        <li className={classess.nav_jp}>
                  <Link to={'/jp'}><img src={`${process.env.PUBLIC_URL}/images/japan.gif`} alt="Japanese language" /></Link>
                </li>
			        </ul>
		        </nav>
            	{MenuListComposition()}
	        </div>
        </header>
    );
};

export default function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
    }, [open]);

    return(
    <>
        <nav className={classess.m_nav}>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                MENU
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
            <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                            <MenuItem onClick={handleClose}><Link to={'/'}>Home</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to={'/profile'}>Profile</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to={'/web/'}>Web</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to={'/illustrations/'}>Illustrations</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to={'/contact'}>contact</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to={'/jp'}>Japanese language</Link></MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
                </Grow>
            )}
            </Popper>
		</nav>
    </>
  );
};