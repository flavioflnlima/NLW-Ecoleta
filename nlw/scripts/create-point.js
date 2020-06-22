function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => {
      return res.json();
    })
    .then((states) => {
      for (state of states) {
        ufSelect.innerHTML += `<option name="${state.sigla}">${state.nome}</option>`;
      }
    });
}
populateUFs();

document.querySelector("select[name=uf]").addEventListener("change", () => {
  const uf = document.querySelector("option");
  const citySelect = document.querySelector("select[name=city]");
  console.log(uf);

  //   fetch(
  //     `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((citys) => {
  //       for (city of citys) {
  //       }
  //     });
});
