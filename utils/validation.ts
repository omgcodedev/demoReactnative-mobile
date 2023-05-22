export function isValidEmail(email: string): boolean {
  const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email.trim());
}

export interface ErrorState {
  error?: string;
  emailError: string;
  passwordError: string;
}

export const handleValidation = (
  e: string,
  setPasswordErr: React.Dispatch<React.SetStateAction<ErrorState>>
): void => {
  const passwordInputValue = e;

  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/;
  const minLengthRegExp = /.{8,}/;
  const passwordLength = passwordInputValue.length;
  const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
  const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
  const digitsPassword = digitsRegExp.test(passwordInputValue);
  const specialCharPassword = specialCharRegExp.test(passwordInputValue);
  const minLengthPassword = minLengthRegExp.test(passwordInputValue);

  if (passwordLength === 0) {
    setPasswordErr(
      (state) =>
        ({
          ...state,
          passwordError: "Password is empty",
        } as ErrorState)
    );
  } else if (!minLengthPassword) {
    setPasswordErr((state) => ({
      ...state,
      passwordError: "At least minimum 8 characters",
    }));
  } else if (!uppercasePassword) {
    setPasswordErr((state) => ({
      ...state,
      passwordError: "At least one Uppercase",
    }));
  } else if (!lowercasePassword) {
    setPasswordErr((state) => ({
      ...state,
      passwordError: "At least one Lowercase",
    }));
  } else if (!digitsPassword) {
    setPasswordErr((state) => ({
      ...state,
      passwordError: "At least one digit",
    }));
  } else if (!specialCharPassword) {
    setPasswordErr((state) => ({
      ...state,
      passwordError: "At least one Special Characters",
    }));
  } else {
    setPasswordErr((state) => ({ ...state, passwordError: "" }));
  }
};
