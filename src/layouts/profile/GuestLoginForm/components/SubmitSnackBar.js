import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MDButton from 'components/MDButton';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '30%',paddingLeft:'230px' }}>
     <MDButton
onClick={handleClick}
    variant="gradient"

    color="info"

    size="medium"

    style={{ borderRadius: "120px" }}

  >

    Submit

  </MDButton>
      <Snackbar open={open} autoHideDuration={1000} onClick={handleClose}>
        <Alert onClick={handleClose} severity="success" sx={{ width: '100%' }}>
          Room allocated sucessfully!
        </Alert>
      </Snackbar>
     
     
    </Stack>
  );
}
