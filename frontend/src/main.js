import { Router} from "./router.js";
import { HelpView, AboutUsView, jobListView,errorView, onejobView} from "./view.js";
// import {Model} from "./model.js";

let Alljobs=[]



const router =new Router(errorView)

router.get('/', () => {
   const list = get10jobs()
   jobListView('content',list)
})

router.get('/about', ()=>{
    AboutUsView('content')
})

router.get('/help', ()=>{
    HelpView('content')
})


const getjobs = (id) => {
    for(let i=0; i<Alljobs.length; i++) {
        if (Alljobs[i].id == id) {
            return Alljobs[i]
        }
    }
    return null
}

const get10jobs = () => {
    return Alljobs
}

const loadData = () => {
    fetch('/sample-data.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        Alljobs = data.jobs.slice(0,10)
        redraw()
    })
}

const redraw = () => {
     router.route()
     if(router.route === "jobs"){
         const job = getjobs(id)
         onejobView('content',job)    
     }
    }
    

window.onload = loadData;

