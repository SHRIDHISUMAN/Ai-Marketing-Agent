const cors = require("cors");
const express= require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=> {
    res.send("AI Marketing Agent Running");
});
// main feature
app.post("/generate", async(req,res)=> {
    const { topic } = req.body;
    if(!topic){
        return res.status(400).json({error: "Topic is required"});
    }

    try{ // await: wait until API gives response
        const response = await axios.post( //post req
           "https://api.openai.com/v1/chat/completions",
           {
           // model:"gpt-3.5-turbo",
           model: "gpt-4o-mini",
            messages:[
                {
                    role:"user",
                    content : `Give 10 SEO keywords & 5 content ideas for : ${topic}`
                }
            ]
           },
           {
            headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
}
           }
        );
        
        const output = response.data.choices[0].message.content;
        res.json({
            topic,
            result: output
        });

    }
    catch (error) { //fallback logic to ensure continuous output generation.
  console.log("ERROR:", error.response?.data || error.message);

  const keywords = [
    `${topic} tips`,
    `${topic} guide`,
    `best ${topic} strategies`,
    `${topic} for beginners`,
    `${topic} ideas`
  ];

  const ideas = [
    `Top 10 ${topic} tips`,
    `Beginner's guide to ${topic}`,
    `Mistakes to avoid in ${topic}`,
    `Daily routine for ${topic}`,
    `How to start ${topic}`
  ];

  res.json({
    topic,
    result: `
Keywords:
- ${keywords.join("\n- ")}

Content Ideas:
- ${ideas.join("\n- ")}
`
  });
}
});
app.listen(5000,()=> {
    console.log("Server running on port 5000")
});
setInterval(() => {
  console.log("Agent running automated task...");
}, 10000); // every 10 sec (for demo)