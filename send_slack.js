var Slack = require('slack-node');
 
var webhookUri = "https://hooks.slack.com/services/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";
 
var slack = new Slack();
slack.setWebhook(webhookUri);
 
slack.webhook({
  channel: "#api-salud-profesional",
  username: "webhookbot",
  text: "This is posted to #general and comes from a bot named webhookbot."
}, function(err, response) {
  console.log(response);
});