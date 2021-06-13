export const timestampConverter = (timestamp) => {
  var d = new Date(timestamp);
  d = d.toString();
  var formattedTime = "";
  for (var i = 0; i < d.length; i++) {
    if (d.charAt(i + 2) == ":") {
      break;
    } else {
      formattedTime += d.charAt(i);
    }
  }
  console.log();
  return formattedTime;
};
