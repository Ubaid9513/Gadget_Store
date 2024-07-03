let cars = {
  honda: {
    civic: {
      name: "honda civic",
      model: "2024",
      engine: "1.2L",
      fuelType: "petrol",
      seatCapacity: "5",
      color: "black",
    },
    baleno: {
        name: "baleno civic",
        model: "2024",
        engine: "1.2L",
        fuelType: "petrol",
        seatCapacity: "5",
        color: "black",
      },
      pilot: {
        name: "honda civic",
        model: "2024",
        engine: "1.2L",
        fuelType: "petrol",
        seatCapacity: "5",
        color: "black",
      }
  },
  vegenar: {
    bmw: {
      name: "honda civic",
      model: "2024",
      engine: "1.2L",
      fuelType: "petrol",
      seatCapacity: "5",
      color: "black",
    },
    marsades: {
        name: "baleno civic",
        model: "2024",
        engine: "1.2L",
        fuelType: "petrol",
        seatCapacity: "5",
        color: "black",
      },
      suzuki: {
        name: "honda civic",
        model: "2024",
        engine: "1.2L",
        fuelType: "petrol",
        seatCapacity: "5",
        color: "black",
      }
  }
};

let company = document.getElementById("company");
let model = document.getElementById("model");

for (var key in cars) {
    company.innerHTML += `<option value+"${key}">${key}</option>`
}
function selectCompany(){
    model.innerHTML = `<option>Select model</option>`
    for(var key in cars[company.value]){
        model.innerHTML += `<option value+"${key}">${key}</option>`
    }
}