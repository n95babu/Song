
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
})
const Footer = () => {
  // debugger;
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className='Footer'>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <a href="https://github.com/n95babu/Song" target='blank'> <BottomNavigationAction value="recents" icon={<GitHubIcon />} /> </a>
      </BottomNavigation>
    </div>
  );
}

export default Footer;