const app = new Vue({
    el: '#app',
    data: {
        books: [
            {id: 1, name: '《算法导论》', date: '2007-8', price: 85.00, count: 1},
            {id: 2, name: '《UNIX编程艺术》', date: '2007-8', price: 15.00, count: 1},
            {id: 3, name: '《技术编程》', date: '2007-8', price: 12.00, count: 1},
            {id: 4, name: '《计算机技术》', date: '2007-8', price: 35.00, count: 1},
            {id: 5, name: '《Java算法》', date: '2007-8', price: 25.00, count: 1},
            {id: 6, name: '《编程算法》', date: '2007-8', price: 95.00, count: 1}
        ]
    },
    methods: {
        addBook(index) {
            console.log(index)
            this.books[index].count = this.books[index].count + 1
        },
        subBook(index) {
            this.books[index].count = this.books[index].count - 1
        },
        removeBook(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        getTotal() {
            let numbers = [10, 23, 4, 5, 10, 33, 21, 441, 12, 44, 3, 3, 67, 8, 5]
            let res1 = numbers.filter(function (n) {
                return n <= 10
            }).map(function (n) {
                return n * 2
            }).reduce(function (pre, n) {
                return pre + n
            })
            console.log(res1)

            let res2 = numbers.filter(n => n <= 10).map(n => n * 2).reduce((pre, n) => pre + n)
            console.log(res2)


            let value = 0;
            //1.传统的
            // for (let i = 0; i < this.books.length; i++) {
            //     value += this.books[i].price * this.books[i].count
            // }
            // 2.
            // for (let i in  this.books){
            //     value += this.books[i].price * this.books[i].count
            // }
            // 3.
            for (let i of this.books) {
                value += i.price * i.count
            }
            //4.
            return value;
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})