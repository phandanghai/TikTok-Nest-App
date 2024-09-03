const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashPassword = async (password: string) => {
  return await bcrypt.hashSync(password, saltRounds);
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string,
) => {
  return await bcrypt.compareSync(password, hashedPassword);
};
