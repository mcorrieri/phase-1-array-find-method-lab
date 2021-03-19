// function superbowlWin(records) {
//   function getW(arrVal) {
//     const result = arrVal.result === "W";
//     if (result) {
//       const year = records.find(getW).year;
//       return year;
//     }
//   }
// }

// superbowlWin(records);

function superbowlWin(array) {
  const wonYear = array.find((index) => index.result === "W");
  if (wonYear) {
    return wonYear.year;
  }
}
