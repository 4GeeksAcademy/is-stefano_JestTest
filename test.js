// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  } = require('./app.js');

// Start your first test
test('Hola soy el test', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("1 dollar debe ser 146.26 yenes", () => {
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expected, 2); // Usamos toBeCloseTo para evitar problemas con los decimales
});

test("100 yenes debe ser 0.56 pounds", () => {
    const pounds = fromYenToPound(100);
    const expected = (100 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 2); 
});


