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
				priceTime = time*tabCar[j].pricePerDay;
			}
		}
		var price = priceKm + priceTime;
		
		tabDriver[i].price = price;
	}
}

rentPrice(rentals, cars);
console.log(rentals);