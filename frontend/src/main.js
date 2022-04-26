import { Router} from "./router.js"
import { HelpView, AboutUsView, homeView} from "./view.js"

let jobs=[]

window.onload =() => data.jobs

const router =new Router(HelpView)

router.get('/', () => {
    jobListView('content',0-10)
})

router.get('/about', ()=>{
    AboutUsView('content')
})

router.get('/help', ()=>{
    HelpView('content')
})

const gettenjobs = (id) => {
    
    return null
}


const redraw = () => {

    const pathInfo = router.splitHash(window.location.hash)

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


window.onload = redraw; 

