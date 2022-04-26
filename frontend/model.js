export {Model}


const Model = {
 job_url: '/sample-data.json',
 data:{
     jobs : [],
 }
 load : function(){


    fetch(this.job_url)
    .then((response) => {
        return response.json()
    })
    .then((data) {
           this.data.jobs=data.jobs
           let event = new CustomEvent("modelUpdated")
       window.dispatchEvent(event)
       })
} 
}



