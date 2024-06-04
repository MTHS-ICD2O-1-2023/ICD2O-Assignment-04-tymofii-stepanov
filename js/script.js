// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2024
// This file contains the JS functions for index.html

"use strict"

function calculateCost() {
  const size = document.querySelector('input[name="size"]:checked').value
  const toppings = parseInt(document.querySelector('input[name="topping"]:checked').value)

  let sizeCost = 0
  let toppingsCost = 0
  const HST = 0.13

  if (size == "large") {
    sizeCost = 6.00
  } else if (size == "extraLarge") {
    sizeCost = 10.00
  }

  if (toppings == 1) {
    toppingsCost = 1.00
  } else if (toppings == 2) {
    toppingsCost = 1.75
  } else if (toppings == 3) {
    toppingsCost = 2.50
  } else if (toppings == 4) {
    toppingsCost = 3.35
  }

  const subtotal = sizeCost + toppingsCost
  const tax = subtotal * HST
  const totalCost = subtotal + tax

  document.getElementById("calculationResult").innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax (HST): $${tax.toFixed(2)}</p>
    <p>Total Cost: $${totalCost.toFixed(2)}</p>
  `
}
