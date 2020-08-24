function calculateDogAge() {
    var myAge = document.getElementById('years').value;
    var dogAge = myAge * 7;

    document.getElementById('wynik').innerHTML = dogAge + ' years old in human years.';

}