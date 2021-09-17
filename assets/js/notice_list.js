(function init() {
  new Filters().start()
})()

function Filters() {
  const [grid, line] = Array.from(document.querySelectorAll('.layout_filter'))

  this.start = () => {
    console.log(grid, line)
    grid.addEventListener('click', () => {
      if (line.classList.contains('active')) line.classList.remove('active')

      grid.classList.add('active')

      const products = Array.from(document.querySelectorAll('.cards__card'))
      products.forEach(product => product.classList.remove('line'))
    })

    line.addEventListener('click', () => {
      if (grid.classList.contains('active')) grid.classList.remove('active')

      line.classList.add('active')

      const products = Array.from(document.querySelectorAll('.cards__card'))
      products.forEach(product => product.classList.add('line'))
    })
  }
}