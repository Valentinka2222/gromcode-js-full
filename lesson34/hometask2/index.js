import { getValueInput } from "./getValueForm.js"

const formControlElem = document.querySelector("form")
const registerButtonElem = document.querySelector(".submit-button")

export const validator = () => {
  const isvalid = formControlElem.reportValidity()
  if (isvalid) {
    registerButtonElem.removeAttribute("disabled")
  }
}

export const stopDefAct = (event) => {
  event.preventDefault()
}
formControlElem.addEventListener("click", stopDefAct, false)
formControlElem.addEventListener("input", validator)
registerButtonElem.addEventListener("click", getValueInput)
