const chatbase = require('@google/chatbase');
//var intent = "INTENT"; 


function ChatbaseClient (intent, fromClient, fromServer){
var messageSet = chatbase.newMessageSet()
  .setApiKey("156cfa22-13c6-40f2-aa04-de6a9aae3be0") // Chatbase API key
  .setPlatform("sently-chat-platform"); // Chat platform name
    
// Track the message from the user
const userMessage = messageSet.newMessage() 
  .setAsTypeUser() 
  .setUserId("sently-user-XYZ") 
  .setTimestamp(Date.now().toString()) // Mandatory
  .setIntent(intent) // The intent decoded from the user message, if applicable
  .setMessage(fromClient); 
    
// Was the intent successfully decoded?
if (intent == "UNKNOWN") {
  userMessage.setAsNotHandled(); // Tell Chatbase to mark this user request as "not handled"
} else {
  userMessage.setAsHandled(); 
}
    
// Track the response message from the bot
const botMessage = messageSet.newMessage() 
  .setAsTypeAgent() 
  .setUserId("sently-user-XYZ") 
  .setTimestamp(Date.now().toString())
  .setMessage(fromServer); 
    
// Send all messages to Chatbase
return messageSet.sendMessageSet()
  .then(response => {
    var createResponse = response.getCreateResponse();
    return createResponse.all_succeeded; 
  })
  .catch(error => {
    console.error(error);
    return false;
  });
 };
 module.exports = ChatbaseClient;