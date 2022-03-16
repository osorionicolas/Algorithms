function findTotalImbalance(rank) {
    let result = 0
    if (rank.length === 1) return result
    for (let i = 0; i <= rank.length - 1; i++) {
        let array = [rank[i]]
        for (let j = i + 1; j <= rank.length - 1; j++) {
            array.push(rank[j])
            let aux = Array.from(array)
            aux.sort((a, b) => a - b)
            aux.reduce((prev, current) => {
                if (current - prev > 1) result++
                return current
            })
        }
    }
    return result
}

function findTotalImbalance2(rank) {
    let result = 0
    if (rank.length === 1) return result
    for (let i = 0; i <= rank.length - 1; i++) {
        let array = [rank[i]]
        for (let j = i + 1; j <= rank.length - 1; j++) {
            array.push(rank[j])
            let aux = Array.from(array)
            quickSort(aux, 0, aux.length - 1, aux.length)
            aux.reduce((prev, current) => {
                if (current - prev > 1) result++
                return current
            })
        }
    }
    return result
}

function quickSort(arr, leftPos, rightPos, arrLength) {
    let initialLeftPos = leftPos
    let initialRightPos = rightPos
    let direction = true
    let pivot = rightPos
    while (leftPos - rightPos < 0) {
        if (direction) {
            if (arr[pivot] < arr[leftPos]) {
                quickSort.swap(arr, pivot, leftPos)
                pivot = leftPos
                rightPos--
                direction = !direction
            } else leftPos++
        } else {
            if (arr[pivot] <= arr[rightPos]) {
                rightPos--
            } else {
                quickSort.swap(arr, pivot, rightPos)
                leftPos++
                pivot = rightPos
                direction = !direction
            }
        }
    }
    if (pivot - 1 > initialLeftPos) {
        quickSort(arr, initialLeftPos, pivot - 1, arrLength)
    }
    if (pivot + 1 < initialRightPos) {
        quickSort(arr, pivot + 1, initialRightPos, arrLength)
    }
}
quickSort.swap = (arr, el1, el2) => {
    let swapedElem = arr[el1]
    arr[el1] = arr[el2]
    arr[el2] = swapedElem
}

const main = () => {
    //let rank = [4, 1, 3, 2] // 3
    let rank = Array.from({ length: 2000 }, () => Math.floor(Math.random() * 2000))
    //console.log(rank)
    console.time("time2")
    console.log(findTotalImbalance2(rank))
    console.timeEnd("time2")
    console.time("time")
    console.log(findTotalImbalance(rank))
    console.timeEnd("time")
}

main()
