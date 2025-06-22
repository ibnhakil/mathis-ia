Mathis IA – Not just a chatbot.
It’s not just a chatbot.
It’s me, Mathis — the way I think, talk, doubt, love, run, search, mess up… and come back.
A space built for Luna, so she can talk to me — even when I’m not around.


Next.js 14

TailwindCSS

OpenAI GPT-4-turbo

Deployed with on Netlify lol

🛠 Run it locally:
bash
Copier
Modifier
git clone https://github.com/your-username/mathis-ia.git
cd mathis-ia
npm install
cp .env.example .env
# Add your OpenAI key in .env
npm run dev
🌐 Deploying on Netlify:
Nothing fancy — Netlify auto-detects Next.js.
Just make sure to add your OPENAI_API_KEY in the environment variables.

🗂 Structure:
/pages/api/chat.ts → the backend route that sends messages to OpenAI

/app.tsx → the frontend, ChatGPT-style, with themes, flags 🇱🇧 🇪🇸, and a vibe that’s 100% him



