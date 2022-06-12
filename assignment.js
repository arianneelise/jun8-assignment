const isString = (info) => {
  if (parseInt(info) || parseFloat(info)) {
    return false;
  }
  return true;
};

const isEmpty = (info) => {
  let check = 0;
  for (let count = info.length - 1; count > -1; count--) {
    if (info[count] == " ") {
      check += 1;
    }
  }
  if (check == info.length) {
    return true;
  }
  return false;
};

const capital = (string) => {
  const newLetter = string.charAt(0).toUpperCase();
  return string.replace(string.charAt(0), newLetter);
};

const abbreviate = (name) => {
  const l = name.split(" ");
  const abbLastName = l[1].charAt(0) + ".";
  const fullAbbName = `${l[0]} ${abbLastName}`;
  return fullAbbName;
};

function displayAnswers() {
  const questionOne = document.getElementById("one").value;
  document.getElementById("p-one").innerHTML = `answer: ${isString(
    questionOne
  )}`;

  const questionTwo = document.getElementById("two").value;
  document.getElementById("p-two").innerHTML = `answer: ${isEmpty(
    questionTwo
  )}`;

  const questionThree = document.getElementById("three").value;
  document.getElementById("p-three").innerHTML = `answer: ${capital(
    questionThree
  )}`;

  const questionFour = document.getElementById("four").value;
  document.getElementById("p-four").innerHTML = `answer: ${abbreviate(
    questionFour
  )}`;
}
