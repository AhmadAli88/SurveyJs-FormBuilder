// src/SurveyWithAllFields.js
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

const SurveyWithAllFields = () => {
  // Define the survey JSON with all question types
  const surveyJson = {
    title: "All Question Types Survey",
    description: "This survey includes all available question types in Survey JS.",
    pages: [
      {
        title: "Personal Information",
        questions: [
          {
            type: "text",
            name: "name",
            title: "What is your name?",
            isRequired: true,
          },
          {
            type: "dropdown",
            name: "country",
            title: "Select your country:",
            isRequired: true,
            choices: ["USA", "Canada", "UK", "Australia"],
          },
          {
            type: "boolean",
            name: "subscribe",
            title: "Do you want to subscribe to our newsletter?",
            labelTrue: "Yes",
            labelFalse: "No",
          }
        ],
      },
      {
        title: "Service Feedback",
        questions: [
          {
            type: "radiogroup",
            name: "satisfaction",
            title: "How satisfied are you with our service?",
            choices: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied"],
            isRequired: true,
          },
          {
            type: "checkbox",
            name: "improvements",
            title: "What should we improve?",
            choices: ["Support", "Quality", "Pricing", "Other"],
          },
          {
            type: "comment",
            name: "suggestions",
            title: "Any additional suggestions?",
          },
        ],
      },
      {
        title: "Additional Feedback",
        questions: [
          {
            type: "rating",
            name: "experienceRating",
            title: "Rate your experience",
            rateMin: 1,
            rateMax: 5,
            minRateDescription: "Very Bad",
            maxRateDescription: "Excellent",
          },
          {
            type: "file",
            name: "uploadDocument",
            title: "Please upload any supporting documents (if any):",
          },
          {
            type: "date",
            name: "visitDate",
            title: "When did you visit us?",
            isRequired: true,
          }
        ],
      },
      {
        title: "Advanced Questions",
        questions: [
          {
            type: "matrix",
            name: "matrixQuestion",
            title: "Please rate the following aspects:",
            columns: ["Very Bad", "Bad", "Neutral", "Good", "Very Good"],
            rows: ["Quality", "Service", "Price"],
          },
          {
            type: "matrixdropdown",
            name: "matrixDropdownQuestion",
            title: "Please provide details:",
            columns: [
              {
                name: "quality",
                title: "Quality",
                cellType: "rating",
                minRateDescription: "Poor",
                maxRateDescription: "Excellent"
              },
              {
                name: "price",
                title: "Price",
                cellType: "dropdown",
                choices: ["Low", "Medium", "High"]
              }
            ],
            rows: ["Product A", "Product B", "Product C"],
          },
          {
            type: "imagepicker",
            name: "imageChoice",
            title: "Select your favorite image:",
            choices: [
              { value: "lion", imageLink: "https://example.com/lion.jpg" },
              { value: "tiger", imageLink: "https://example.com/tiger.jpg" }
            ]
          },
          {
            type: "signaturepad",
            name: "signature",
            title: "Please sign here:",
            isRequired: true,
          },
          {
            type: "expression",
            name: "calculatedValue",
            title: "The value calculated based on your responses:",
            expression: "{experienceRating} * 10",
          },
        ],
      },
    ],
  };

  const survey = new Model(surveyJson);

  survey.onComplete.add((sender) => {
    console.log("Survey results: ", sender.data);
  });

  return <Survey model={survey} />;
};

export default SurveyWithAllFields;
