/**
 * Violeta Sosa
 * GitHub @violetasdev
 * Geomundus confirmation email v.1.0.0
 * 25.05.2019
 * @Retreive the information from the Google Form Spreedshet in the e variable and send the information on submit
 */


function sendEmail(e){
  var form=onFormSubmit(e);

  MailApp.sendEmail({
    to:  e.values[1],
    subject: 'Welcome to Geomundus 2019! - ' + e.values[2],
    htmlBody: form,
  });
}

function onFormSubmit(e) {
  var htmlBody = HtmlService.createTemplateFromFile('mail_template');

  htmlBody.name = e.values[2];
  htmlBody.org=  e.values[3];
  htmlBody.country =e.values[4];
  htmlBody.food=e.values[5];
  htmlBody.geom=e.values[6];
  htmlBody.comments=e.values[7];


  var tmp=(htmlBody.evaluate());
  var nbody=HtmlService.createHtmlOutput(tmp).getContent();

  return nbody;
}
