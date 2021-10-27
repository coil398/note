import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { useAppDispatch, useAppSelector } from '@/store'
import { sideBarSlice } from '@/store/sidebar'

interface Props {
  open: boolean
  list: () => JSX.Element
  toggleSideBar: (open: boolean) => void
}

const Component: React.VFC<Props> = (props) => (
  <>
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.toggleSideBar(false)}
    >
      {props.list()}
    </Drawer>
  </>
)

const Container: React.VFC = () => {
  const open = useAppSelector((state) => state.sideBar.open)

  const dispatch = useAppDispatch()

  const toggleSideBar = (open: boolean) => {
    dispatch(sideBarSlice.actions.toggleSideBar(open))
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      onClick={() => toggleSideBar(false)}
      onKeyDown={() => toggleSideBar(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} onClick={() => toggleSideBar(true)} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return <Component open={open} list={list} toggleSideBar={toggleSideBar} />
}

export default Container
