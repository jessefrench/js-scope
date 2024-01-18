// Scope Exercises
// Some software developers were contracted to build some code, but there weren't quite clear yet on how scope works. Your job is to fix their code to stop all the errors from being thrown.

// C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
for (let y = 0; y < cookies.length; y++) {
  const currentCookie = cookies[y]
  console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}



// Conjunction Function
const conjunction = function (firstWord, secondWord) {
  const conjoinedWord = `${firstWord}${secondWord}`
  console.log(conjoinedWord)
}
conjunction("Master", "Card")



// Mod Squad
const modSquad = {
  "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
  "series": {
    "start": "1968",
    "end": "1973"
  }
}
modSquad.members.forEach(member => {
  let HTMLRepresentation = `<h1>The Mod Squad</h1>`
  HTMLRepresentation += `<div>${member}</div>`
  console.log(HTMLRepresentation)
})



// Simon Says
// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
for (const location of locations) {
  if (location[0] < 2) {
    const invalidLocation = true
    if (invalidLocation) {
      console.log("This location is invalid")
    }
  }
}



// Advanced Challenge: Lambda Llama
// Not only can functions take other functions as arguments, but functions can also return functions! This is marked as an advanced challenge because you haven't been introduced to this concept yet.
// The llamaNamer function defines an internal function and your job is to rewrite this code so that the internal function gets returned.
// Remember, come to the staff and ask questions if you decide to take this one on and get stuck.

const llamaNamer = function () {
  const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
  const randomizer = Math.floor(Math.random() * 7)
  const namer = function () {
    const suffix = " the Llama"
    const name = possibleNames[randomizer]
    return name + suffix
  }
  return namer()
}
let nameMaker = llamaNamer()
console.log(nameMaker)
