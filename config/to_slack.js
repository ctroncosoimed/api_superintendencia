module.exports = {
  send_mesage_slack: async function(data){

    var Slack = require('slack-node');
 
    var webhookUri = process.env.WEBHOOK_SLACK;
     
    var slack = new Slack();
    slack.setWebhook(webhookUri);
     
    slack.webhook({
      channel: "#api-salud-profesional",
      username: "Problem",
      icon_emoji: ":bangbang:",
      text: data.message
    }, function(err, response) {
      console.log(response);
      return response
    });
    
  }
}