window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

//retrieves the user's input and returns an object with each amount, years, and rate
function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Identify the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const initialValues = { amount: 5000, years: 3, rate: 2 };
	const loanAmountInput = document.getElementById('loan-amount');
	const yearInput = document.getElementById('loan-years');
	const rateInput = document.getElementById('loan-rate');
	loanAmountInput.value = initialValues.amount;
	yearInput.value = initialValues.years;
	rateInput.value = initialValues.rate;
	update();
}

// Get the current values from the UI (call getCurrentUIValues())
// Update the monthly payment display by CalculatingMonthlyPayment of the user's input
function update() {
	userInput = getCurrentUIValues();
	updateMonthly(calculateMonthlyPayment(userInput));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string that always has 2 decimal places (for the cent amount; eg 150.67.)

function calculateMonthlyPayment(values) {
	const rate = values.rate / 100 / 12;
	const n = values.years * 12;
	const numerator = values.amount * rate;
	const denominator = 1 - Math.pow(1 + rate, -n);
	return (numerator / denominator).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
//This function just updates the DOM with the monthly payment amount displayed
function updateMonthly(monthly) {
	const monthlyPayment = document.getElementById('monthly-payment');
	monthlyPayment.innerText = monthly;
}
