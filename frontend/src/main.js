import { splitHash} from "./router.js"
import { HelpView, AboutUsView} from "./view.js"

let TenJobs =[]

function load_jobs(){

    fetch('/sample-data.json')
    .then((response) => {
        return response.json()
    })
    .then((data)=> {
        TenJobs = data.jobs
        redraw()
    })  
}


const redraw = () => {

    const pathInfo = splitHash(window.location.hash)

    if(pathInfo.path === "jobs") {
        if(pathInfo.id === 'About Us'){
        AboutUsView('content')
        }
    } else {
        if(pathInfo.id === 'Applicant Help'){
        HelpView('content')
        }
    }
}


window.onload = loadData; 
window.onhashchange = redraw;
