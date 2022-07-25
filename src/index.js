module.exports = function check(str, bracketsConfig) {
  const bracArr = bracketsConfig.map((currentValue) => currentValue.join(""));
  for (let i = 0; i < bracArr.length; i++) {
    if (str.includes(bracArr[i])) {
      str = str.replace(bracArr[i], "");
      console.log(str);
      i = -1;
    }
  }
  return !str;
};
