var number = [
{name: 'I', value: 1},
{name: 'IV', value: 4},
{name: 'V', value: 5},
{name: 'IX', value: 9},
{name: 'X', value: 10},
{name: 'XL', value: 40},
{name: 'L', value: 50},
{name: 'XC', value: 90},
{name: 'C', value: 100},
{name: 'CD', value: 400},
{name: 'D', value: 500},
{name: 'CM', value: 900},
{name: 'M', value: 1000}]
function arabicToRoman (num) {
  var result = ''
  do {
    for (var j = 12; j >= 0; j--) {
      if (num >= number[j].value) {
        num = num - number[j].value
        result += number[j].name
        break
      }
    }
  } while (num !== 0)

  return result
}
