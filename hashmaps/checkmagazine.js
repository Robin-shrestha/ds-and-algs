function checkMagazine(magazine, note) {
  // Write your code here

  const convertToHashmaps = (str) => {
    const strArray = str.split(" ");
    const srtHash = {};
    strArray.forEach((element) => {
      if (srtHash[element] !== undefined) {
        srtHash[element] += 1;
      } else {
        srtHash[element] = 1;
      }
    });
    return srtHash;
  };
  magazineHash = convertToHashmaps(magazine);
  noteHash = convertToHashmaps(note);

  let result = "Yes";
  Object.entries(noteHash).every(([key, value]) => {
    if (magazineHash[key] === undefined || magazineHash[key] < value) {
      result = "No";
      return false;
    }
    return true;
  });
  console.log(result);
}

checkMagazine("give me one grand today night", "give one grand today");
checkMagazine("two times three is not four", "two times two is four");
checkMagazine("ive got a lovely bunch of coconuts", "ive got some coconuts");
