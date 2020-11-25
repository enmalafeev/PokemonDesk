const toCapitalizeFirstLetter = (str: string) => {
  const firstLetter = str[0].toUpperCase();
  const secondLetters = str.slice(1).toLocaleLowerCase();
  return `${firstLetter}${secondLetters}`;
};

export default toCapitalizeFirstLetter;
