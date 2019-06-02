/**
 * Violeta Sosa
 * Geomundus confirmation email v.1.0.0
 * Created: 25.05.2019
 * Purpose: Retreive the information from the Google Form Spreedshet in the e variable and send the information on submit
 */


function sendEmail(e){
  var form=onFormSubmit(e);

// Send the email
  MailApp.sendEmail({
    to:  e.values[1],
    subject: 'Welcome to Geomundus 2019! - ' + e.values[2],
    htmlBody: form,
  });
}

function onFormSubmit(e) {

  // Retreive the template
  var htmlBody = HtmlService.createTemplateFromFile('mail_template');

  //Define attribute values from form. Notice "e" as the event (object) handling the information
  htmlBody.name = e.values[2];
  htmlBody.org=  e.values[3];
  htmlBody.country =e.values[4];
  htmlBody.food=e.values[5];
  htmlBody.geom=e.values[6];
  htmlBody.comments=e.values[7];

  //Recreate the template and the attribute values
  var tmp=(htmlBody.evaluate());
  //Create the HTML object with all the values from the form
  var nbody=HtmlService.createHtmlOutput(tmp).getContent();

  return nbody;
}
