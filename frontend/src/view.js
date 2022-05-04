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

  <p> We have the most professional help team to solve your employment problems.</p>
  <p>  Be sure to he honest in your application!  </p>
  `
  const target = document.getElementById(id)
  target.innerHTML = content
}

export const jobListView = (id, jobArray) => {

  const template = Handlebars.compile(`
      <div class=job>
        <ul>
          {{#each array}}
              <li><a href="/#!/jobs/id"{{id}}>{{attributes.title}}>{{attributes.location}}>{{attributes.type}} by {{attributes.company.data.attributes.name}}</a></li>
          {{/each}}
        </ul>
      </div>
  `)
  const target = document.getElementById(id)
  target.innerHTML = template({array: jobArray})
}

export function onejobView(id, job){
  const template = Handlebars.compile(`
  <div class=job-description>
    <h2>{{attributes.title}}</h2>
    <p>{{attributes.description}}</p>
    <ul>
      <li>CreatedAt: {{attributes.createdAt}}</li>
      <li>UpdatedAt: {{attributes.updatedAt}}</li>
      <li>PublishedAt: {{attributes.publishedAt}}</li>
      <li>Type: {{attributes.type}}</li>
      <li>Company: {{attributes.company.data.attributes.name}}</li>
      <li>Company createdAt: {{attributes.company.data.attributes.createdAt}}</li>
      <li>Company updatedAt: {{attributes.company.data.attributes.updatedAt}}</li>
      <li>Company publishedAt: {{attributes.company.data.attributes.publishedAt}}</li>
      <li>Link Url: {{attributes.company.data.attributes.url}}</li>
      <img src={{logo}} alt="company logo">
  </div>`)

  const target = document.getElementById(id)
  target.innerHTML = template(job)
}



export const errorView = () => {
 
   const target = document.getElementById('content')

   target.innerHTML = "<p>Page not found</p>";
}
