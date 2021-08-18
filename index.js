// Your code here
function mapToNegativize(array){
    for (let i = 0; i < array.length; i++){
        array[i] = array[i] * (-1)
    }
    return array
}

function mapToNoChange(array){
    return array       
}

function mapToDouble(array){
    for (let i = 0; i < array.length; i++){
        array[i] = array[i] * (2)
    }
    return array
}

function mapToSquare(array){
    for (let i = 0; i < array.length; i++){
        array[i] = Math.pow(array[i], 2)
    }
    return array
}

function reduceToTotal(array, total = 0){
    
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array){
    let count = 0
    for (let i = 0; i < array.length; i++){
        if (!!array[i] == true){
            console.log(`${array[i]} is true.`)
            count++
        }
    }
    console.log(`Count: ${count}, Length:${array.length}`)
    if (count == array.length){
        return true
    }
    else if (count != array.length){
        return false
    }
}

function reduceToAnyTrue(array){
    let count = 0
    for (let i = 0; i < array.length; i++){
        if (!!array[i] == true){
            console.log(`${array[i]} is true.`)
            count++
        }
    }

    if (count > 0){
        return true
    }
    else{
        return false
    }
}