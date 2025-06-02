export const getAuthErrorDescription = (errorCode: string): string => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "This email is already registered. Please try logging in.";
    case "auth/invalid-email":
      return "The email address is invalid.";
    case "auth/weak-password":
      return "The password is too weak. It should be at least 6 characters.";
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/network-request-failed":
      return "Network error. Please check your connection.";
    default:
      return "Authentication failed. Please try again.";
  }
};
