var age = parseInt (window.prompt("saisissez un age"))
var i = 0;
var j = 0;
var k = 0;
var l = 0;
while (age<=100)
{

	
if (age<20)
    {
        i++
    }
 if (age>=20 && age<=40)
    {
        j++
    }
	if (age>=40 && age<=100)
	{
        k++
	}

    age = (window.prompt("saisissez un age"))

}
if (age>100)
    {
        l++
    }

console.log("il y a "+ i + " personnes de -20 ans")
console.log("il y a "+ j + " personnes comprises en 20 et 40 ans")
console.log("il y a "+ k + " personnes de + de 40 ans et de moins de 100ans")
console.log("il y a "+ l + " centenaire")