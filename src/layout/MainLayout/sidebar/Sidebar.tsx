import React from 'react';
import { useMediaQuery, Box, Drawer } from '@mui/material';
import Logo from '../shared/logo/Logo';
import SidebarItems from './SidebarItems';

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }: ItemType) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  const sidebarWidth = '270px';

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor='left'
          open={isSidebarOpen}
          variant='permanent'
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: 'border-box',
              zIndex: 0,
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: '100%',
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box px={3} className='border-b-2'>
              <Logo />
            </Box>
            <Box>
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor='left'
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant='temporary'
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box px={2} className='shadow-md'>
        <Logo />
      </Box>
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;