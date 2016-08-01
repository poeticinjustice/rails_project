// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


function renderJob( job ) {
  var $container = $('#jobs');
  var $job = $('<li class="job">');
  var $business_title = $('<a target="_blank" href="' + job.business_title + '">')
  $business_title.text( job.business_title );
  $job.append( $business_title );
  $container.append( $job );
}

function getJobs() {
  $.getJSON('/jobs').done(function( jobs ) {
    jobs.results.forEach(function( job ) {
      renderJob( job );
    })
  })
}



$(function() {
  getJobs();
})
