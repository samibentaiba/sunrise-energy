// utils/api-error.ts
export const handleError = (error: Error) => {
  console.error(error);
  throw new Error("Something went wrong. Please try again.");
};
