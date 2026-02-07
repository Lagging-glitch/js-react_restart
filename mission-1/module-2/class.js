/**
 * class --> template
 * first letter capital
 * properties
 * method( a special type of fuction inside a class without the function keyword)
 * ---constructor: no need to call specifically, gets called automatically
 *    parameters given to it works as object-keys
 *-----this: assigns values to those keys
 *
 */


class Player {
  constructor(name, age){
    this.name = name
    this.location = 'Bangladesh'
    this.age = age

    // console.log('calling the constructor', name)
  }

  goal(){
    // console.log('scored a goal')
  }
  getTeamName(){
    return 'borsa'
  }
}

const player1 = new Player("tom");
const player2 = new Player("jerry");

console.log(player1)