//this function displays the value
function dis(value) {
  document.getElementById("total").value += value 
}

//this function evaluates the digit using eval() and returns the result
function equal() {
  let a = document.getElementById("total").value
  let b = eval(a)
  document.getElementById("total").value = b
}

//this function allows the user to delete numbers one by one
function deleteNum() {
  var value = document.getElementById("total").value
  document.getElementById("total").value = value.substr(0, value.length - 1)
}

//this function clears the entire screen
function clearScreen() {
  document.getElementById("total").value = ""
}