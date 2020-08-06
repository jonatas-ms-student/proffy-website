//TODO: procurar o botão:
document
  .querySelector("#add-time")

  //TODO: quando clicar no botão:
  .addEventListener("click", cloneField);

//TODO: executar uma ação
function cloneField() {
  //TAG: duplicar quais campos?
  const newFieldsContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);

  //TAG: pegar quais campos?
  const fields = newFieldsContainer.querySelectorAll("input");

  //TAG: limpar os campos
  fields.forEach(function (field) {
    field.value = "";
  });

  //TAG: colocar onde na página?
  document.querySelect("#schedule-items").appendChild(newFieldsContainer);
}
