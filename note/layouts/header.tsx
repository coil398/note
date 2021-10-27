import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { sideBarSlice } from '@/store/sidebar'

interface Props {
  open: () => void
}

const Component: React.VFC<Props> = (props) => (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => props.open()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Articles
          </Typography>
          <Button color="inherit" sx={{ flexGrow: 0 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>
)

const Container: React.VFC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const open = () => {
    dispatch(sideBarSlice.actions.toggleSideBar(true))
  }

  return <Component open={open} />
}

export default Container
