export const returnFirstName = (name: any) => {
  let firstName = name.split(" ")[0];
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  return firstName;
};
