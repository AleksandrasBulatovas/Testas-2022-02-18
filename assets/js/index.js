function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min) 
    }

   // 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

   let a = 30;
   let b = 20;

   if(a >= b) {
    console.log(a);
   }

   //2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

   for(let i = 1; i <= 10; i++) {
       console.log(i);
   }


   //3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

   for(let i = 0; i <= 10; i++) {
       if(i % 2 == 0) {
           console.log('trecia', i);
       }
   }

   // 4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

   for(let i = 0; i < 5; i++) {
    let x = randomSkaicius(1, 10);
    console.log(x);
   }
   

   // 5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

   let random;
   while(random != 5) {
       random = randomSkaicius(1, 10);
       console.log('Paskutinis turi but 5:', random);
   }

   // 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)

   let mas = [];

   for(let i = 0; i < 20; i++) {
       mas.push(randomSkaicius(10, 30));
      
   }
   console.log(mas);


   // 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

   let mas2 = [];
   let raides = 'ABCD';
   let kiekis = [];

   for(let i = 0; i < 100; i++) {
       mas2.push(raides.charAt(randomSkaicius(0, 3)));
   }
   console.log(mas2);

   mas2.forEach(function(o) {
       kiekis[o] = (kiekis[o] || 0) + 1;
   })
   console.log('Kiekis:', kiekis);


// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji.
// Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).

// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.
// Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(a, b) {
    let sum = 0;
    if(sum % 2 != 0) {
        return;        
    }
    console.log('Suma nelygine');
}
console.log(lygineSuma(10 + 10));


// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//     skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
//"(XXX) XXX-XXXX". (10 taškų)


