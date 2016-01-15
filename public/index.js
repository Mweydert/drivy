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


function rentPrice(tabDriver, tabCar)
{
	for(var i=0; i<tabDriver.length; i++)
	{
		var idCar = tabDriver[i].carId;
		var dist = tabDriver[i].distance;	
		var time = dateToDays(tabDriver[i].pickupDate, tabDriver[i].returnDate);
		
		for(var j=0; j<tabCar.length; j++)
		{
			if (idCar == tabCar[j].id)
			{
				priceKm = dist*tabCar[j].pricePerKm;
				
				var priceTime = 0;
				for(var k=1; k<=time; k++)
				{
					if(k==1)
					{
						priceTime += tabCar[j].pricePerDay;
					}
					if(1<k && k<5)
					{
						priceTime += 0.9*(tabCar[j].pricePerDay);
					}
					if(4<k && k<11)
					{
						priceTime += 0.7*(tabCar[j].pricePerDay);

					}
					if(k>10)
					{
						priceTime += 0.5*(tabCar[j].pricePerDay);
					}
				}
				
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
			console.log()
		}
		tabDriver[i].price = price;
		tabDriver[i].commission.insurance = insurance;
		tabDriver[i].commission.assistance = assistance;
		tabDriver[i].commission.drivy = drivy;
	}
}


rentPrice(rentals, cars);

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);


