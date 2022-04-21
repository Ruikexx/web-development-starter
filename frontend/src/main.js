import { homeView } from "./view.js"

let allJobs = []

const loadData =() =>{
    fetch('/sample-data.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        allJobs = data.jobs
        redraw()
    })
}

const getJob = (id) => {
    for(let i=0; i<allJobs.length; i++) {
        if (allJobs[i].id == id) {
            return allJobs[i]
        }
    }
    return null
}

const getJobs = () => {
    return allJobs
}

const redraw = () => {

    const pathInfo = split_hash(window.location.hash)

    if (pathInfo.path === "jobs") {
        if (pathInfo.id) {
            const job = getJob(pathInfo.id)
            bookView('content', job)
        } else {
            const jobs = getJobs()
            bookListView('content', jobs)
        }
    } else {
        homeView('content')
    }
}


window.onload = loadData; 
window.onhashchange = redraw;

