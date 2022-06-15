var PU = parseInt (prompt("entrez le prix unitaire"));
var QTECOM = parseInt (prompt("entrez la quantite commandée"));
var PAP = parseInt;
var REM = 0.02;
var PORT;
var TOT;

TOT = (PU * QTECOM)
if (TOT >=100 && TOT<=200)
  {
    TOT = TOT * 0.95
  }
if (TOT > 200)
  {
    TOT = TOT * 0.9
  }
if (TOT < 500)
  {
    TOT = TOT + TOT * REM
  }
if (REM * TOT <= 6)
	{
    REM = REM * TOT
    TOT = TOT + 6
  	TOT = TOT - REM
  }

console.log(TOT)