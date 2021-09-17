(function init() {
  new HamburguerMenu().start()
})()

function HamburguerMenu() {
  const hamburgerButton = document.querySelector('.header__hamburguer')
  const hamburgerMenu = document.querySelector('.hamburguer__menu')

  this.start = () => {
    hamburgerButton.addEventListener('click', () => {
      hamburgerMenu.classList.add('active')

      this._toCloseMenu()
    })
  }

  this._toCloseMenu = () => {
    hamburgerMenu.addEventListener('click', (e) => {
      if (e.target.closest('.hamburguer__menu__list')) return

      hamburgerMenu.classList.remove('active')
    })
  }
}