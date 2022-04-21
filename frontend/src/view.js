
export const homeView = (id) => {
  const template = Handlebars.compile(`
  <div class=home>
    <h2>{{title}}</h2>
    <h3>{{location}}</h3>
    <h3>{{type}}</h3>
  </div>`)

  const target = document.getElementById(id)
  target.innerHTML = template(book)
}