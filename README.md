# NLNB Risk Assessment Tool

A web-based risk assessment tool built for Nittany Lion National Bank (ETI 302 case study).

## Project Structure

```
nlnb-risk-tool/
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── vite.config.js             # Build config
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Main app (handles page routing)
    ├── styles.css             # All styling
    ├── components/
    │   ├── Intro.jsx          # Welcome screen
    │   ├── Questionnaire.jsx  # Question flow
    │   ├── HeatMap.jsx        # Color-coded risk grid
    │   └── Summary.jsx        # Results + recommendations
    └── data/
        ├── questions.js       # EDIT THIS to add/change questions
        └── recommendations.js # EDIT THIS to change recommendations
```

## How to Run (Local Development)

1. Install Node.js if you don't have it: https://nodejs.org
2. Open terminal in this folder
3. Run:
   ```
   npm install
   npm run dev
   ```
4. Open the URL it gives you (usually http://localhost:5173)

## How to Edit Questions

Open `src/data/questions.js`. Each question looks like this:

```js
{
  id: 'unique-id',
  category: 'infrastructure',  // must match a category id
  text: 'Your question here?',
  options: [
    { label: 'Answer choice', score: 1 },  // 1 = low risk
    { label: 'Answer choice', score: 5 }   // 5 = high risk
  ]
}
```

Just add more objects to the `questions` array. The app handles the rest.

## How to Deploy (Make it Public)

Easiest option: **Vercel**
1. Push this folder to a GitHub repo
2. Go to vercel.com, sign in with GitHub
3. Import the repo — it auto-detects Vite and deploys
4. You get a public URL like `nlnb-risk-tool.vercel.app`

## Scoring Logic

- Each answer has a score from 1 (low risk) to 5 (high risk)
- Category score = average of all answers in that category
- Overall risk = average of all answers
- Heat map bands:
  - 1.0 – 2.3 = Low (green)
  - 2.4 – 3.6 = Medium (yellow)
  - 3.7 – 5.0 = High (red)

## Requirements Met

- ✅ Graphical interface
- ✅ 25–35 questions (currently placeholders — fill in real ones)
- ✅ Dynamic impact calculation
- ✅ Color-coded heat map
- ✅ Risk category and scoring methodology
- ✅ Business + technical recommendations
- ✅ Summary page
- ⚠️ Updatable risk registry (future enhancement — currently session-only)

## Team

ETICorp — Team 11 — Spring 2026
