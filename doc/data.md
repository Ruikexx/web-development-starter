
# Data Description

This application will manage data about Jobs, Companies and Job Applications.  You are
provided with a JSON file containing sample data for each of these: 
[sample-data.json](frontend/sample-data.json). The
fields in each type of data are as follows.

## User

A user in the system. Note that this data will be provided by Strapi when you start using
that as your backend (Level 3).  The fields of interest in User for us are:

* `username` - text field, the user name in the system
* `email` - the (unique) user email address

## Job

A Job is a listing on the jobs board describing a job opening for a particular company. 

* `id` - a unique integer identifier for the job
* `title` - text title for the job
* `description` - html formatted long-form description of the job
* `location` - textual location of the job, eg. Sydney, Work from home
* `type` - job type, eg. Part Time, Full Time
* `company` - relation with Company, the company offering this job
* `publishedAt` - timestamp recording when the job was published

Note that there are also `createdAt` and `updatedAt` timestamp fields, we 
won't make use of these.

## Company

A company is an organisation offering one or more jobs. 

* `id` - a unique integer identifier for the company
* `name` - text field name of the company
* `url` - URL of the company website
* `logo` - URL of the company logo (if available)
* `jobs` - relation with Job, the jobs offered by the company

## Job Application

A job application is completed by a User to apply for a particular Job.  

* `id` - a unique integer identifier for the application
* `user` - relation with User, the user applying for the job
* `job` - relation with Job, the job applied for
* `text` - the text of the job application letter
* `status` - one of `submitted`, `accepted`, `rejected`

When a job application is submitted, the status is set to `submitted`. Once
it has been reviewed by the company, the status will change to `accepted` or
`rejected`.