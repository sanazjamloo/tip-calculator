//Calculate tip
function calculateTip () {
  let billAmount = document.getElementById("bill").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numofPeople = document.getElementById("peopleCount").value;

  //validate input
  if (billAmount === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if the input is empty or less than or equal to 1
  if (numofPeople === "" || numofPeople <= 1) {
    numofPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

}
