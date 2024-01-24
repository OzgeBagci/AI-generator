function displayTravel(response) {
  console.log("travel generated");
  new Typewriter("#travel", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateTravel(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-information");
  let apiKey = "1494f5f7ob4a4dtd10b403df6ba9a052";
  let context =
    "You are a well traveled individual who loves to share your insites on different travel destinatins. Your mission is to write 2 paragraphs about traveling to specific locations. Use basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate travel information based on ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating travel");
  axios.get(apiURL).then(displayTravel);

  console.log("Generating travel");
  console.log(`Promot: ${prompt}`);
  console.log(`Context: ${context}`);
}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateTravel);
