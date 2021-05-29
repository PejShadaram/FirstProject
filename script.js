const userNames = ["mark","staceymom2978","lajsdflj","carrie98"];

const validUserNames = userNames.filter(x => 
    x.length() < 10);



const square = {
    area(length) {
        return length * length;
    },
    perimeter(length){
        return length * 4;
    }
}


const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount++;
        return 'EGG';
    }
}


/* forEach */

const numbers = [1, 2, 3]

numbers.forEach(print)

numbers.forEach(function (el){
    console.log(el)
})

for (let el of numbers){
    console.log(el);
}

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.rating}`)
})

const doubles = numbers.map(function(num){
    return num * 2;
})

const movies = [
    {
        title: 'Alien',
        score: 85
    },
    {
        title: 'lethal weapon',
        score: 100
    }]


/* map */

const names = [' Jeff', 'dan ', 'P age'];

const cleanNames = names.map(function(n) {
        return n.trim();
})


/* arrow functions */
const movies = [
    {
        title: 'Alien',
        score: 85
    },
    {
        title: 'lethal weapon',
        score: 100
    }];



const newMovies = movies.map(movie => (`${movie.title} - ${movie.score}`));


/* setTimeout */

const id = setInterval(() => {
    console.log(math.random())
}, 2000)

clearInterval(id)

