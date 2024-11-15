function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    
    if (isNaN(weight) || isNaN(height)) {
      document.getElementById('bmiResult').innerHTML = "Please enter valid numbers.";
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    let bmiCategory = '';
  
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }
  
    document.getElementById('bmiResult').innerHTML = `Your BMI is ${bmi} (${bmiCategory}).`;
  }