export const AboutUsView = (id) =>{
  const content =`
  <h1>This is the introduction about Bob's Jobs</h1>
  
  <p> Bob's Jobs :Provide spiritual and physical help to all those who feel lonely and spiritually empty (also make money).</p>
  <p>Bob's Jobs is a revolution in career planning brought to you
  by Bob Bobalooba himself!</p>
  `
  const target = document.getElementById(id)
  target.innerHTML = content
}

export const HelpView = (id) =>{
  const content =`
  <h1>Need help?</h1>

  <p> We have the most professional help team to solve your employment problems. If you feel that you need a high-paying job without physical strength and brain, we sincerely suggest to you: you can get it by dreaming.</p>
  <p>  Be sure to he honest in your application!  </p>
  `
  const target = document.getElementById(id)
  target.innerHTML = content
}

export const homeView = (id , job) => {
  const template = Handlebars.compile(`
  <div class=job>
  <ul>
  <li>Title: {{title}}</li>
  <li>Location: {{location}}</li>
  <li>Type: {{type}}</li>
  </div>
  `)
}