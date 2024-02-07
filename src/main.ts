const btnElement = document.querySelector('button')

btnElement?.addEventListener('click', function () {
  this.classList.toggle('theme-toggle--toggled')
})
