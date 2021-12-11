function getMaxSequence(number) {
  // converte o número para um array de números
  let numberArray = Array.from(String(number), num => Number(num))

  let response = []
  let tempResponse = []
  // percorre o array de números validando as sequencias
  numberArray.forEach((currentNumber, index) => {
    if (tempResponse.length === 0) {
      tempResponse.push(currentNumber)
    } else {
      const lastNumberOfSequence = tempResponse[tempResponse.length - 1]
      const nextNumberOfSequence = lastNumberOfSequence + 1

      if (
        nextNumberOfSequence === currentNumber ||
        (lastNumberOfSequence === 9 && currentNumber === 0)
      ) {
        tempResponse.push(currentNumber)
      } else {
        response.push(tempResponse)
        tempResponse = [currentNumber]
      }
    }

    // valida se está na última iteração
    if (index === numberArray.length - 1) {
      response.push(tempResponse)
    }
  })

  // encontra a maior sequencia
  const sequence = response.reduce((lastItem, item) => {
    return (lastItem = lastItem.length > item.length ? lastItem : item)
  }, 0)

  // converte o array em número
  return +sequence.join('')
}

console.log(getMaxSequence(53590))
console.log(getMaxSequence(674030098567819))
console.log(getMaxSequence(9012364509789))
console.log(getMaxSequence(123451234567))
