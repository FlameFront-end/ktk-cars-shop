import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function LabelBottomNavigation() {
  const [value, setValue] = useState('Home')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation
      onChange={handleChange}
      sx={{ bottom: 0, display: { sm: 'none', xs: 'flex' }, position: 'fixed', width: '100%' }}
      value={value}
    >
      <BottomNavigationAction component={RouterLink} icon={<HomeIcon />} label="Home" to="/" value="Home" />
      <BottomNavigationAction
        component={RouterLink}
        icon={<AccountCircleIcon />}
        label="Profile"
        to="/profile"
        value="Profile"
      />
    </BottomNavigation>
  )
}
