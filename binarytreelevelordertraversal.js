var levelOrder = function(root) {
    let result = []

    let travel = function(node, level) {
        if (!node) {
            return
        }

        let arr = result[level] //let arr = any values in the level
        if (!arr) { //if it's the first value in the level...
            arr = [] //initialize it
            result[level] = arr //then set the result's level to the new arr
        }
        arr.push(node.val) //if it already exists, push value of node into that arr
        travel(node.left, level + 1)
        travel(node.right, level + 1)
    }
    travel(root, 0)

    return result
};
