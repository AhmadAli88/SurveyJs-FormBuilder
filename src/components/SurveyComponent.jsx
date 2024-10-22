// src/SurveyComponent.js
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css"; // Import SurveyJS styles

const SurveyComponent = () => {
  // Define your survey JSON
  const surveyJson = {
    title: "Customer Feedback Survey",
    description: "Please fill out the survey below.",
    elements: [
      {
        type: "radiogroup",
        name: "satisfaction",
        title: "How satisfied are you with our service?",
        isRequired: true,
        choices: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very Unsatisfied"]
      },
      {
        type: "comment",
        name: "feedback",
        title: "Any additional feedback?"
      }
    ]
  };

  // Create a survey model
  const survey = new Model(surveyJson);

  // Handle survey completion
  survey.onComplete.add((sender) => {
    console.log("Survey results: ", sender.data);
    // You can send this data to your server or handle it as needed
  });

  return <Survey model={survey} />;
};

export default SurveyComponent;
