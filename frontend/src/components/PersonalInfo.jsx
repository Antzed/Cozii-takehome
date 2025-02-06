import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Grid, Card, CardContent, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';

export default function PersonalInfo({ formData, setFormData, nextStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData
  });

  const onSubmit = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '100%', boxShadow: 3, backgroundColor: '#ededed'}}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
            Personal Information
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  {...register('fullName', { required: 'Full name is required' })}
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  InputProps={{
                    startAdornment: <PersonIcon sx={{ color: 'action.active', mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  {...register('dob', { required: 'Date of birth is required' })}
                  error={!!errors.dob}
                  helperText={errors.dob?.message}
                  InputProps={{
                    startAdornment: <CalendarTodayIcon sx={{ color: 'action.active', mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nationality"
                  {...register('nationality', { required: 'Nationality is required' })}
                  error={!!errors.nationality}
                  helperText={errors.nationality?.message}
                  InputProps={{
                    startAdornment: <PublicIcon sx={{ color: 'action.active', mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  InputProps={{
                    startAdornment: <EmailIcon sx={{ color: 'action.active', mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  {...register('phone', { 
                    required: 'Phone is required',
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                      message: 'Invalid phone number'
                    }
                  })}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  InputProps={{
                    startAdornment: <PhoneIcon sx={{ color: 'action.active', mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, py: 1.5, backgroundColor: '#D14D28', '&:hover': { backgroundColor: '#B22222' } }}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}