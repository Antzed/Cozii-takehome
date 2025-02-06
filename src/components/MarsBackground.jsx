import { Box } from '@mui/material';

export default function MarsBackground() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black', 
        background: 'url(/assets/mars_background.svg) no-repeat center center',
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        zIndex: -1,
      }}
    />
  );
}

  