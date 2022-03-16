class SinglyLinkedListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }

    insert_node(node) {
        if (this.next === null) {
            this.next = node
        } else {
            this.next.insert_node(node)
        }
    }
}

let array = []
let result = 0
function maximumPages(head) {
    array.push(head.data)
    if (head.next) maximumPages(head.next)
    if (array.length === 0) return result
    let aux = array[0] + array[array.length - 1]
    result = aux > result ? aux : result
    array.splice(0, 1)
    array.splice(-1, 1)
    return result
}

let array2 = []
let result2 = 0
function maximumPages2(head) {
    array2.push(head.data)
    if (head.next) maximumPages3(head.next)
    if (array2.length === 0) return result2
    let aux = array2[0] + array2[array2.length - 1]
    result2 = aux > result2 ? aux : result2
    array2.shift()
    array2.pop()
    return result2
}

let obj = {}
let start = 0
let end = 0
let result3 = 0
function maximumPages3(head) {
    obj[end++] = head.data
    if (head.next) maximumPages3(head.next)
    if (start === end) return result3
    let aux = obj[start] + obj[end - 1]
    result3 = aux > result3 ? aux : result3
    delete obj[start++]
    delete obj[--end]
    return result3
}

const main = () => {
    //let head_count = [1, 3, 3, 1] // 6
    let head_count = Array.from({ length: 9600 }, () => Math.floor(Math.random() * 9600)) // Maximum from maximumPages2 and 3
    //let head_count = Array.from({ length: 8900 }, () => Math.floor(Math.random() * 9600)) // Maximum from maximumPages
    console.log(head_count)
    let head = new SinglyLinkedListNode(head_count[0])
    for (let i = 1; i < head_count.length; i++) {
        head.insert_node(new SinglyLinkedListNode(head_count[i]))
    }

    // Original
    /*console.time("time1")
    console.log(maximumPages(head))
    console.timeEnd("time1")*/

    console.time("time2")
    console.log(maximumPages2(head))
    console.timeEnd("time2")

    console.time("time3")
    console.log(maximumPages3(head))
    console.timeEnd("time3")
}

main()
