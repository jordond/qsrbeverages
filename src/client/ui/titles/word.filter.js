/**
 * Split a string into words
 */
function words() {
  return (input) => {
    let splitWords = [];
    if (input) {
      splitWords = input.split(' ');
    }
    return splitWords;
  };
}

export default words;
