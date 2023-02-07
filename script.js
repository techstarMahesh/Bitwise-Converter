const inputTypeSelect = document.getElementById('input-type')
const outputTypeSelect = document.getElementById('output-type')
const binaryInput = document.getElementById('binary-input')
const submitButton = document.getElementById('submit-button')
const resultDiv = document.getElementById('result')

submitButton.addEventListener('click', () => {
  let inputValue = binaryInput.value
  switch (inputTypeSelect.value) {
    case 'binary':
      inputValue = parseInt(binaryInput.value, 2)
      break
    case 'decimal':
      inputValue = parseInt(binaryInput.value, 10)
      break
    case 'octal':
      inputValue = parseInt(binaryInput.value, 8)
      break
    case 'hexadecimal':
      inputValue = parseInt(binaryInput.value, 16)
      break
    default:
      break
  }

  switch (outputTypeSelect.value) {
    case 'binary':
      resultDiv.innerText = `Binary: ${inputValue.toString(2)}`
      break
    case 'decimal':
      resultDiv.innerText = `Decimal: ${inputValue}`
      break
    case 'octal':
      resultDiv.innerText = `Octal: ${inputValue.toString(8)}`
      break
    case 'hexadecimal':
      resultDiv.innerText = `Hexadecimal: ${inputValue.toString(16)}`
      break
    default:
      break
  }
})
