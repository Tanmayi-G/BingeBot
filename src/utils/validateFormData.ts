export type ValidationErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export const validateForm = (
  email: string,
  password: string,
  name?: string | null
): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (name !== null && name !== undefined) {
    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      errors.name = "Name must be at least 2 characters long.";
    } else if (!/^[a-zA-Z ]+$/.test(trimmedName)) {
      errors.name = "Name can only contain letters and spaces.";
    }
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (
    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/.test(password)
  ) {
    errors.password =
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
  }

  return errors;
};
