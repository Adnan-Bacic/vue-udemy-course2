//vue instance
//object as parameter
new Vue({
    //what element should this instance control. css selector
    el: '#app',
    //objects which contains all the different data for this instance
    data: {
        title: 'Becoming a Vue ninja!',
        name: 'Adnan',

        url: 'https://www.youtube.com/',
        classes: ['one', 'two'],

        wage: 10,

        //setting coordinates in canvas
        Coordinates: {
            x: 0,
            y: 0
        },

        showName: true,
        showAge: true,

        itemList: ['red', 'yellow', 'green', 'blue'],
        ninjaList: [
            { name: 'ninja1', age: 20 },
            { name: 'ninja2', age: 25 },
            { name: 'ninja3', age: 30 }
        ]
    },
    methods: {
        greet(time){
            //normally we would also need .data, but vue takes all the data properties and proxies them to the top
            return `Hello there, and good ${time}, ${this.name}`
        },

        changeWage(amount){
            this.wage += amount
        },

        logEvent(e){
            console.log(e)
        },

        logCoordinates(e){
            //update x and y from Coordinates, which will show in html
            this.Coordinates.x = e.offsetX;
            this.Coordinates.y = e.offsetY;
        },

        updateName(e){
            //console.log(e.target.value)
            this.name = e.target.value
        },

        logMsg(){
            console.log('hi')
        },

        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})