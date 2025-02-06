import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Grid, Card, CardContent, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export default function HealthSafety({ formData, setFormData, prevStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData
  });

  const onSubmit = async (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    // Submit to backend
    try {
      await axios.post(`/api/applications`, formData);
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '100%', boxShadow: 3, backgroundColor: '#ededed'}}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
            Health & Safety
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl component="fieldset" error={!!errors.healthDeclaration}>
                  <FormLabel component="legend">Health Declaration *</FormLabel>
                  <RadioGroup row {...register('healthDeclaration', { required: 'Health declaration is required' })}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                  {errors.healthDeclaration && (
                    <span style={{ color: '#d32f2f', fontSize: '0.75rem' }}>
                      {errors.healthDeclaration.message}
                    </span>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Emergency Contact Name"
                  {...register('emergencyName', { required: 'Emergency name is required' })}
                  error={!!errors.emergencyName}
                  helperText={errors.emergencyName?.message}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Emergency Contact Phone"
                  {...register('emergencyPhone', { 
                    required: 'Emergency phone is required',
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                      message: 'Invalid phone number'
                    }
                  })}
                  error={!!errors.emergencyPhone}
                  helperText={errors.emergencyPhone?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Relationship"
                  {...register('relationship', { required: 'Relationship is required' })}
                  error={!!errors.relationship}
                  helperText={errors.relationship?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Medical Conditions (if any)"
                  multiline
                  rows={3}
                  {...register('medicalConditions')}
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
                  sx={{
                    mt: 2,
                    py: 1.5,
                    backgroundColor: '#D14D28',
                    '&:hover': { backgroundColor: '#B22222' },
                  }}
                >
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
