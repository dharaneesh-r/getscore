const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

app.get("/get-scores", (req, res) => {
  const responseData = {
    "data": [
      [
        {
          "admin_id": 8,
          "admin_name": "MohanKumar GK",
          "assessment_id": {
            "admin_id": 8,
            "assessment_id": 161
          },
          "assessment_title": "send",
          "up_to_50": [
            {
              "user_id": 98,
              "avg_scope_score": 43.75,
              "user_name": "MohanKumar GK",
              "user_email": "mohankumargk3902@gmail.com"
            }
          ],
          "between_51_and_60": [
            {
              "user_id": 126,
              "avg_scope_score": 53.75,
              "user_name": "Mohan",
              "user_email": "mohankumargk2404@gmail.com"
            }
          ],
          "between_61_and_70": [],
          "between_71_and_80": [],
          "between_81_and_90": [],
          "between_91_and_100": []
        },
        {
          "admin_id": 8,
          "admin_name": "MohanKumar GK",
          "assessment_id": {
            "admin_id": 8,
            "assessment_id": 144
          },
          "assessment_title": "mern1",
          "up_to_50": [
            {
              "user_id": 83,
              "avg_scope_score": 47.5,
              "user_name": "mughil",
              "user_email": "mughilvannan10@gmail.com"
            }
          ],
          "between_51_and_60": [],
          "between_61_and_70": [],
          "between_71_and_80": [],
          "between_81_and_90": [],
          "between_91_and_100": []
        },
        {
          "admin_id": 8,
          "admin_name": "MohanKumar GK",
          "assessment_id": {
            "admin_id": 8,
            "assessment_id": 156
          },
          "assessment_title": "Test 1",
          "up_to_50": [],
          "between_51_and_60": [],
          "between_61_and_70": [
            {
              "user_id": 98,
              "avg_scope_score": 62.5,
              "user_name": "MohanKumar GK",
              "user_email": "mohankumargk3902@gmail.com"
            }
          ],
          "between_71_and_80": [],
          "between_81_and_90": [],
          "between_91_and_100": []
        },
        {
          "admin_id": 8,
          "admin_name": "MohanKumar GK",
          "assessment_id": {
            "admin_id": 8,
            "assessment_id": 134
          },
          "assessment_title": "tttt",
          "up_to_50": [
            {
              "user_id": 79,
              "avg_scope_score": 45.0,
              "user_name": "Mughil",
              "user_email": "mughilvannan5@gmail.com"
            }
          ],
          "between_51_and_60": [],
          "between_61_and_70": [],
          "between_71_and_80": [],
          "between_81_and_90": [],
          "between_91_and_100": []
        }
      ]
    ],
    "code": 200,
    "message": "Scores data retrieved successfully"
  };

  res.status(200).json(responseData);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});