'use client';
import { useState, forwardRef } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import { invalidEmail, maxLength, noSpecialCharacters } from '@/utils/formValidations';
import styles from './contactMeForm.module.css';
import { Box } from '@ui/Box';
import { TextField } from '@ui/TextField';
import { SendIco } from '@icons/SendIco';
import { Snackbar } from '@ui/Snackbar';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ContactMeForm = () => {
  const [disableButton, setDisableButton] = useState(true);
  const [sending, setSending] = useState(false);
  const [snackBar, setSnackBar] = useState({ open: false, severity: '', message: '' });
  const [formValues, setFormValues] = useState(new Map());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    //todo use hook useFormControl https://mui.com/material-ui/react-text-field/
    //todo sobreescribir estilos para el email cuando es autofilled
    let nameErrors = `${noSpecialCharacters(formValues.get('name')?.value)} ${maxLength(
      formValues.get('name')?.value,
      50
    )}`.trim();
    let emailErrors = `${invalidEmail(formValues.get('email')?.value)} ${maxLength(
      formValues.get('email')?.value,
      74
    )}`.trim();
    let messageError = maxLength(formValues.get('message')?.value, 255);
    let tempFormValues = new Map(formValues);
    let errorFlag = false;

    if (nameErrors.length) {
      tempFormValues.set('name', {
        ...tempFormValues.get('name'),
        error: true,
        helperText: nameErrors
      });
      errorFlag = true;
    }
    if (emailErrors.length) {
      tempFormValues.set('email', {
        ...tempFormValues.get('email'),
        error: true,
        helperText: emailErrors
      });
      errorFlag = true;
    }
    if (messageError) {
      tempFormValues.set('message', {
        ...tempFormValues.get('message'),
        error: true,
        helperText: messageError
      });
      errorFlag = true;
    }

    if (errorFlag) {
      setFormValues(tempFormValues);
    } else {
      console.log('sendding');
      setSending(true);
      fetch('/api/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formValues.get('name').value,
          email: formValues.get('email').value,
          message: formValues.get('message').value
        })
      })
        .then(res => {
          setSending(false);
          if (res.status === 200) {
            setSnackBar({ open: true, severity: 'success', message: 'Message sent successfully' });
            setFormValues(new Map());
            setDisableButton(true);
            return;
          }
          setSnackBar({
            open: true,
            severity: 'error',
            message: 'There was an error sending the message, please try again later'
          });
        })
        .catch(() => {
          setSending(false);
          setSnackBar({
            open: true,
            severity: 'error',
            message: 'There was an error sending the message, please try again later'
          });
        });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setFormValues(new Map(formValues.set(field, { value: e.target?.value || '', error: false, helperText: '' })));
    if (formValues.get('name')?.value && formValues.get('email')?.value && formValues.get('message')?.value) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const onBlur = (field: string) => {
    if (!formValues.get(field)?.value) {
      setFormValues(
        new Map(
          formValues.set(field, {
            ...formValues.get(field),
            error: true,
            helperText: 'Required.'
          })
        )
      );
    }
  };

  const handleCloseSnackBar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackBar({ open: false, severity: '', message: '' });
  };

  //todo create a component text field to avoid repetition of code
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { my: 2 },
        '& .Mui-focused': { color: 'white !important' },
        width: { xs: '100%', md: '60%' }
      }}
      noValidate
      autoComplete="off"
      onSubmit={e => handleSubmit(e)}
    >
      <TextField
        label="Name"
        value={formValues.get('name')?.value || ''}
        fullWidth
        required
        error={formValues.get('name')?.error === true}
        helperText={formValues.get('name')?.helperText || ''}
        variant="filled"
        onChange={e => onChange(e, 'name')}
        onBlur={() => onBlur('name')}
      />
      <TextField
        label="Email"
        value={formValues.get('email')?.value || ''}
        fullWidth
        required
        error={formValues.get('email')?.error === true}
        helperText={formValues.get('email')?.helperText || ''}
        variant="filled"
        type="email"
        onChange={e => onChange(e, 'email')}
        onBlur={() => onBlur('email')}
      />
      <TextField
        label="What are you interested in?"
        value={formValues.get('message')?.value || ''}
        fullWidth
        required
        error={formValues.get('message')?.error === true}
        helperText={formValues.get('message')?.helperText || ''}
        variant="filled"
        multiline
        rows={8}
        onChange={e => onChange(e, 'message')}
        onBlur={() => onBlur('message')}
      />
      <LoadingButton
        className={styles.contactMeFormLoadingButton}
        variant="contained"
        color="secondary"
        size="large"
        type="submit"
        disabled={disableButton}
        loading={sending}
        loadingPosition="end"
        endIcon={<SendIco />}
      >
        Send
      </LoadingButton>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackBar.open}
        onClose={handleCloseSnackBar}
        autoHideDuration={8000}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={snackBar.severity === 'success' ? 'success' : snackBar.severity === 'error' ? 'error' : undefined}
          className={styles.contactMeSnackbar}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
