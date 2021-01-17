function getInitials(s) {

  function capitalize(s) {
    return s.charAt(0).toUpperCase();
  }

  const caps = s.split(' ').map(capitalize).join('');
  return caps;
}

function shortenStr(str, howMuch) {
  return str.toString().toUpperCase().substr(0, howMuch)
}