// encapsulation: data that's private, not accessible
class vehicle {
  #tin;
  constructor(type, price) {
    this.type = type;
    this.price = price;
    this.#tin = '13124EQXE3'
  }

  getThis() {
    console.log(this);
  }
}

const car1 = new vehicle("car", 5000000);
// car1.getThis()


//console.log(car1.#tin)
//just read the tooltip


const student = {
  name: 'rahul',
  score: 1000,
  getScore: function() {
    console.log(this)
  },
  getScoreArrow: () => {
    console.log(this)
  }
}

// student.getScore();
// student.getScoreArrow()
//----- "this" doesn't work in arrow function
