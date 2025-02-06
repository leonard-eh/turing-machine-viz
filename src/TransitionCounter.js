'use strict';

var transitionCount = 0;
var isInitialized = false;
var transitionCounter;

function initialize(counter) {
  if (!isInitialized) {
    transitionCounter = counter;
    updateCounter();
    isInitialized = true;
  }
}

function updateCounter() {
  transitionCounter.innerText = transitionCount;
}

function increment() {
  transitionCount++;
  updateCounter();
}

function reset() {
  transitionCount = 0;
  updateCounter();
}

function decrement() {
  transitionCount--;
  updateCounter();
}

function getTransitionCount() {
  return transitionCount;
}

function getIsInitialized() {
  return isInitialized;
}

exports.initialize = initialize;
exports.isInitialized = getIsInitialized;
exports.getTransitionCount = getTransitionCount;
exports.reset = reset;
exports.increment = increment;
exports.decrement = decrement;