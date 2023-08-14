// ServicePage.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  createTheme,
  ThemeProvider,
  Stack,
  ButtonGroup,
  Box,
} from "@mui/material";
import theme from '../../theme';


const serviceData = [
  {
    "id": 1,
    "title": "Carpet cleaning service",
    "description": "",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
    ],
    "image":
      "https://plus.unsplash.com/premium_photo-1677234148093-0115f38be0e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycGV0JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    "rating": 4,
    "minPrice": 150,
    "ordersPerDay": 6,
    "types": null,
    "questions": [
      {
        "question": "Select Carpet Size",
        "options": [
          { "value": "less than 22 sqr mtr", "price": 150 },
          { "value": "24 sqr mtr", "price": 165 },
          { "value": "25 sqr mtr", "price": 173 },
          { "value": "28 sqr mtr", "price": 195 },
          { "value": "30 sqr mtr", "price": 208 },
          { "value": "32 sqr mtr", "price": 222 },
          { "value": "35 sqr mtr", "price": 243 },
          { "value": "36 sqr mtr", "price": 250 },
          { "value": "40 sqr mtr", "price": 275 },
          { "value": "42 sqr mtr", "price": 290 },
          { "value": "56 sqr mtr", "price": 390 },
          { "value": "64 sqr mtr", "price": 445 },
        ],
      },
    ],
  },

  {
    "id": 2,
    "title": "Sterilization of homes",
    "description":
      "Sterilization with American and French materials authorized by the Food and Drug Authority and approved by the Ministry of Health, namely: 1- The American 3M sterilizer. 2- The French Anios sterilizer",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
    ],
    "image":
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3RlcmlsaXppbmclMjBvZiUyMGhvbWUlMjBzZXJ2aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    "rating": 4,
    "minPrice": null,
    "ordersPerDay": 6,
    "types": {
      "question": "Select treatment plan",
      "options": [
        "Single Treatment 250 m2 or Less (Fixed Price)",
        "3 visits treatments",
        "7 visits treatments",
        "12 VisitsTreatments",
      ],
    },
    "questions": [
      {
        "question": "Select area Size",
        "options": [
          {
            "type": "Single Treatment 250 m2 or Less (Fixed Price)",
            "value": "Area Size 0-249 SQM",
            "price": 350,
          },
          {
            "type": "Single Treatment 250 m2 or Less (Fixed Price)",
            "value": "Area Size 250-500 SQM",
            "price": 600,
          },
          {
            "type": "Single Treatment 250 m2 or Less (Fixed Price)",
            "value": "Area More than 500 SQM",
            "price": 50,
          },
          {
            "type": "3 visits treatments",
            "value": "Area Size 0-249 SQM",
            "price": 1350,
          },
          {
            "type": "3 visits treatments",
            "value": "Area Size 250-500 SQM",
            "price": 2000,
          },
          {
            "type": "3 visits treatments",
            "value": "Area More than 500 SQM",
            "price": 50,
          },
          {
            "type": "7 visits treatments",
            "value": "Area Size 0-249 SQM",
            "price": 3000,
          },
          {
            "type": "7 visits treatments",
            "value": "Area Size 250-500 SQM",
            "price": 5000,
          },
          {
            "type": "7 visits treatments",
            "value": "Area More than 500 SQM",
            "price": 50,
          },
          {
            "type": "12 VisitsTreatments",
            "value": "Area Size 0-249 SQM",
            "price": 5000,
          },
          {
            "type": "12 VisitsTreatments",
            "value": "Area Size 250-500 SQM",
            "price": 8000,
          },
          {
            "type": "12 VisitsTreatments",
            "value": "Area More than 500 SQM",
            "price": 50,
          },
        ],
      },
    ],
  },

  {
    "id": 3,
    "title": "Board cleaning service",
    "description":
      "Majales deep cleaning includes: Deep cleaning of the setting sessions with special cleaning devices. Carpet and curtain cleaning. Cleaning tables and windows, electrical switches.Majales light cleaning includes: Normal cleaning of the setting session by suctioning the dust and dirt deposited in it. Cleaning carpets, curtains, and tables from dust.Additional cost for cleaning accessories, antiques, chandeliers, etc.",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
    ],
    "image":
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFqYWxlcyUyMGRlZXAlMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    "rating": 4,
    "minPrice": null,
    "ordersPerDay": 2,
    "types": {
      "question": "Select cleaning type",
      "options": ["Deep Cleaning", "Light Cleaning"],
    },

    "questions": [
      {
        "question": "Select area Size",
        "options": [
          {
            "type": "Deep Cleaning",
            "value": "Small (20 square meters or less)",
            "price": 320,
          },
          {
            "type": "Deep Cleaning",
            "value": "Large (21 sqm - 35 sqm)",
            "price": 399,
          },
          {
            "type": "Light Cleaning",
            "value": "Small (20 square meters or less)",
            "price": 250,
          },
          {
            "type": "Light Cleaning",
            "value": "Large (21 sqm - 35 sqm)",
            "price": 300,
          },
        ],
      },
    ],
  },

  {
    "id": 4,
    "title": "Kitchen cleaning service",
    "description":
      "Deep cleaning of the kitchen, in which walls and floors are cleaned - windows and fans - cupboards from the outside - home appliances for the kitchen",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
    ],
    "image":
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGtpdGNoZW4lMjBkZWVwJTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    "rating": 4,
    "minPrice": 150,
    "ordersPerDay": 2,
    "questions": [
      {
        "question": "Select Carpet Size",
        "options": [
          {
            "value": "Interior kitchen for a villa (20 square meters or less)",
            "price": 350,
          },
          {
            "value": "Outdoor kitchen for a villa (20 square meters or less)",
            "price": 350,
          },
          {
            "value":
              "Interior kitchen for villa (21 square meters to 35 square meters)",
            "price": 400,
          },
          {
            "value":
              "Villa outdoor kitchen (21 square meters to 35 square meters)",
            "price": 450,
          },
          { "value": "Apartment kitchen", "price": 320 },
          { "value": "Restaurant kitchen", "price": 50 },
        ],
      },
    ],
  },

  {
    "id": 5,
    "title": "Mattress cleaning service",
    "description":
      "Deep cleaning of the kitchen, in which walls and floors are cleaned - windows and fans - cupboards from the outside - home appliances for the kitchen",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
    ],
    "image":
      "https://images.unsplash.com/photo-1561316441-2ab442340b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0cmVzcyUyMGNsZWFuaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    " rating": 4,
    "minPrice": 150,
    "ordersPerDay": 2,
    "types": {
      "question": "Select mattress type",
      "options": [
        "california king size mattress",
        "King size mattress",
        "Queen size mattress",
        "Large size single mattress",
        "Regular size single mattress",
        "baby mattress",
      ],
    },

    "questions": [
      {
        "question": "Select mattress qty",
        "options": [
          {
            "type": "california king size mattress",
            "value": "1 qty",
            "price": 170,
          },
          {
            "type": "california king size mattress",
            "value": "2 qty",
            "price": 240,
          },
          {
            "type": "california king size mattress",
            "value": "3 qty",
            "price": 300,
          },
          {
            "type": "california king size mattress",
            "value": "4 qty",
            "price": 400,
          },
          {
            "type": "california king size mattress",
            "value": "5 qty",
            "price": 500,
          },
          {
            "type": "california king size mattress",
            "value": "6 qty",
            "price": 600,
          },
          {
            "type": "california king size mattress",
            "value": "7 qty",
            "price": 700,
          },
          {
            "type": "california king size mattress",
            "value": "8 qty",
            "price": 800,
          },
          {
            "type": "california king size mattress",
            "value": "9 qty",
            "price": 900,
          },
          {
            "type": "california king size mattress",
            "value": "10 qty",
            "price": 1000,
          },
          {
            "type": "King size mattress",
            "value": "1 qty",
            "price": 200,
          },
          {
            "type": "King size mattress",
            "value": "2 qty",
            "price": 230,
          },
          {
            "type": "King size mattress",
            "value": "3 qty",
            "price": 290,
          },
          {
            "type": "King size mattress",
            "value": "4 qty",
            "price": 390,
          },
          { "type": "King size mattress", "value": "5 qty", "price": 490 },
          { "type": "King size mattress", "value": "6 qty", "price": 590 },
          { "type": "King size mattress", "value": "7 qty", "price": 690 },
          { "type": "King size mattress", "value": "8 qty", "price": 790 },
          { "type": "King size mattress", "value": "9 qty", "price": 890 },
          { "type": "King size mattress", "value": "10 qty", "price": 990 },
          {
            "type": "Queen size mattress",
            "value": "1 qty",
            "price": 200,
          },
          {
            "type": "Queen size mattress",
            "value": "2 qty",
            "price": 200,
          },
          {
            "type": "Queen size mattress",
            "value": "3 qty",
            "price": 250,
          },
          {
            "type": "Queen size mattress",
            "value": "4 qty",
            "price": 340,
          },
          {
            "type": "Queen size mattress",
            "value": "5 qty",
            "price": 400,
          },
          {
            "type": "Queen size mattress",
            "value": "6 qty",
            "price": 490,
          },
          {
            "type": "Queen size mattress",
            "value": "7 qty",
            "price": 590,
          },
          {
            "type": "Queen size mattress",
            "value": "8 qty",
            "price": 690,
          },
          {
            "type": "Queen size mattress",
            "value": "9 qty",
            "price": 790,
          },
          {
            "type": "Queen size mattress",
            "value": "10 qty",
            "price": 890,
          },
          {
            "type": "Large size single mattress",
            "value": "1 qty",
            "price": 180,
          },
          {
            "type": "Large size single mattress",
            "value": "2 qty",
            "price": 190,
          },
          {
            "type": "Large size single mattress",
            "value": "3 qty",
            "price": 280,
          },
          {
            "type": "Large size single mattress",
            "value": "4 qty",
            "price": 380,
          },
          {
            "type": "Large size single mattress",
            "value": "5 qty",
            "price": 480,
          },
          {
            "type": "Large size single mattress",
            "value": "6 qty",
            "price": 580,
          },
          {
            "type": "Large size single mattress",
            "value": "7 qty",
            "price": 680,
          },
          {
            "type": "Large size single mattress",
            "value": "8 qty",
            "price": 780,
          },
          {
            "type": "Large size single mattress",
            "value": "9 qty",
            "price": 880,
          },
          {
            "type": "Large size single mattress",
            "value": "10 qty",
            "price": 980,
          },
          {
            "type": "Regular size single mattress",
            "value": "1 qty",
            "price": 100,
          },
          {
            "type": "Regular size single mattress",
            "value": "2 qty",
            "price": 190,
          },
          {
            "type": "Regular size single mattress",
            "value": "3 qty",
            "price": 220,
          },
          {
            "type": "Regular size single mattress",
            "value": "4 qty",
            "price": 280,
          },
          {
            "type": "Regular size single mattress",
            "value": "5 qty",
            "price": 330,
          },
          {
            "type": "Regular size single mattress",
            "value": "6 qty",
            "price": 390,
          },
          {
            "type": "Regular size single mattress",
            "value": "7 qty",
            "price": 420,
          },
          {
            "type": "Regular size single mattress",
            "value": "8 qty",
            "price": 490,
          },
          {
            "type": "Regular size single mattress",
            "value": "9 qty",
            "price": 520,
          },
          {
            "type": "Regular size single mattress",
            "value": "10 qty",
            "price": 590,
          },
          {
            "type": "baby mattress",
            "value": "1 qty",
            "price": 50,
          },
          {
            "type": "baby mattress",
            "value": "2 qty",
            "price": 120,
          },
          {
            "type": "baby mattress",
            "value": "3 qty",
            "price": 180,
          },
          {
            "type": "baby mattress",
            "value": "4 qty",
            "price": 190,
          },
          {
            "type": "baby mattress",
            "value": "5 qty",
            "price": 240,
          },
          {
            "type": "baby mattress",
            "value": "6 qty",
            "price": 290,
          },
          {
            "type": "baby mattress",
            "value": "7 qty",
            "price": 330,
          },
          {
            "type": "baby mattress",
            "value": "8 qty",
            "price": 380,
          },
          {
            "type": "baby mattress",
            "value": "9 qty",
            "price": 400,
          },
          {
            "type": "baby mattress",
            "value": "10 qty",
            "price": 480,
          },
        ],
      },
    ],
  },

  {
    "id": 6,
    "title": "Curtain cleaning service",
    "description":
      "Washing and drying service in the same place with the curtain installed",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
    ],
    "image":
      "https://plus.unsplash.com/premium_photo-1678304224375-2c0052a1b4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VydGFpbiUyMGNsZWFuaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    "rating": 4,
    "minPrice": 150,
    "ordersPerDay": 4,
    "types": null,
    "questions": [
      {
        "question": "Select Curtain Size",
        "options": [
          { "value": "less than 16 sqr mtr", "price": 150 },
          { "value": "16 sqr mtr", "price": 160 },
          { "value": "18 sqr mtr", "price": 180 },
          { "value": "20 sqr mtr", "price": 200 },
          { "value": "21 sqr mtr", "price": 210 },
          { "value": "24 sqr mtr", "price": 240 },
          { "value": "25 sqr mtr", "price": 250 },
          { "value": "28 sqr mtr", "price": 280 },
          { "value": "30 sqr mtr", "price": 300 },
          { "value": "32 sqr mtr", "price": 320 },
          { "value": "35 sqr mtr", "price": 350 },
          { "value": "36 sqr mtr", "price": 360 },
          { "value": "40 sqr mtr", "price": 400 },
          { "value": "42 sqr mtr", "price": 420 },
          { "value": "56 sqr mtr", "price": 560 },
          { "value": "64 sqr mtr", "price": 640 },
        ],
      },
    ],
  },

  {
    "id": 7,
    "title": "Deep cleaning service",
    "description":
      "Deep cleaning, in which apartments and villas are completely cleaned with or without furniture, including walls, windows, floors, bedrooms, kitchens, and bathrooms",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
    ],
    "image":
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFqYWxlcyUyMGRlZXAlMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    "rating": 4,
    "minPrice": null,
    "ordersPerDay": 2,
    "types": {
      "question": "Select Furniture type",
      "options": ["With furniture", "Without furniture"],
    },

    "questions": [
      {
        "question": "Select cleaning place",
        "options": [
          {
            "type": "With furniture",
            "value":
              "Apartment with one bedroom - hall - majlis - bathrooms and kitchen",
            "price": 50,
          },
          {
            "type": "With furniture",
            "value":
              "Apartment with two bedrooms - a hall - a board - bathrooms and a kitchen",
            "price": 50,
          },
          {
            "type": "With furniture",
            "value":
              "Apartment with 3 bedrooms - 2 halls - a board - bathrooms and a kitchen",
            "price": 50,
          },
          {
            "type": "With furniture",
            "value":
              "Villa with two bedrooms - 2 halls - 1 majlis - bathrooms and kitchen",
            "price": 50,
          },
          {
            "type": "With furniture",
            "value":
              "Villa with 3 bedrooms - 2 halls - 2 majlis - bathrooms and kitchen",
            "price": 50,
          },
          {
            "type": "With furniture",
            "value":
              "Villa with 4 bedrooms - 2 halls - 2 majlis - bathrooms and kitchen",
            "price": 50,
          },
          {
            "type": "Without furniture",
            "value":
              "Apartment with one bedroom - hall - majlis - bathrooms and kitchen",
            "price": 50,
          },
          {
            "type": "Without furniture",
            "value":
              "Apartment with two bedrooms - a hall - a board - bathrooms and a kitchen",
            "price": 50,
          },
          {
            "type": "Without furniture",
            "value":
              "Apartment with 3 bedrooms - 2 halls - a board - bathrooms and a kitchen",
            "price": 50,
          },
          {
            "type": "Without furniture",
            "value":
              "Villa with two bedrooms - 2 halls - 1 majlis - bathrooms and kitchen",
            "price": 50,
          },
          {
            "type": "Without furniture",
            "value":
              "Villa with 3 bedrooms - 2 halls - 2 majlis - bathrooms and kitchen",
            "price": 50,
          },
          {
            "type": "Without furniture",
            "value":
              "Villa with 4 bedrooms - 2 halls - 2 majlis - bathrooms and kitchen",
            "price": 50,
          },
        ],
      },
    ],
  },

  {
    "id": 8,
    "title": "Floor Cleaning and Polishing",
    "description":
      "The cost of the service is for the visiting and inspection, and the final amount for the service will be determined after the visit. - The service provides cleaning, scrubbing or polishing of floors, according to the type of service required by the customer. - Cleaning and scrubbing the floor focusing on dirt removal from pores, stain removal and restoring shine. - The service is provided for all types of floors, including marble, ceramic, porcelain and mosaic tiles. - Professional team to provide service.",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
    ],
    "image":
      "https://plus.unsplash.com/premium_photo-1677234148093-0115f38be0e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycGV0JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    "rating": 4,
    "minPrice": 150,
    "ordersPerDay": 2,
    "types": null,
    "questions": [
      {
        "question": "Select Tile type",
        "options": [
          { "value": "Mosaic Tiles", "price": 50 },
          { "value": "Marble", "price": 50 },
          { "value": "Ceramic", "price": 50 },
          { "value": "Porcelain", "price": 50 },
          { "value": "Parquet", "price": 50 },
          { "value": "Granite", "price": 50 },
        ],
      },
    ],
  },

  {
    "id": 9,
    "title": "Furniture cleaning service",
    "description":
      "Deep cleaning of the kitchen, in which walls and floors are cleaned - windows and fans - cupboards from the outside - home appliances for the kitchen",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
      "Note: Items are priced at the price of cleaning the piece",
    ],
    "image":
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGNsZWFuaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    " rating": 4,
    "minPrice": 180,
    "ordersPerDay": 2,
    "types": {
      "question": "Select furniture type",
      "options": ["Cotton furniture", "Suede furniture", "Leather furniture"],
    },

    "questions": [
      {
        "question": "Select furniture",
        "options": [
          {
            "type": "Cotton furniture",
            "value": "Wooden armchair for living room",
            "price": 30,
          },
          {
            "type": "Cotton furniture",
            "value": "Chair for the living room",
            "price": 30,
          },
          {
            "type": "Cotton furniture",
            "value": "Two-seater sofa",
            "price": 70,
          },
          {
            "type": "Cotton furniture",
            "value": "3 seater sofa",
            "price": 90,
          },
          {
            "type": "Cotton furniture",
            "value": "4 seater sofa",
            "price": 120,
          },
          {
            "type": "Cotton furniture",
            "value": "L-shaped sofa",
            "price": 180,
          },
          {
            "type": "Cotton furniture",
            "value": "Dining table chair, base and back",
            "price": 25,
          },
          {
            "type": "Cotton furniture",
            "value": "Dining chair, base only",
            "price": 20,
          },

          {
            "type": "Suede furniture",
            "value": "Wooden armchair for living room",
            "price": 45,
          },
          {
            "type": "Suede furniture",
            "value": "Chair for the living room",
            "price": 45,
          },
          {
            "type": "Suede furniture",
            "value": "Two-seater sofa",
            "price": 100,
          },
          {
            "type": "Suede furniture",
            "value": "3 seater sofa",
            "price": 150,
          },
          {
            "type": "Suede furniture",
            "value": "4 seater sofa",
            "price": 190,
          },
          {
            "type": "Suede furniture",
            "value": "L-shaped sofa",
            "price": 300,
          },
          {
            "type": "Suede furniture",
            "value": "Dining table chair, base and back",
            "price": 35,
          },
          {
            "type": "Suede furniture",
            "value": "Dining chair, base only",
            "price": 25,
          },

          {
            "type": "Leather furniture",
            "value": "Wooden armchair for living room",
            "price": 45,
          },
          {
            "type": "Leather furniture",
            "value": "Chair for the living room",
            "price": 45,
          },
          {
            "type": "Leather furniture",
            "value": "Two-seater sofa",
            "price": 100,
          },
          {
            "type": "Leather furniture",
            "value": "3 seater sofa",
            "price": 150,
          },
          {
            "type": "Leather furniture",
            "value": "4 seater sofa",
            "price": 170,
          },
          {
            "type": "Leather furniture",
            "value": "L-shaped sofa",
            "price": 300,
          },
          {
            "type": "Leather furniture",
            "value": "Dining table chair, base and back",
            "price": 35,
          },
          {
            "type": "Leather furniture",
            "value": "Dining chair, base only",
            "price": 25,
          },
        ],
      },
    ],
  },

  {
    "id": 10,
    "title": "Pest control service",
    "description":
      "Deep cleaning of the kitchen, in which walls and floors are cleaned - windows and fans - cupboards from the outside - home appliances for the kitchen",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
      "Note: Items are priced at the price of cleaning the piece",
    ],
    "image":
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGNsZWFuaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    " rating": 4,
    "minPrice": 180,
    "ordersPerDay": 3,
    "types": {
      "question": "Select control type",
      "options": [
        "Rodents",
        "Bed bugs/flea ticks",
        "Bees/Wasps",
        "General pest control",
      ],
    },

    "questions": [
      {
        "question": "Select furniture",
        "options": [
          {
            "type": "Rodents",
            "value": "One bedroom apartment with accessories",
            "price": 199,
          },
          {
            "type": "Rodents",
            "value": "Two bedroom apartment with annexes",
            "price": 199,
          },
          {
            "type": "Rodents",
            "value": "3 bedroom apartment with annexes",
            "price": 200,
          },
          {
            "type": "Rodents",
            "value": "Two bedroom villa with annexes",
            "price": 200,
          },
          {
            "type": "Rodents",
            "value": "3 bedroom villa with annexes",
            "price": 250,
          },
          {
            "type": "Rodents",
            "value": "4 bedroom villa with annexes",
            "price": 250,
          },
          {
            "type": "Bed bugs/flea ticks",
            "value": "One bedroom apartment with accessories",
            "price": 199,
          },
          {
            "type": "Bed bugs/flea ticks",
            "value": "Two bedroom apartment with annexes",
            "price": 199,
          },
          {
            "type": "Bed bugs/flea ticks",
            "value": "3 bedroom apartment with annexes",
            "price": 200,
          },
          {
            "type": "Bed bugs/flea ticks",
            "value": "Two bedroom villa with annexes",
            "price": 200,
          },
          {
            "type": "Bed bugs/flea ticks",
            "value": "3 bedroom villa with annexes",
            "price": 250,
          },
          {
            "type": "Bed bugs/flea ticks",
            "value": "4 bedroom villa with annexes",
            "price": 250,
          },
          {
            "type": "Bees/Wasps",
            "value": "One bedroom apartment with accessories",
            "price": 199,
          },
          {
            "type": "Bees/Wasps",
            "value": "Two bedroom apartment with annexes",
            "price": 199,
          },
          {
            "type": "Bees/Wasps",
            "value": "3 bedroom apartment with annexes",
            "price": 200,
          },
          {
            "type": "Bees/Wasps",
            "value": "Two bedroom villa with annexes",
            "price": 200,
          },
          {
            "type": "Bees/Wasps",
            "value": "3 bedroom villa with annexes",
            "price": 250,
          },
          {
            "type": "Bees/Wasps",
            "value": "4 bedroom villa with annexes",
            "price": 250,
          },
          {
            "type": "General pest control",
            "value": "One bedroom apartment with accessories",
            "price": 199,
          },
          {
            "type": "General pest control",
            "value": "Two bedroom apartment with annexes",
            "price": 199,
          },
          {
            "type": "General pest control",
            "value": "3 bedroom apartment with annexes",
            "price": 200,
          },
          {
            "type": "General pest control",
            "value": "Two bedroom villa with annexes",
            "price": 200,
          },
          {
            "type": "General pest control",
            "value": "3 bedroom villa with annexes",
            "price": 250,
          },
          {
            "type": "General pest control",
            "value": "4 bedroom villa with annexes",
            "price": 250,
          },
        ],
      },
    ],
  },

  {
    "id": 11,
    "title": "Mosque care",
    "description":
      "This service is dedicated to taking care of mosques by providing a carpet cleaning service with sterilization. The service includes:  - Carpet cleaning using specialized machines with carpet perfuming - Cleaning the floors around carpets - Cleaning the inner walls to 2 meters and remove dust from the shelves - Sterilization of the mosque after the completion of the service for free Note: Cleaning the mosque facilities (an additional cost will be determined upon the request and after the visit)",
    "details": [
      "Cleaning furniture with scented and sterilized European materials",
      "Removing all stubborn stains",
      "Dries within two hours and leaves no trace or smell",
      "Golden guarantee in case of any defect or notes",
    ],
    "image":
      "https://plus.unsplash.com/premium_photo-1677234148093-0115f38be0e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycGV0JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "category": "Home maintainance",
    "range": "SAR2.5k - SAR25k",
    "rating": 4,
    "minPrice": 150,
    "ordersPerDay": 2,
    "types": null,
    "questions": [
      {
        "question": "Select Mosque size",
        "options": [
          { "value": "Area less than 200 sqr mtr", "price": 800 },
          { "value": "Area between 200 to 300 sqr mtr", "price": 1100 },
          {
            "value": "Area between 300 - 1000 sqr mtr",
            "price": "5 riyals per meter",
          },
          {
            "value": "Area more than 1000 sqr mtr",
            "price": "4 riyals per meter",
          },
        ],
      },
    ],
  },
]


