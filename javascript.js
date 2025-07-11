/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

const text = "Hello i cannot change";
console.log(text);
let exampleText = "Hello i can change";
console.log(exampleText);
const myNum = 12;
console.log(myNum);
let number = 21;
console.log(Number);
booleanOne = true;
booleanTwo = false;
console.log(booleanOne);
console.log(booleanTwo);
exampleArray = [500, "hi", true, false];
console.log(exampleArray);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

let num1 = 10;
let num2 = 7;
console.log(num1, num2);

console.log(num1 + num2);
console.log(num1 - num2);

let counter = 5;
console.log(counter);
counter++;
counter++;
counter++;
counter++;
counter++;
console.log(counter);
counter--;
counter--;
console.log(counter);

let score = 20;
score -= 4;
console.log(score);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/
const Age = 18;

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (Age >= 18 && userName && userIsBlocked === false) {
  console.log("Sucsess: username not empty");
  goToPage = "/home";
} else {
  console.log("Error: userName is empty");
  goToPage = "fail.html";
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

const userTitle = "userMale" ? "Mr." : "Mrs.";
console.log(userTitle);

/* if (userMale === false) {
  console.log("Mr");
} else {
  console.log("Mrs");
} */
