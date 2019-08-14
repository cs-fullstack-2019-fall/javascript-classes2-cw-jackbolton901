//Exercise 1

class movie
{
    constructor(movieName,rating,yearRelease)
    {
        this.movieName= movieName;
        this.rating= rating;
        this.yearRelease= yearRelease;
    }
    changeName()
    {
        let newName= prompt("change name to..");
        this.name= newName;
    }
    
        changeRating()
        {
            let newRating= prompt("change rating to..");
            this.rating= newRating;
        }
        changeYearRelease()
        {
            let newRelease= prompt("change release to..")
            this.yearRelease= newRelease
        }
    
}
let funny = new movie("Friday","r","1997")
let action= new movie("Rampage", "pg-13", "2019")
console.log(funny)
console.log(action)

funny.changeName()
action.changeRating()
funny.changeYearRelease()
console.log(funny)
Console.log(action
)