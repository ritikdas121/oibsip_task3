const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;

  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrenheit = ((cel * 9) / 5 + 32).toFixed(1);
    return fahrenheit;
  }

  const fahToCel = (fehr) => {
    let celcius = (((fehr - 32) * 5) / 9).toFixed(1);
    return celcius;
  }

  

  if (valueTemp == "cel") {
    result = celToFah(numberTemp);
    document.getElementById("resultContainer").innerHTML = result + " °Fahrenheit";
  } else {
    result = fahToCel(numberTemp);
    document.getElementById("resultContainer").innerHTML = result + " °Celcius";
  }

};
