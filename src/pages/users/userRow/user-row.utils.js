import countryOptions from '../../../data/countries.json';
const validateUser = (user) => {
  const errors = {name: false,
  country: false,
  email: false,
  phone: false,
  id:user.id};

  if (!/^[a-zA-Z]+$/.test(user.name)) {
    errors.name = "Name must contain only letters (a-z)";
  }

  if (!countryOptions.includes(user.country)) {
    errors.country = "Please select a valid country";
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(user.email)) {
    errors.email = "Invalid email format";
  }

  if (!/^\+[^+]*$/.test(user.phone)) {
    errors.phone = "Phone must start with '+' and contain only one '+'";
  }

  return errors;
};


export const UserRowUtils = {
  validateUser: validateUser
}
