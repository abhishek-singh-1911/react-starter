import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NotFoundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 64px)', // Adjust 64px if you have a header/navbar
  padding: theme.spacing(2), // Use theme spacing
  backgroundColor: theme.palette.background.default,
}));

export const NotFoundHeading = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  textAlign: 'center',
}));

export const NotFoundMessage = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

export const HomeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 3), // Use theme spacing
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));