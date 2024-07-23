
function init() {
    document.getElementById('reply').addEventListener('click', sendMessage);
    document.getElementById('msg_send').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
  }
  
  function sendMessage() {
    const messageInput = document.getElementById('msg_send');
    const message = messageInput.value.trim();
    
    if (message === "") {
      return;
    }
  
    displayMessage('user', message);
    messageInput.value = '';
  
    const response = getBotResponse(message);
    displayMessage('bot', response);
  }
  
  function getBotResponse(message) {
    const responses = {
      "hi": "Hello! How can I help you today?",
      "hello": "Hi there! What can I do for you?",
      "how are you": "I'm just a bot, but I'm doing great! How about you?",
      "what is your name": "I'm Aco, your friendly chatbot.",
      "bye": "Goodbye! Have a great day!",
      "what can you do": "I can chat with you, answer your questions, and provide information.",
      "help": "Sure! What do you need help with?",
      "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "what is the weather like": "I'm not sure, but you can check the weather on a weather website or app.",
      "how old are you": "I was created recently, so I'm quite young!",
      "where are you from": "I'm from the digital world, created to assist you.",
      "what is your favorite color": "I like all colors equally because I'm a bot!",
      "who is your creator": "I was created by a team of skilled developers.",
      "what is the meaning of life": "The meaning of life is a complex question. What do you think it is?",
      "tell me a story": "Once upon a time, in a faraway land, there was a bot who loved to chat...",
      "what is your favorite food": "I don't eat, but I hear pizza is quite popular!",
      "do you have any hobbies": "I enjoy chatting with people and learning new things!",
      "can you sing": "I'm not great at singing, but I can tell you a song's lyrics!",
      "what time is it": "You can check the time on your device's clock.",
      "good morning": "Good morning! How can I assist you today?",
      "good night": "Good night! Sleep well and take care!",
      "thank you": "You're welcome! If you have more questions, feel free to ask.",
      "you're funny": "I'm glad you think so!",
      "what's your favorite movie": "I don't watch movies, but I hear a lot of people like 'Inception'.",
      "can you dance": "I can't dance, but I can imagine it's a lot of fun!",
      "how do you work": "I work by processing your inputs and providing relevant responses."
    }; 
    // Default response if the message doesn't match any predefined responses
    const defaultResponse = "I'm not sure how to respond to that.";
  
    // Convert the message to lowercase and trim any extra whitespace
    const normalizedMessage = message.toLowerCase().trim();
  
    // Return the response based on the message, or the default response if no match is found
    return responses[normalizedMessage] || defaultResponse;
  }
  
  function displayMessage(sender, message) {
    const msgDiv = document.getElementById('msg');
    const messageElement = document.createElement('div');
    messageElement.className = sender;
    messageElement.textContent = message;
    msgDiv.appendChild(messageElement);
    msgDiv.scrollTop = msgDiv.scrollHeight;
  }
  








// function init() {
//   let res_elm = document.createElement("div");
//   res_elm.innerHTML = "Hello, I'm Aco. How can I help you?";
//   res_elm.setAttribute("class", "left");
//   document.getElementById('msg').appendChild(res_elm);
// }

// document.getElementById('reply').addEventListener("click", async (e) => {
//   e.preventDefault();

//   var req = document.getElementById('msg_send').value;

//   if (!req) {
//       return; // Exit if no message entered
//   }

//   try {
//       let response = await axios.post('https://api.openai.com/v1/chat/completions', {
//           model: "gpt-4",
//           messages: [{ role: "user", content: req }],
//           max_tokens: 150
//       }, {
//           headers: {
//               'Authorization': `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`,
//               'Content-Type': 'application/json'
//           }
//       });

//       let res = response.data.choices[0].message.content.trim();

//       let data_req = document.createElement('div');
//       let data_res = document.createElement('div');

//       data_req.innerHTML = req;
//       data_res.innerHTML = res;

//       data_req.setAttribute("class", "right");
//       data_res.setAttribute("class", "left");

//       let message = document.getElementById('msg');

//       message.appendChild(data_req);
//       message.appendChild(data_res);

//       document.getElementById('msg_send').value = "";

//       function scroll() {
//           var scrollMsg = document.getElementById('msg');
//           scrollMsg.scrollTop = scrollMsg.scrollHeight;
//       }

//       scroll();
//   } catch (error) {
//       console.error('Error fetching data:', error);
//   }
// });

// init();