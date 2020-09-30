//Game variables
var clickpower = 1;
var cps = 0;
var cookies = 0;
var cookie = document.getElementById('cookie');
var cpsspan = document.getElementById('cps-span');
var cookiespan = document.getElementById('cookie-span');

//shop variables
var PurchaseGrandma = document.getElementById("GrandmaPurchase");
var Grandmas = 0;
var GrandmaCost = 50;

var PurchaseFactory = document.getElementById("FactoryPurchase");
var Factories = 0;
var FactoryCost = 1000;

var PurchaseMine = document.getElementById("MinePurchase");
var Mines = 0;
var MineCost = 10000;

//Game functions
function Update() {
	cookies = Math.floor(cookies);
	clickpower = 1 + cps;
	cpsspan.innerHTML="CPS: " + Math.floor(cps);
	cookiespan.innerHTML="Cookie: " + cookies;
	MineCost = Math.floor(10000 + (1000*(0.3*Mines)));
	FactoryCost = Math.floor(1000 + (1000*(0.3*Factories)));
	GrandmaCost = Math.floor(50 + (50*(0.3*Grandmas)));
	PurchaseGrandma.innerHTML = "Purchase Grandma, +1 CPS, " + GrandmaCost + " Cookies";
	PurchaseFactory.innerHTML = "Purchase Factory, +5 CPS, " + FactoryCost + " Cookies";
	PurchaseMine.innerHTML = "Purchase Mine, +20 CPS, " + MineCost + " Cookies";
}
function EarnCookies(x) {
	cookies = cookies + x;
}
function Click() {
	EarnCookies(clickpower);
	Update();
}

//Shop Purchase functions

function PurchaseAGrandma(){
	if(cookies >= GrandmaCost){
		cookies = cookies - GrandmaCost;
		cps = cps + 1;
		Grandmas = Grandmas + 1;
		Update();
	}
}
function PurchaseAFactory(){
	if(cookies >= FactoryCost){
		cookies = cookies - FactoryCost;
		cps = cps + 5;
		Factories = Factories + 1;
		Update();
	}
}
function PurchaseAMine(){
	if(cookies >= MineCost){
		cookies = cookies - MineCost;
		cps = cps + 20;
		Mines = Mines + 1;
		Update();
	}
}
//Event Listeners
cookie.addEventListener("click", Click);
PurchaseGrandma.addEventListener("click", PurchaseAGrandma);
PurchaseFactory.addEventListener("click", PurchaseAFactory);
PurchaseMine.addEventListener("click", PurchaseAMine);