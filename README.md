#PERSONAL COMMENT
The results can be viewed in the 2nd array. The result's values are the amount that needed to be pay /given by/for each actor after the modification.

# DRIVY

> javascript workshop based on drivy

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [DRIVY](#drivy)
  - [Intro](#intro)
  - [Just tell me what to do](#just-tell-me-what-to-do)
  - [Don't forget:](#dont-forget)
  - [Exercises](#exercises)
    - [Exercise 1 - Euro-Kilometers](#exercise-1---euro-kilometers)
      - [Rental prices](#rental-prices)
      - [Just tell me what to do](#just-tell-me-what-to-do-1)
    - [Exercise 2 - Drive more, pay less](#exercise-2---drive-more-pay-less)
      - [Decreasing pricing for longer rentals](#decreasing-pricing-for-longer-rentals)
      - [New price rules](#new-price-rules)
      - [Just tell me what to do](#just-tell-me-what-to-do-2)
    - [Exercise 3 - Give me all your money](#exercise-3---give-me-all-your-money)
      - [Commission](#commission)
      - [Just tell me what to do](#just-tell-me-what-to-do-3)
    - [Exercice 4 - The famous deductible](#exercice-4---the-famous-deductible)
      - [The deductible](#the-deductible)
      - [Just tell me what to do](#just-tell-me-what-to-do-4)
    - [Exercise 5 - Pay the actors](#exercise-5---pay-the-actors)
      - [The actors](#the-actors)
      - [Just tell me what to do](#just-tell-me-what-to-do-5)
    - [Exercise 6 - Rental modification](#exercise-6---rental-modification)
      - [New dates and distance](#new-dates-and-distance)
    - [Just tell me what to do](#just-tell-me-what-to-do-6)
  - [Source](#source)
  - [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Intro

My brother is a daily user of [Drivy](https://www.drivy.com/), a french peer-to-peer car rental service.

He lists their 3 cars:

* Peugeot 306
* Range Rover Sport
* Porsche Boxter

Any person, call the `driver` can book a car for given dates/distance.

## Just tell me what to do

1. Fork the project via `github`
1. Clone the project `git clone https://github.com/YOUR_USERNAME/drivy`
1. Solve each exercises inside `index.js` file with JavaScript
1. Once the exercise is solved, commit something like `git ac "decrease pricing for longer rentals (exo 2)"`
1. 6 exercises, so 6 commits
1. Don't forget to push before 4 PM
1. Check your codebase by opening [/public/index.html](./public/index.html)
1. Check the ouput in your browser console

## Don't forget:

* DRY - Don't repeat yourself
* DOT - Do One Thing
* KISS - Keep It Simple Stupid
* LIM - Less Is More
* English only: codebase, variables, comments...

**Focus only on coding, forgot the browser display (next workshop!). Use `console.log` to display results (for the moment)**

## Exercises

### Exercise 1 - Euro-Kilometers

#### Rental prices

My brother chooses a price per day and price per kilometers for their 3 cars.

The driver then books the car for a given period and an approximate distance.

The rental price is the sum of a time component and a distance component with

* **time component**: the number of rental days multiplied by the car's price per day

- **distance component**: the number of kilometers multiplied by the car's price per km

```
rental price = time + distance
```

#### Just tell me what to do

Write code that generates the price for each `driver` from `index.js` file:

```js
{
  var rentals = ...;
  ...
  console.log(rentals);

  //output from console.log
  [
    {
      "id": "1-pb-92",
      ...
      "price": ?
    },
    {
      "id": "2-rs-92",
      ...
      "price": ?
    },
    {
      "id": "3-sa-92",
      ...
      "price": ?
    }
  ]
```

### Exercise 2 - Drive more, pay less

#### Decreasing pricing for longer rentals

To be as competitive as possible, drivy decide to have a decreasing pricing for longer rentals.

#### New price rules

* **price per day** decreases by **10% after 1 day**
* **price per day** decreases by **30% after 4 days**
* **price per day** decreases by **50% after 10 days**

#### Just tell me what to do

Adapt the rental price computation to take these new rules into account.

```js
{
  var rentals = ...;
  ...
  console.log(rentals);

  //output from console.log
  [
    {
      "id": "1-pb-92",
      ...
      "price": ?
    },
    ...
  ]
```

### Exercise 3 - Give me all your money

Now, my brother wants his money !

Drivy take a 30% commission on the rental price to cover their costs.

#### Commission

The commission is split like this:

* **insurance**: half of commission
* **roadside assistance** 1€ per day
* **drivy**: the rest

#### Just tell me what to do

Compute the amount that belongs to the insurance, to the assistance and to drivy.

```js
{
  var rentals = ...;
  ...
  console.log(rentals);

  //output from console.log
  [
    {
      "id": "1-pb-92",
      ...
      "commission": {
        "insurance": ?,
        "assistance": ?,
        "drivy": ?
      }
    },
    ...
  ]
```

### Exercice 4 - The famous deductible

In case of an accident, drivy applies a 800€ euros deductible.

The driver can reduce the deductible amount from 800€ to 150€ with a `deductible option` for a few more euros per day.

#### The deductible

The driver is charged an additional 4€/day when he chooses the `deductible reduction` option.

**The additional charge goes to drivy, not to the car owner.**

#### Just tell me what to do

Compute the new amount price if the driver subscribed to `deductible option`.

```js
{
  var rentals = ...;
  ...
  console.log(rentals);

  //output from console.log
  [
    {
      "id": "1-pb-92",
      'options': {
        'deductibleReduction': true
      },
      ...
      "price": ?
    },
    ...
  ]
```

### Exercise 5 - Pay the actors

#### The actors

It's time to debit/credit each actor!

- **the driver** must pay the **rental price** and the **(optional) deductible reduction**
- **the owner** receives the **rental price** minus the **commission**
- **the insurance** receives its part of the **commission**
- **the assistance** receives its part of the **commission**
- **drivy receives** its part of the **commission**, plus the **deductible reduction**

#### Just tell me what to do

* Compute the debit for the `driver`
* Compute the credit of the car `owner`, `insurance`, `assistance` and `drivy`.

```js
{
  var actors = ...;
  ...
  console.log(actors);

  //output from console.log
  [
    {
      "rentalId": "1-pb-92",
      "payment": [
        {
          "who": "driver",
          "type": "debit",
          "amount": ?
        },
        {
          "who": "owner",
          "type": "credit",
          "amount": ?
        },
        {
          "who": "insurance",
          "type": "credit",
          "amount": ?
        },
        {
          "who": "assistance",
          "type": "credit",
          "amount": ?
        },
        {
          "who": "drivy",
          "type": "credit",
          "amount": ?
        }
      ]
    },
    ...
  ]
```

### Exercise 6 - Rental modification

Some users want to modify the dates/distance for a given rental.

#### New dates and distance

* Drivy computes the amount that was already paid by (or given to) each actor
* Using the new dates/distance, drivy re-computes the price of the rental, the "deductible reduction" amount, the commission, ...
* Drivy compute the delta amount [1] that must be debited/credited for each actor
* Each actor receives a debit/credit payment to settle his debt

What is the delta amounts for each actor?

[1] the delta amount is basically the difference between:
- the amount the actor owes (or is owed) *after* the modification
- the amount the actor has already paid (or been given) *before* the modification

#### Just tell me what to do

Compute the debit for the `driver` and the credit of the car `owner`, `insurance`, `assistance` and `drivy` with the rental modification.

## Source

[Drivy Challenges](https://github.com/drivy/jobs)

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
