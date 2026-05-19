import type React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, FormHelperText } from '@mui/material';
import { BOOKING_FORM_CONFIG } from '../../../@pacalo.core/data/constants';

interface FormData {
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
  pickupAddress: string;
  dropoffAddress: string;
  datetime: string;
  serviceType: string;
  returnTrip: string;
  notes: string;
}


const BookingForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      preferredContact: '',
      pickupAddress: '',
      dropoffAddress: '',
      datetime: '',
      serviceType: '',
      returnTrip: '',
      notes: ''
    }
  });

  const onSubmit = (data: FormData) => {
    // Since email field is not available in the new form,
    // we'll include it in the notes section
    const additionalInfo = [];
    if (data.email) additionalInfo.push(`Email: ${data.email}`);
    if (data.notes) additionalInfo.push(`Additional Notes: ${data.notes}`);

    const combinedNotes = additionalInfo.join(' | ');

    const params = new URLSearchParams({
      'usp': 'pp_url',
      [BOOKING_FORM_CONFIG.ENTRIES.NAME]: data.name,
      [BOOKING_FORM_CONFIG.ENTRIES.PHONE]: data.phone,
      [BOOKING_FORM_CONFIG.ENTRIES.PREFERRED_CONTACT]: data.preferredContact,
      [BOOKING_FORM_CONFIG.ENTRIES.PICKUP_ADDRESS]: data.pickupAddress,
      [BOOKING_FORM_CONFIG.ENTRIES.DROPOFF_ADDRESS]: data.dropoffAddress,
      [BOOKING_FORM_CONFIG.ENTRIES.DATETIME]: data.datetime,
      [BOOKING_FORM_CONFIG.ENTRIES.SERVICE_TYPE]: data.serviceType,
      [BOOKING_FORM_CONFIG.ENTRIES.RETURN_TRIP]: data.returnTrip,
      [BOOKING_FORM_CONFIG.ENTRIES.NOTES]: combinedNotes
    });

    window.open(`${BOOKING_FORM_CONFIG.BASE_URL}?${params.toString()}`, '_blank');
  }; return (
    <div className='max-w-3xl mx-auto bg-white rounded-2xl shadow-lg  p-4 sm:p-8'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Request a Ride</h1>
        <p className="text-gray-600">We'll contact you shortly to confirm details</p>
      </div>

      <div className="space-y-6">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{ required: 'Phone is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message || 'Include area code'}
              />
            )}
          />
        </div>

        {/* Email & Preferred Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="preferredContact"
            control={control}
            rules={{ required: 'Preferred contact method is required' }}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.preferredContact}>
                <InputLabel>Preferred Contact Method</InputLabel>
                <Select {...field} label="Preferred Contact Method">
                  <MenuItem value="">Choose...</MenuItem>
                  <MenuItem value="Call">Call</MenuItem>
                  <MenuItem value="Text">Text</MenuItem>
                  <MenuItem value="WhatsApp">WhatsApp</MenuItem>
                  <MenuItem value="Email">Email</MenuItem>
                </Select>
                {errors.preferredContact && (
                  <FormHelperText>{errors.preferredContact.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </div>

        {/* Pickup & Dropoff */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="pickupAddress"
            control={control}
            rules={{ required: 'Pickup address is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Pickup Address"
                fullWidth
                error={!!errors.pickupAddress}
                helperText={errors.pickupAddress?.message || 'Full street address including city'}
              />
            )}
          />
          <Controller
            name="dropoffAddress"
            control={control}
            rules={{ required: 'Drop-off address is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Drop-off Address"
                fullWidth
                error={!!errors.dropoffAddress}
                helperText={errors.dropoffAddress?.message || 'Full street address including city'}
              />
            )}
          />
        </div>

        {/* DateTime & Service Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="datetime"
            control={control}
            rules={{ required: 'Date and time is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Date & Time"
                type="datetime-local"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!errors.datetime}
                helperText={errors.datetime?.message || 'Preferred pickup date and time'}
              />
            )}
          />
          <Controller
            name="serviceType"
            control={control}
            rules={{ required: 'Service type is required' }}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.serviceType}>
                <InputLabel>Service Type</InputLabel>
                <Select {...field} label="Service Type">
                  <MenuItem value="">Choose...</MenuItem>
                  <MenuItem value="Ambulatory">Ambulatory</MenuItem>
                  <MenuItem value="Wheelchair">Wheelchair</MenuItem>
                  <MenuItem value="Stretcher">Stretcher</MenuItem>
                </Select>
                {errors.serviceType ? (
                  <FormHelperText>{errors.serviceType.message}</FormHelperText>
                ) : (
                  <FormHelperText>Select the type of transportation needed</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </div>

        {/* Return Trip */}
        <Controller
          name="returnTrip"
          control={control}
          rules={{ required: 'Please indicate if return trip is needed' }}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.returnTrip}>
              <InputLabel>Return Trip Needed?</InputLabel>
              <Select {...field} label="Return Trip Needed?">
                <MenuItem value="">Choose...</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
              {errors.returnTrip ? (
                <FormHelperText>{errors.returnTrip.message}</FormHelperText>
              ) : (
                <FormHelperText>Do you need a ride back from your appointment?</FormHelperText>
              )}
            </FormControl>
          )}
        />

        {/* Notes */}
        <Controller
          name="notes"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Additional Notes (Optional)"
              multiline
              rows={3}
              fullWidth
              helperText="Any other details we should know?"
            />
          )}
        />

        {/* Submit Button */}
        <div className="flex gap-4 pt-4 flex-wrap items-center">
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#1239e6',
              '&:hover': {
                backgroundColor: '#0f2cc0'
              },
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              paddingX: 4,
              paddingY: 1.5,
              borderRadius: 2
            }}
          >
            Submit Request
          </Button>
          <span className="text-gray-600">
            We confirm same-day when possible
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;