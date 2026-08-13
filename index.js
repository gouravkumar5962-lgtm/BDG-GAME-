const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// कलर और नंबर प्रेडिक्शन लॉजिक
app.get('/play', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10); // 0 से 9 के बीच नंबर
  
  let resultSize = randomNumber >= 5 ? "Big" : "Small";
  let resultColor = "";

  if (randomNumber === 0) {
    resultColor = "Red + Violet";
  } else if (randomNumber === 5) {
    resultColor = "Green + Violet";
  } else if (randomNumber % 2 === 0) {
    resultColor = "Red";
  } else {
    resultColor = "Green";
  }

  res.json({
    number: randomNumber,
    size: resultSize,
    color: resultColor
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
