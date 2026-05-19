import type React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, FormHelperText } from '@mui/material';
import { BOOKING_FORM_CONFIG } from '../../../@pacalo.core/data/constants';

type FormData = {
  pickupAddress: string;
  datetime: string;
  serviceType: string;
};

const BookingBar: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      pickupAddress: '',
      datetime: '',
      serviceType: '',
    }
  });

  // == YOUR ORIGINAL SUBMIT FLOW ==
  const onSubmit = (data: FormData) => {
    const params = new URLSearchParams({
      usp: 'pp_url',
      [BOOKING_FORM_CONFIG.ENTRIES.PICKUP_ADDRESS]: data.pickupAddress, // Pickup Address
      [BOOKING_FORM_CONFIG.ENTRIES.DATETIME]: data.datetime,           // DateTime
      [BOOKING_FORM_CONFIG.ENTRIES.SERVICE_TYPE]: data.serviceType,    // Service Type
    });
    window.open(`${BOOKING_FORM_CONFIG.BASE_URL}?${params.toString()}`, '_blank');
  };

  return (
    <section aria-label="Quick booking bar" className="px-4 py-4 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-gray-200 shadow-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_auto] gap-3 md:gap-4 items-stretch"
          >
            {/* Pickup Location */}
            <div className="flex-1">
              <Controller
                name="pickupAddress"
                control={control}
                rules={{ required: 'Pickup location is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Pickup Location"
                    fullWidth
                    size="medium"
                    error={!!errors.pickupAddress}
                    helperText={errors.pickupAddress?.message}
                  />
                )}
              />
            </div>

            {/* Pickup Date */}
            <div className="flex-1">
              <Controller
                name="datetime"
                control={control}
                rules={{ required: 'Pickup date is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Pickup Date"
                    type="date"
                    size="medium"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.datetime}
                    helperText={errors.datetime?.message}
                  />
                )}
              />
            </div>

            {/* Vehicle / Service Type */}
            <div className="flex-1">
              <FormControl fullWidth size="medium" error={!!errors.serviceType}>
                <InputLabel>Vehicle</InputLabel>
                <Controller
                  name="serviceType"
                  control={control}
                  rules={{ required: 'Vehicle is required' }}
                  render={({ field }) => (
                    <Select {...field} label="Vehicle">
                      <MenuItem value="">Choose...</MenuItem>
                      <MenuItem value="Mini Van">Mini Van</MenuItem>
                      <MenuItem value="SUV">SUV</MenuItem>
                      <MenuItem value="Sedan">Sedan</MenuItem>
                    </Select>
                  )}
                />
                {errors.serviceType && (
                  <FormHelperText>{errors.serviceType.message}</FormHelperText>
                )}
              </FormControl>
            </div>

            {/* Submit (BOOK VEHICLE) */}
            <div className="flex md:self-stretch">
              <Button
                type="submit"
                variant="contained"
                className="bg-pacalo-blue hover:bg-blue-700 text-white font-semibold rounded-xl h-[52px] md:h-auto w-full md:w-auto px-6 md:px-8 normal-case shadow-md"
              >
                Book Vehicle
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingBar;
