function BinaryTree (){
    //构建节点
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }

    //根节点
    var root = null

    //插入子节点
    var insertNode = function (node, newNode) {
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null){
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }
    //插入根节点
    this.insert = function (key) {
        var newNode = new  Node(key)
        if(root === null){
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    //遍历
    var inOrderTraverseNode = function (node){
        if(node !== null) {
            inOrderTraverseNode(node.left, callBack)
            callBack(node.key)
            inOrderTraverseNode(node.right, callBack)
        }

    }
    //中序遍历
    this.inOrderTraverse = function (callBack) {
        inOrderTraverseNode(root ,callBack)
    }


    var preOrderTraverseNode = function (node, callBack) {
        if(node !== null){
            callBack(node.key)
            preOrderTraverseNode(node.left, callBack)
            preOrderTraverseNode(node.right, callBack)
        }
    }
    //前序遍历
    this.preOrderTraverse = function (callBack) {
        preOrderTraverseNode(root, callBack)
    }

    var postOrderTraverseNode = function (node, callBack) {
        if(node !== null){
            preOrderTraverseNode(node.left, callBack)
            preOrderTraverseNode(node.right, callBack)
            callBack(node.key)
        }
    }
    //后序遍历
    this.postOrderTraverse = function (callBack) {
        postOrderTraverseNode(root, callBack)
    }

    var minNode = function (node) {
        if(node){
            while(node && node.left !== null ){
                node = node.left
            }
            return node.key
        }
        return null
    }
    //查找最小值节点
    this.min = function () {
        return minNode(root)
    }

    var maxNode = function (node) {
        if(node){
            while(node && node.right !== null){
                node = node.right
            }
            return node.key
        }
        return null
    }
    //查找最大直接点
    this.max = function () {
        return maxNode(root)
    }

    var searchNode = function (node ,key) {
        if(node === null){
            return false
        }
        if(node.key > key){
            return searchNode(node.left, key)
        } else if(node.key < key){
            return searchNode(node.right, key)
        } else {
            return true
        }

    }

    //查找
    this.search = function (key) {
        return searchNode(root,key)
    }

    var findMinnode = function (node) {
        if(node){
            while(node && node.left !== null){
                node = node.left
            }
            return node
        }
        return null
    }
    var removeNode = function (node, key){
        if(node === null){
            return null
        }

        if(key < node.left){
            node.left = removeNode(node.left, key)
            return node
        } else if(key > node.key){
            node.right = removeNode(node.right, key)
            return node
        } else {
            if (node.left === null && node.right === null){//叶子节点
                node = null
                return node
            }
            if (node.left === null){//只有右节点
                node = node.right
                return node
            } else if(node.right === null) {
                node = node.left
                return left
            }

            var aux = findMinnode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
        }
    }
    //删除
    this.remove = function (key) {
        root = removeNode(root, key)
    }

}

//test
function Random (min, max) {
    return Math.round(Math.random() * (max - min) +　min)
}
var nodes = [8,3,10,1,6,,14,4,7,13]
//for(var i=0; i< 10000; i++){
 //   nodes.push(Random(0,1000))
//}
var binaryTree = new  BinaryTree()
nodes.forEach(function(key){
    binaryTree.insert(key)
})

var callBack = function (key) {
    console.log('key', key)
}

console.log('中序遍历', '-------------------------------')
binaryTree.inOrderTraverse(callBack)

console.log('前序遍历', '-------------------------------')
binaryTree.preOrderTraverse(callBack)

console.log('后序遍历', '-------------------------------')
binaryTree.postOrderTraverse(callBack)

console.log('最小值', '-------------------------------')
console.log('min',binaryTree.min())

console.log('最大值', '-------------------------------')
console.log('max',binaryTree.max())

console.log('查找值', '-------------------------------')
console.log('search',binaryTree.search(2))
