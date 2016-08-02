$(document).ready(function(){

  function emptyContainer(){
    $('#jobs-container').empty();
  }

  $('.empty').click(emptyContainer);

  function getData(e){
    emptyContainer();
    $('#jobs-container').append($('<img src="http://www.arabianbusiness.com/skins/ab.main/gfx/loading_spinner.gif">'))
    let url = $(e.target).attr('data-url');
    return $.get(url)
  }

  function appendJob(job){
    let $business_title = $('<h4>').text(job.business_title);
    let $job_description = $('<h5>').text(job.job_description)
    let $div = $('<div>')
    $('#jobs-container').append($div.append($business_title, $job_description));
    console.log(job)
  }

  function getJobs(e){
    getData(e).done(function(data){
        emptyContainer();
        data.forEach(appendJob);
    });
  }

  $('button.redirect').click(getJobs)


})

