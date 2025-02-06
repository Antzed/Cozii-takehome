import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Grid, Card, CardContent, Typography, MenuItem } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';

export default function TravelPreferences({ formData, setFormData, nextStep, prevStep }) {
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
            Travel Preferences
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Departure Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  {...register('departureDate', { required: 'Departure date is required' })}
                  error={!!errors.departureDate}
                  helperText={errors.departureDate?.message}
                  InputProps={{
                    startAdornment: <CalendarTodayIcon sx={{ color: 'action.active', mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Return Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  {...register('returnDate', { required: 'Return date is required' })}
                  error={!!errors.returnDate}
                  helperText={errors.returnDate?.message}
                  InputProps={{
                    startAdornment: <CalendarTodayIcon sx={{ color: 'action.active', mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="Accommodation Preference"
                  {...register('accommodation', { required: 'Accommodation preference is required' })}
                  error={!!errors.accommodation}
                  helperText={errors.accommodation?.message}
                >
                  <MenuItem value="Space Hotel">Space Hotel</MenuItem>
                  <MenuItem value="Martian Base">Martian Base</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Special Requests"
                  multiline
                  rows={4}
                  {...register('specialRequests')}
                />
              </Grid>

              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={prevStep}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    backgroundColor: 'transparent',
                    borderColor: '#D14D28',
                    color: '#D14D28',
                    '&:hover': {
                      backgroundColor: '#D14D28',
                      color: 'white',
                      borderColor: '#D14D28',
                    },
                  }}
                >
                  Back
                </Button>
              </Grid>


              <Grid item xs={6}>
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
