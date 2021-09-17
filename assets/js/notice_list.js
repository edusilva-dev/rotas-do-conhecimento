(function init() {
  new Order().start()
  new Filters().start()
})()

function Order() {
  const orderBtn = document.querySelector('.filters__order_by__container')
  const orderTypes = ['date', 'asc', 'desc']

  this.start = () => {
    orderBtn.addEventListener('click', () => {
      const dropdownContainer = orderBtn.querySelector('.filters__order_by__container__select')
      dropdownContainer.classList.toggle('active')
      
      this._onSelectOrder()
    })
  }

  this._onSelectOrder = () => {
    const options = document.querySelectorAll('.filters__order_by__container__select__option')
    options.forEach(option => {
      option.addEventListener('click', () => {
        const order = option.getAttribute('data-order')
        this._orderCards(order)
        this._changeLabel(option)
      })
    })
  }

  this._orderCards = (orderType, option) => {
    const cards = Array.from(document.querySelectorAll('.cards__card'))
    const cardInfos = cards.map((card, idx) => ({
      info: orderType == "date" ? new Date(card.getAttribute('data-date')) : card.getAttribute('data-name'),
      idx
    }))

    const ordenatedArray = (cardInfos.sort(function(a, b){
      if (orderType == "asc") {
        return compareStrings(a.info, b.info)
      } else if (orderType == "desc") {
        return compareStrings(b.info, a.info);
      }
    }))

    let index = 0
    for (infos of ordenatedArray) {
      cards[infos.idx].style.order = index
      index++
    }
  }

  this._changeLabel = (orderSelected) => {
    const currentLabel = document.querySelector('.filters__order_by__container__selected')
    currentLabel.textContent = orderSelected.textContent
  }
}

function Filters() {
  const [grid, line] = Array.from(document.querySelectorAll('.layout_filter'))

  this.start = () => {
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

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}