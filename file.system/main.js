const fs = require('fs')

fs.writeFile('./trash.txt', 'yo', (err) => {
  if (err) throw err
  console.log(`[${err}] saved`)
})

// Avoid this
fs.writeFileSync('./trash.txt', 'yo')

fs.readFile('./trash.txt', (err, data) => {
  console.log(err, data)
})
