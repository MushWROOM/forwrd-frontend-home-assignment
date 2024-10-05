import { Grid } from '@mui/material';
import { useState } from 'react';

import InputField from '../../../components/InputField';
import TrashIconButton from '../../../components/TrashIconButton';
import AutocompleteField from '../../../components/AutocompleteField.jsx';
import { UserRowUtils } from './user-row.utils.js';


const UserRow = ({ user, onDelete, onUserUpdate }) => {
  const [editableUser, setEditableUser] = useState(user);
  const [errors, setErrors] = useState({});

  const handleFieldChange = (field, value) => {
    const updatedUser = { ...editableUser, [field]: value };
    setEditableUser(updatedUser);
    // onUserUpdate(updatedUser);
    setErrors( UserRowUtils.validateUser(updatedUser))
  };

  return (
    <Grid container spacing={2} alignItems="center" py={1}>
      <Grid item xs={3}>
        <InputField
          fullWidth
          error={errors.name}
          label="Name"
          value={editableUser.name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <AutocompleteField
          value={editableUser.country}
          error={errors.country}
          onChange={(event, newValue) => {
            handleFieldChange("country", newValue || "");
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <InputField
          fullWidth
          error={errors.email}
          label="Email"
          value={editableUser.email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <InputField
          fullWidth
          error={errors.phone}
          label="Phone"
          value={editableUser.phone}
          onChange={(e) => handleFieldChange("phone", e.target.value)}
        />
      </Grid>
      <Grid item xs={1}>
        <TrashIconButton handleClick={()=>onDelete(editableUser.id)}/>
      </Grid>
    </Grid>
  );
};

export default UserRow;
