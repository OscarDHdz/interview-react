export const intentsPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(intents);
    }, 1000);
  });
};

const intents = [
  {
    "id": "34d7831e137a4016a55f98926800a643",
    "name": "Greeting",
    "description": "The user says hello.",
    "trainingData": {
      "expressionCount": 170,
      "expressions": [
        {
          "id": "6399fd6989984c7b871c6301744b0af5",
          "text": "Hello"
        },
        {
          "id": "68bafebc2a2e4843a56a221c2ceb12ed",
          "text": "Hi"
        },
        {
          "id": "b2a3208dc801432992812638368e0668",
          "text": "Good morning!"
        }
      ]
    },
    "reply": {
      "id": "f35d7e0936a44102bac9cb96c81eec3b",
      "text": "Hello :) How can I help you?"
    }
  },
  {
    "id": "0edf4a33873d482f857bfa0a5c16b7ce",
    "name": "Login Problems",
    "description": "The user has trouble logging in.",
    "trainingData": {
      "expressionCount": 101,
      "expressions": [
        {
          "id": "ec7e980908c84822b18e331e2496045a",
          "text": "I can't sign in"
        },
        {
          "id": "f81537f3f69b4b729fe1c71f83e7e25e",
          "text": "The login is giving me an error."
        },
        {
          "id": "d748c7a9bc124abc9fa3a3147fb11651",
          "text": "Can you help me change my password, can't log in!"
        }
      ]
    },
    "reply": {
      "id": "6dc10b2946cf4099a02c14d8416fcb02",
      "text": "Oh no! Please give me your email and I will fix it."
    }
  },
];
