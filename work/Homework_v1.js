let value = prompt('How old are you?', 0);

if (value < 18) {
  alert('You are minor');
} else if (value >= 18 && value < 65) {
  alert('You are adult');
} else if (value >= 65) {
  alert('You are senior');
}