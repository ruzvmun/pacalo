import type * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Badge from '@mui/material/Badge'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { MdExplore, MdBookmark, MdLogout, MdSearch } from 'react-icons/md'
import type { NavItem } from './NavButton'
import NavButton from './NavButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Avatar, Menu, MenuItem, Button } from '@mui/material'
import { useAuth } from '@/features/auth/hooks/useAuth'
import { MdApps } from "react-icons/md";
import { IoLibrarySharp } from "react-icons/io5";
import { CreateBoardFab } from './CreateBoardFab';
import { SearchWidget } from '@/features/search/components/SearchWidget'

const drawerWidth = 80
const MOBILE_BREAKPOINT = 'sm'

// Define proper interface for styled components props
interface MainProps {
  open?: boolean
  ismobile: boolean
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
  ismobile: boolean
}

// Custom BottomNavLink component
const BottomNavLink: React.FC<{
  icon: React.ComponentType<{ className?: string }>
  label: string
  path: string
  isActive: boolean
}> = ({ icon: Icon, label, path, isActive }) => {
  return (
    <Link
      to={path}
      className={`flex flex-1 flex-col items-center justify-center px-1 py-2 ${isActive ? 'text-primary-600' : 'text-gray-600'} transition-colors duration-200 ease-in-out hover:text-primary-500 focus:outline-none`}
    >
      <Icon className={`text-2xl ${isActive ? 'text-primary-600' : 'text-gray-600'}`} />
      <span className="mt-1 text-xs">{label}</span>
    </Link>
  )
}

const Main = styled('main', {
  shouldForwardProp: prop => !['open', 'ismobile'].includes(prop as string),
})<MainProps>(({ theme, open, ismobile }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(ismobile
    ? {
      // Mobile: Fixed height that accounts for AppBar (50px) and bottom nav (50px)
      paddingTop: '50px',
      marginLeft: 0,
      overflow: 'auto', // Make only main scrollable
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: '50px', // Leave space for bottom nav
    }
    : {
      paddingTop: '50px',
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => !['open', 'ismobile'].includes(prop as string),
})<AppBarProps>(({ theme, open, ismobile }) => ({
  backgroundColor: '#FFFFFF',
  height: '50px',
  minHeight: '50px',
  borderBottom: `3px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(ismobile
    ? {
      width: '100%',
      zIndex: theme.zIndex.appBar, // Ensure AppBar stays on top
    }
    : {
      ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }),
}))

const Layout: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down(MOBILE_BREAKPOINT))
  const [open] = useState(!isMobile)
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    try {
      await logout()
      handleClose()
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  const navItems: NavItem[] = [
    { icon: MdApps, label: 'Apps', path: '/' },
    { icon: MdExplore, label: 'Explore', path: '/discover' },
    { icon: MdSearch, label: 'Search', path: '/search' },
    { icon: MdBookmark, label: 'Bookmarks', path: '/bookmarks' },
    { icon: IoLibrarySharp, label: 'Library', path: '/library' },
  ]

  const renderBottomNav = () => (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white shadow-lg z-10 h-[50px]">
      <div className="flex h-full items-center justify-around">
        {navItems.map((item, index) => (
          <BottomNavLink
            key={index}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isActive={currentPath === item.path}
          />
        ))}
        <Link to={`/users/${user?.uid}`} style={{ textDecoration: 'none' }}>
          <IconButton>
            <Avatar src={user?.photoURL || undefined} sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Link>
      </div>
    </nav>
  )

  const renderUserSection = () => {
    if (user) {
      return (
        <div className="flex items-center gap-2">
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleMenu}>
            <Avatar src={user.photoURL || undefined} sx={{ width: 32, height: 32 }}>
              {user.displayName?.[0] || user.email?.[0]?.toUpperCase()}
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem disabled>{user.displayName || user.email}</MenuItem>
            <MenuItem onClick={handleLogout}>
              <MdLogout className="mr-2" />
              Logout
            </MenuItem>
          </Menu>
        </div>
      )
    }

    return (
      <div className="flex items-center gap-2">
        <Button color="primary" component={Link} to="/login" className={isMobile ? 'text-sm' : ''}>
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
          className={isMobile ? 'text-sm' : ''}
        >
          Sign up
        </Button>
      </div>
    )
  }

  return (
    <Box className={`flex w-full h-screen overflow-hidden}`}>
      <CssBaseline />
      <AppBar position="fixed" open={open} ismobile={isMobile}>
        <Toolbar className="!min-h-[50px]">
          <div className="flex-grow flex items-center gap-4">
            <Link
              to="/"
              className='no-underline text-gray-600 text-xl md:text-2xl'
            >
              <strong>Pacalo</strong>
            </Link>
            {!isMobile && (
              <div className="flex-1 max-w-md ml-8">
                <SearchWidget
                  placeholder="Search cards..."
                  onSearch={handleSearch}
                  className="w-full"
                />
              </div>
            )}
          </div>
          {renderUserSection()}
        </Toolbar>
      </AppBar>

      {!isMobile && (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div className="mt-16 w-full rounded-lg bg-white p-2 shadow-sm">
            <div className="w-full max-w-2xl space-y-1 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <NavButton key={index} icon={item.icon} label={item.label} path={item.path} />
                ))}
              </div>
            </div>
          </div>
        </Drawer>
      )}

      <Main open={open} ismobile={isMobile} className="flex w-full justify-center">
        <div className='w-full md:p-0'>
          <Outlet />
        </div>
      </Main>

      <CreateBoardFab />

      {isMobile && renderBottomNav()}
    </Box>
  )
}
export default Layout