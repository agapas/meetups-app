export const isEmailValid = (email) => {
  // A very basic check to follow a pattern: characters@characters.domain,
  // BUT better solution is sending an email with a link to click
  const regex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

  return !!(email && regex.test(email));
};
