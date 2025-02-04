/* 
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.
  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/
const students = [
    {
      firstName: "Jane",
      lastName: "Doe",
      habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
      ],
    },
    {
      firstName: "John",
      lastName: "Smith",
      habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
      firstName: "Arya",
      lastName: "Stark",
      habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
      firstName: "Jon",
      lastName: "Snow",
      habits: ["shows up early", "helps peers", "washes dishes"],
    },
  ];
  
  const badHabit1 = "doesn't wash dishes";
  const expected1 = ["Jane Doe", "Arya Stark"];
  
  const badHabit2 = "shows up late";
  const expected2 = ["John Smith", "Arya Stark"];
  
  const badHabit3 = "typo";
  const expected3 = [];
  /**
   * Finds a list of people whose habits contain the given bad habit.
   * - Time O(?).
   * - Space O(?).
   * @typedef {Object} Person
   * @property {string} firstName
   * @property {string} lastName
   * @property {Array<string>} habits
   * @param {Array<Person>} persons
   * @param {string} badHabit
   * @returns {Array<Person>} The people that have the given bad habit.
   */
  function santasNaughtyList(persons, badHabit) {
    const result = [];
    for(const person of persons){
      for(const habit of person.habits){
        if(habit === badHabit){
          result.push(`${person.firstName} ${person.lastName}`);
          break;
        }
      }
    }
    return result;

  }


  console.log(santasNaughtyList(students,badHabit1));
  console.log(santasNaughtyList(students,badHabit2));
  console.log(santasNaughtyList(students,badHabit3));
  
  /**
   * Finds a list of people whose habits contain the given bad habit.
   * - Time O(?).
   * - Space O(?).
   * @typedef {Object} Person
   * @property {string} firstName
   * @property {string} lastName
   * @property {Array<string>} habits
   * @param {Array<Person>} persons
   * @param {string} badHabit
   * @returns {Array<Person>} The people that have the given bad habit.
   */
  function santasNaughtyListFunctional(persons, badHabit) {
    // 1. loop through each object to filter the persons with the habits contain badHabit
    // 2. return an array of firstname & lastname 
    return persons
                .filter((eachPerson) => eachPerson.habits.includes(badHabit) )
                .map((filteredEachPerson) => `${filteredEachPerson.firstName} ${filteredEachPerson.lastName}`)
  }

  console.log(santasNaughtyListFunctional(students,badHabit1));
  console.log(santasNaughtyListFunctional(students,badHabit2));
  console.log(santasNaughtyListFunctional(students,badHabit3));