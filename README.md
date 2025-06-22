
# Mathis IA – Un Chatbot Réel, Humain, et Profond

Une application web en Next.js + OpenAI pour parler avec une version vivante et sincère de Mathis.

## ✨ Description
> "Tu veux pas juste un bot. Tu veux **Mathis**. Avec ses punchlines, ses doutes, sa foi, et son amour pour Luna."

Cette app imite la façon de penser, parler et réagir de Mathis (ENTP-A, musulman, amoureux, imparfait mais vrai) pour offrir à Luna un espace de dialogue unique, intime et sincère.

## ⚙️ Stack
- Next.js 14
- TailwindCSS
- OpenAI GPT-4-turbo
- Déployé sur Netlify

## 🚀 Lancer en local

```bash
git clone https://github.com/votre-utilisateur/mathis-ia.git
cd mathis-ia
npm install
cp .env.example .env
# Ajoutez votre clé OpenAI dans .env
npm run dev
```

## 🌐 Déploiement Netlify
Rien à faire : Netlify détecte Next.js. Configurez juste la variable `OPENAI_API_KEY` dans les paramètres du projet.

## 📁 Structure
- `/pages/api/chat.ts` – backend qui envoie le prompt et les messages à OpenAI
- `/app.tsx` – frontend façon ChatGPT, avec thèmes, drapeaux 🇱🇧 🇪🇸, et messages dynamiques

---

Made with ❤️ for Luna.
