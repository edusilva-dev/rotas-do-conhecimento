(function init() {
  new Notice().start()
})()

function Notice() {
  const noticeTitle = document.querySelector('.notice_detail__title')

  this.start = () => {
    const URLParams = new URLSearchParams(document.location.href.split('?')[1]).get('notice_name')
    noticeTitle.textContent = URLParams
  }
}