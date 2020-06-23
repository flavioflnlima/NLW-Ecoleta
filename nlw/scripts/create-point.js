function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => {
      return res.json();
    })
    .then((states) => {
      for (state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      }
    });
}
populateUFs();

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]");

  const stateInput = document.querySelector("input[name=state]");

  const ufValue = event.target.value;

  const indexOfSelectedEstate = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedEstate].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/distritos`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((cities) => {
      for (city of cities) {
        citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
      }

      citySelect.disabled = false;
    });
}

function setCityInputValue(event) {
  const cityInput = document.querySelector("input[name=city]");

  const cityValue = event.target.value;

  const indexOfSelectedCity = event.target.selectedIndex;

  cityInput.value = event.target.options[indexOfSelectedCity].text;
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities);

document
  .querySelector("select[name=city]")
  .addEventListener("change", setCityInputValue);