const ServicePage = () => {
 
  const [selectedService, setSelectedService] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [price, setPrice] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedType(null);
    setSelectedValue(null);
    setPrice(null);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setSelectedValue(null);
    setPrice(null);
  };

  const handleValueSelect = (value) => {
    setSelectedValue(value);
    setPrice(value.price);
  };

  const handleSaveToLocalStorage = () => {
    const selectedData = {
      service: selectedService.title,
      type: selectedType,
      value: selectedValue.value,
      price: price,
    };
    localStorage.setItem("selectedData", JSON.stringify(selectedData));
    alert("Data saved to local storage!");
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" align="center" gutterBottom>
          Select a Service
        </Typography>
        <Grid container spacing={2}>
          {serviceData.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleServiceSelect(service)}
                  >
                    Select Service
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {selectedService && (
          <div>
            <Typography variant="h6" gutterBottom>
              {selectedService.types?.question}
            </Typography>
            <div className="options-container">
              {selectedService.types && selectedService.types.options.length > 0
                ? selectedService.types?.options.map((type, index) => (
                    <div>
                      <Button
                        key={index}
                        variant={
                          selectedType === type ? "contained" : "outlined"
                        }
                        onClick={() => handleTypeSelect(type)}
                        color="secondary"
                        sx={{ margin: "6px" }}
                      >
                        {type}
                      </Button>
                    </div>
                  ))
                : // Display options directly if no types are available
                  selectedService.questions.map((question, index) => (
                    <div key={index}>
                      <Typography variant="h6" gutterBottom>
                        {question.question}
                      </Typography>
                      {question.options.map((option, optionIndex) => (
                        <Button
                          key={optionIndex}
                          variant={
                            selectedValue === option ? "contained" : "outlined"
                          }
                          onClick={() => handleValueSelect(option)}
                          color="secondary"
                          sx={{ margin: "6px" }}
                        >
                          {option.value}
                        </Button>
                      ))}
                    </div>
                  ))}
            </div>
          </div>
        )}

        {selectedService && (
          <div>
            {selectedType ? (
              <Box>
                {selectedService.questions.map((question, index) => (
                  <div key={index}>
                    <Typography variant="h6" gutterBottom>
                      {question.question}
                    </Typography>
                    <Box gap={2} className="options-container">
                      {question.options
                        .filter((option) => option.type === selectedType)
                        .map((option, optionIndex) => (
                          <Button
                            key={optionIndex}
                            variant={
                              selectedValue === option
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => handleValueSelect(option)}
                            color="secondary"
                            sx={{ margin: "6px" }}
                          >
                            {option.value}
                          </Button>
                        ))}
                    </Box>
                  </div>
                ))}
              </Box>
            ) : (
              <div>{null}</div>
            )}
          </div>
        )}

        {selectedType && selectedValue && (
          <Typography variant="h5" gutterBottom>
            Selected Type: {selectedType}
          </Typography>
        )}
        {price !== null && (
          <Typography variant="h5" gutterBottom>
            Selected Value Price: {price} SAR
          </Typography>
        )}
        {selectedValue && (
          <Button variant="contained" onClick={handleSaveToLocalStorage}>
            Save to Local Storage
          </Button>
        )}
      </ThemeProvider>
    </Container>
  );
};

export default ServicePage;



