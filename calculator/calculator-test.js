describe('calculateMonthlyPayments test', () => {
	it('should calculate the monthly rate correctly', () => {
		obj1 = { amount: 40000, years: 35, rate: 2.5 };
		expect(calculateMonthlyPayment(obj1)).toEqual('143.00');
	});

	it('should return a result with 2 decimal places', () => {
		obj1 = { amount: 25000, years: 15, rate: 4 };
		expect(calculateMonthlyPayment(obj1)).toEqual('184.92');
	});
});
