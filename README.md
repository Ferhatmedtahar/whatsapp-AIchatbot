# whatsapp chatbot

this is a simple whatsapp chatbot using whatsapp-web.js and langchain.ai

# Project Setup

## Step 1: Obtain a Google API key

1. Go to the [Google Cloud Console](https://console.cloud.google.com) and create a new project or select an existing one.
2. Enable the required API (e.g., Google Maps, Google Natural Language, etc.) and create credentials (OAuth client ID) for your project.
3. You will receive an API key, which is a long string of characters.

## Step 2: Replace the API key in the codebase

1. create `.env` file in the root directory of the project.
2. assing (`GOOGLE_API_KEY`) to your own API key.
3. go to `config.js` and replace the context with what suits you

## Step 3: Install dependencies and start the application

1.  Open a terminal or command prompt and navigate to the root directory of the project.
2.  Run `npm install` to install the required dependencies.
3.  Once the dependencies are installed, run `npm start` to start the application.
4.  Connecting a whatsapp account: After running the command, you should see a qr code on the code editor terminal. Proceed to navigate to the following path on a WhatsApp account (This account would be the bot)

          Settings -> Linked devices -> Link a device.

    **Note**

- Make sure you have Node.js and npm installed on your system.
