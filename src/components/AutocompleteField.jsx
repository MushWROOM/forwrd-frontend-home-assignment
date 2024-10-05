import { Autocomplete, TextField } from '@mui/material';
import countryOptions from '../data/countries.json';
import { styled } from '@mui/material/styles';

const StyledAutocomplete = styled(Autocomplete)({
  boxShadow: 'none',
  textTransform: 'none',
  backgroundColor: '#909196',
  borderRadius: '4px',
  width: '100%'
});


const AutocompleteField = ({ value, onChange}) => {
  return        <StyledAutocomplete
    size="small"
    variant="outlined"
    disableClearable
    options={countryOptions}
    value={value}
    onChange={onChange}
    renderInput={(params) => <TextField {...params} fullWidth />}
  />;
};

// TODO: Implement passed props
AutocompleteField.defaultProps = {
  value: '',
  onChange: ()=>{}
};

export default AutocompleteField;
