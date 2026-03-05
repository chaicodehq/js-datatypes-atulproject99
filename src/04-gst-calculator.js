/**
 * 🧾 GST Calculator - Tax Lagao Bhai!
 *
 * Bunty apni dukaan ke liye GST calculator bana raha hai. Customer ko bill
 * dena hai jisme base price, GST amount, aur total clearly dikhna chahiye.
 * GST rate category ke hisaab se change hota hai.
 *
 * GST Rates (by category string, case-insensitive):
 *   - "essential"   => 0% GST  (dal, chawal, atta, etc.)
 *   - "food"        => 5% GST  (packaged food, restaurant below Rs 7500)
 *   - "standard"    => 12% GST (processed food, business class tickets)
 *   - "electronics" => 18% GST (phones, laptops, etc.)
 *   - "luxury"      => 28% GST (cars, aerated drinks, tobacco)
 *   - Any other category => return null
 *
 * Rules:
 *   - Calculate: gstAmount = amount * rate / 100
 *   - Calculate: totalAmount = amount + gstAmount
 *   - Round gstAmount aur totalAmount to 2 decimal places using
 *     parseFloat(value.toFixed(2))
 *   - Return object: { baseAmount, gstRate, gstAmount, totalAmount }
 *   - category ko lowercase mein compare karo (case-insensitive)
 *   - Hint: Use toFixed(), parseFloat(), Number.isFinite(), toLowerCase()
 *
 * Validation:
 *   - Agar amount positive finite number nahi hai, return null
 *   - Agar category string nahi hai, return null
 *   - Agar category unknown hai, return null
 *
 * @param {number} amount - Base amount before tax
 * @param {string} category - Product category
 * @returns {{ baseAmount: number, gstRate: number, gstAmount: number, totalAmount: number } | null}
 *
 * @example
 *   calculateGST(1000, "electronics")
 *   // => { baseAmount: 1000, gstRate: 18, gstAmount: 180, totalAmount: 1180 }
 *
 *   calculateGST(500, "essential")
 *   // => { baseAmount: 500, gstRate: 0, gstAmount: 0, totalAmount: 500 }
 */
export function calculateGST(amount, category) {
  // Your code here


  const gstCategory = [{
    name: 'essential',
    rate: 0
  }, {
    name: 'food',
    rate: 5
  }, {
    name: 'standard',
    rate: 12
  }, {
    name: 'electronics',
    rate: 18
  }, {
    name: 'luxury',
    rate: 28
  }]

  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount <= 0 || typeof category !== 'string' || category.length == 0 || gstCategory.filter((e) => e.name.toLowerCase() == category.toLowerCase()).length == 0) return null;

  const selectedCategory = gstCategory.find((e) => e.name.toLowerCase() == category.toLowerCase())
  const gstAmount = amount * selectedCategory.rate / 100;
  const totalAmount = gstAmount + amount;

  const finalGstAmount = parseFloat(gstAmount.toFixed(2));
  const finalTotalAmount = parseFloat(totalAmount.toFixed(2));
  return { baseAmount: amount, gstRate: selectedCategory.rate, gstAmount: finalGstAmount, totalAmount: finalTotalAmount };
}
