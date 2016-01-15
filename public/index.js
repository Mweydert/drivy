'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


//functions to compute price
function dateToDays(d1,d2)
{
	 var date1 = new Date(d1);
	 var date2 = new Date(d2);
	 
	 return result = 1+(date2-date1)/86400000;
}


function rentPrice(tabDriver, tabCar, tabActors)
{
	for(var i=0; i<tabDriver.length; i++)
	{
		var time = dateToDays(tabDriver[i].pickupDate, tabDriver[i].returnDate);
		
		for(var j=0; j<tabCar.length; j++)
		{
			if (tabDriver[i].carId == tabCar[j].id)
			{
				//Prix au km
				var priceKm = tabDriver[i].distance*tabCar[j].pricePerKm;
	
				//Prix durée
				var priceTime = 0;
				for(var k=1; k<=time; k++)
				{
					if(k==1)
					{
						priceTime += tabCar[j].pricePerDay;
					}
					else if(1<k && k<5)
					{
						priceTime += 0.9*(tabCar[j].pricePerDay);
					}
					else if(4<k && k<11)
					{
						priceTime += 0.7*(tabCar[j].pricePerDay);

					}
					else if(k>10)
					{
						priceTime += 0.5*(tabCar[j].pricePerDay);
					}
				}
				
				//Prix option deductible
				var deductibleReductionPrice = 0;
				if(tabDriver[i].options.deductibleReduction == true)
				{
					deductibleReductionPrice = 4*time;
				}
			}
			var price = priceKm + priceTime + deductibleReductionPrice;
			
			var commission = 0.3*(price-deductibleReductionPrice);
			var insurance = 0.5*commission;
			var assistance = time*1;
			var drivy = commission - insurance - assistance + deductibleReductionPrice;
		}
		
		
		//Modification du tableau des locations
		tabDriver[i].price = price;
		tabDriver[i].commission.insurance = insurance;
		tabDriver[i].commission.assistance = assistance;
		tabDriver[i].commission.drivy = drivy;

		//Modification du tableau des acteurs		
		for(var j=0; j<tabActors.length; j++)
		{
			if(tabDriver[i].id == tabActors[j].rentalId)
			{
				for(var l=0; l<tabActors[j].payment.length; l++)
				{
					switch(tabActors[j].payment[l].who)
					{
						case "driver":
							tabActors[j].payment[l].amount = tabDriver[i].price;
						break;
						
						case "owner":
							tabActors[j].payment[l].amount = tabDriver[i].price - commission;
						break;
						
						case "insurance":
							tabActors[j].payment[l].amount = tabDriver[i].commission.insurance;
						break;
						
						case "assistance":
							tabActors[j].payment[l].amount = tabDriver[i].commission.assistance;
						break;
						
						case "drivy":
							tabActors[j].payment[l].amount = tabDriver[i].commission.drivy;
						break;
					}
				}	
			}
		}
	}
}



rentPrice(rentals, cars, actors);

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);


