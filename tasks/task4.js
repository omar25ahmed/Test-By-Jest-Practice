const capitalizeFirstLetter = (str) => {
  let str2;
  if (typeof str === 'string') {
    str2 = str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    console.log('error');
  }
  return str2;
};

module.exports = capitalizeFirstLetter;
