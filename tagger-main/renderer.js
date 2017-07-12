var click = 0;
var faker = require('faker');
var email = getNewEmail();
var username = faker.internet.userName();
var fs = require('fs');

$(document).ready(function() {
  $("#email-content").html(email.content);
  $("#sender").html('<b>'+"Sender: " + '</b>' + email.sender);
  $("#receiver").html('<b>'+"Receiver: " + '</b>' +email.receiver);
  $("#subject").html('<b>'+"Subject: " + '</b>' +email.subject);

  $("#submit").click(function(){
    if ($("input").is(':checked')){
    email = getNewEmail();
    $("#bottom").html("Last email marked as" + '<b>' + getLabels() + '</b>');
    clearchk();
    $("#email-content").html(email.content);
    $("#sender").html('<b>'+"Sender: " + '</b>' + email.sender);
    $("#receiver").html('<b>'+"Receiver: " + '</b>' +email.receiver);
    $("#subject").html('<b>'+"Subject: " + '</b>' +email.subject);

  }});

});

function getNewEmail(){
   return email = {
      id: faker.random.number(),
      sender: faker.internet.email(),
      receiver: faker.internet.email(),
      subject: faker.lorem.words(),
      content:  faker.lorem.paragraphs() + '<br><br><center><img src="' + faker.image.cats() + '"/></center>'
  };
}

function clearchk() {
var f = document.forms[0];
	for(i=0; i<f.elements.length; i++) {
		if(f[i].type == "checkbox") {
			f[i].checked = false;
		}
	}
}

function getLabels(){
  var re = "";
  if($("#spam").is(":checked")){
    re += " | spam";
  }
  if ($("#phish").is(":checked")) {
    re += " | phish";
  }
  if ($("#malware").is(":checked")) {
    re += " | malware";
  }
  if ($("#p2p").is(":checked")) {
    re += " | person-to-person";
  }
  if ($("#promo").is(":checked")) {
    re += " | promotional";
  }
  if ($("#info").is(":checked")) {
    re += " | informational";
  }
  if ($("#trans").is(":checked")) {
    re += " | transactional";
  }
  if ($("#notif").is(":checked")) {
    re += " | notification";
  }
  re += " |";
  return re;
}
