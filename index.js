function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "9c6308te7d4bf50b79ca37c634bbafo5";
let context = 
  "be polite and provide a very short answer. Your answer must be straight forward";
let prompt = "who was the first female president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl).then(showAnswer);
