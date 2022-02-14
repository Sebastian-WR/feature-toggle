npm i husk for at installere dependencies fra package.json

# IBM Test

Jeg har valgt feature toggle opgaven og har valgt at løse den full-stack
https://github.com/ibmcicdk/CIC-HIRING-TEST/tree/master/FeatureToggle 

### `Start programmet`

- Først clone repository - https://github.com/Sebastian-WR/feature-toggle.git 
- Efterfølgende skal der køres "npm i" i terminalen
- Dernæst skal scriptet start køres "npm run start"
- Så starter programmet og det kan tilgås på http://localhost:3000
- Der er en hardcoded admin bruger Med Username "Admin" og password "1234"
### Link til den hostede udgave

Den er hosted med Heroku, så den sover efter 30 min, derfor kan det tage et øjeblik første gang den starter.
https://ibm-feature-toggle.herokuapp.com/ 

### Programmets user stories

Jeg nåede desværre ikke så langt med user stories, da jeg brugte en del spildtid på at få hostet databasen som ikke lykkedes, 
blandt andre problemer undervejs, med login og dertil spildte jeg for meget tid på at sætte "ligegyldige" komponenter op. Det kan jeg fortælle mere om til interviewet.

Som det er nu bliver man tvunget i en login route når man tilgår web appen, som nævnt tidligere kan man logge ind med Admin og 1234, hvorefter man får tildelt en token til sin session. Så kan man logge ud, planen var at hvis en admin loggede ind skulle man have en "toggle panel" hvor man kunne slå funktionalitet fra for almindelige brugere. Man kan på forsiden klikke register og toggle en register form, som jeg havde problemer med at gemme i state da det var lokalt til komponenten og ikke globalt (derfor panik redux), så den nye bruger kunne registreres, der er også en del funktionalitet til dette men fik ikke sat redux op til global state. så den kan ikke gemmes men man loggger automatisk ind efter registrering.

### Valg af sprog og frameworks/libraries

Jeg har valgt at bruge Node.js environment som udviklingsmiljø, da jeg har en del erfaring med dette go express API'er og
syntes det virker fantastisk at kode JavaScript/TypeScript full stack og så er det bare nemmere at det er samme sprog hele vejen igennem. 

Dertil har jeg valgt React som frontend framework, hvilket jeg har en del mindre erfaring med og det er også her en del af mine problemer har lagt med state bl.a. 
Dertil syntes jeg rigtig godt om React og har nydt at arbejde med det og vil fortsætte med at forbedre mine evner i React, samt lærer Angular. I retrospect skulle jeg nok valgt en anden måde at arbejde med fronenden på, også da jeg har arbejdet i en ældre React version og der var nye features og ændringer som jeg hurtigt skulle sætte mig ind i for at komme videre.

I slutspurten forsøgte jeg at redde mine state problemer med Redux, men havde ikke tid nok og det er ikke færdigt. 

Jeg valgte at Hoste på Heroku, da dette er super nemt og kan gøres med få kommandoer i terminalen.

Jeg undskylder på forhånd for mangel på kommentarer i koden, hvilket jeg normalt er stor tilhænger af, men det fandt jeg ikke tid til undervejs da der var en dealine :D

