#  CityLearn

### Cities Forget. CityLearn Remembers.

AI-Powered Traffic Institutional Memory System for Event-Driven Congestion Management

---

##  Problem Statement

Urban traffic authorities face recurring congestion caused by:

* Political Rallies
* Festivals
* Sports Events
* Construction Activities
* Vehicle Breakdowns
* Accidents
* Sudden Public Gatherings

Despite years of operational experience, traffic response strategies are often:

 * Experience-driven

 * Poorly documented

 * Not reusable

 * Lacking post-event learning

As a result, cities repeatedly solve the same traffic problems without learning from previous incidents.

---

#  Our Solution

CityLearn is a self-learning traffic intelligence platform that transforms historical traffic incidents into operational knowledge.

Instead of treating every traffic disruption as a new problem, CityLearn learns from thousands of past events and recommends the best response strategy for future incidents.

The platform acts as an institutional memory system for traffic authorities.

---

#  Core Workflow

New Event

↓

Generate Event Fingerprint

↓

Find Similar Historical Events

↓

Predict Traffic Impact

↓

Recommend Response Strategy

↓

Visualize Insights

↓

Compare Actual Outcome

↓

Learn & Improve

---

#  CityLearn Engine

Every traffic event is converted into a unique fingerprint using:

* Event Type
* Event Cause
* Corridor
* Police Station
* Zone
* Priority
* Road Closure Requirement
* Time of Day
* Day of Week

Example:

Event Type: Vehicle Breakdown
Cause: Engine Failure
Corridor: Mysore Road
Police Station: Byatarayanapura
Priority: Medium
Road Closure: False
Hour: 09

This fingerprint is transformed into vector embeddings using Sentence Transformers.

---

#  Similar Event Retrieval

When a new event occurs, CityLearn searches historical records and retrieves the most similar incidents.

Outputs include:

* Top Similar Events
* Similarity Scores
* Common Causes
* Recommended Police Station
* Recommended Corridor
* Historical Outcomes

This enables traffic operators to leverage past operational knowledge instantly.

---

#  Impact Prediction Engine

CityLearn predicts operational impact before traffic conditions worsen.

Current Prediction Models:

### Road Closure Prediction

Predicts:

* Whether road closure is required
* Probability of closure

Model Accuracy:

**93%+ Accuracy**

Features Used:

* Event Type
* Corridor
* Police Station
* Priority
* Event Cause
* Time Features

---

#  Recommendation Engine

Using historical similarity and prediction outputs, CityLearn recommends:

### Manpower Deployment

Suggested police station and response area

### Barricading Strategy

Whether barricades should be deployed

### Congestion Risk

* Low
* Moderate
* High

### Operational Actions

Examples:

* Monitor Traffic Flow
* Deploy Barricades Early
* Increase Police Presence
* Activate Diversion Plan

---

#  Traffic Intelligence Dashboard

Interactive Dashboard Features:

### Traffic Command Center

Real-time event monitoring

### Event Analysis

Historical event insights

### Prediction Dashboard

AI-generated forecasts

### Recommendation Center

Operational recommendations

### Event Replay Engine

Learn from previous incidents

### Knowledge Graph

Relationships between:

Event → Cause → Congestion → Response → Outcome

---

#  Knowledge Graph

CityLearn builds connections between:

* Event Types
* Corridors
* Police Stations
* Causes
* Closures
* Outcomes


---

#  Learning Loop

Unlike traditional traffic systems, CityLearn continuously learns.

After an event:

Prediction

↓

Actual Outcome

↓

Error Analysis

↓

Knowledge Update

↓

Smarter Future Recommendations

This creates a self-improving traffic intelligence platform.

---

#  Tech Stack

## AI & Machine Learning

* Python
* Scikit-Learn
* Sentence Transformers
* Random Forest
* XGBoost
* Cosine Similarity

## Backend

* FastAPI
* PostgreSQL
* SQLAlchemy
* Redis

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Mapbox
* Recharts

## Knowledge Graph

* NetworkX

---

#  Project Structure

This project is organized as a full-stack Next.js + FastAPI application. The backend powers predictive operational intelligence using trained CatBoost models, similarity retrieval, recommendation engines, and feature engineering pipelines. The frontend provides an interactive dashboard for event analysis, forecasting, strategic recommendations, and institutional memory visualization.

```text
CityLearn-RG/
├── backend/                        # FastAPI Python Backend
│   ├── app/
│   │   ├── main.py                 # Core API endpoints (/analyze-event)
│   │   └── schemas.py              # Pydantic input schemas (EventInput)
│   │
│   ├── ml_artifacts/               # Generated ML model artifacts
│   │   ├── closure_model.joblib    # Road closure prediction model
│   │   ├── priority_model.joblib   # Event priority prediction model
│   │   └── ordinal_encoder.joblib  # Feature encoder for categorical inputs
│   │
│   ├── data/
│   │   └── fingerprint_store.pkl   # Historical event similarity index
│   │
│   ├── main.py                     # Backend service entry point
│   ├── prediction_service.py       # CatBoost inference layer
│   ├── similarity_service.py       # Historical case retrieval engine
│   ├── recommendation_service.py   # Diversion & response recommendation engine
│   ├── fingerprint_engine.py       # Feature engineering pipeline
│   └── citylearn_cleaned_data.csv  # Training & analytics dataset
│
├── citylearn/                      # Next.js 16 + TypeScript Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/             # Login & Registration flows
│   │   │   ├── (dashboard)/        # Operational intelligence modules
│   │   │   │   ├── dashboard/
│   │   │   │   ├── analysis-engine/
│   │   │   │   ├── predictive-intel/
│   │   │   │   ├── strategic-recommendations/
│   │   │   │   └── institutional-memory/
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   └── lib/
│   │       └── analysis.ts
│   │
│   ├── .env.local                 # Frontend environment configuration
│   ├── package.json
│   └── tailwind.config.ts
│
├── ml/                             # Model training pipeline
│   ├── preprocess.py
│   └── train.py                    # Generates backend/ml_artifacts/*.joblib
│
└── docs/                           # Architecture diagrams & documentation
```



---

#  Sample Recommendation Output

```json
{
  "similar_events_found": 10,
  "road_closure_probability": "10.0%",
  "recommended_police_station": "Byatarayanapura",
  "recommended_corridor": "Mysore Road",
  "common_cause": "vehicle_breakdown",
  "expected_congestion": "Moderate",
  "recommended_action": "Monitor traffic flow"
}
```

---

#  Impact

CityLearn helps traffic authorities:

 * Forecast event-related congestion

 * Improve resource deployment

 * Reduce response time

 * Reuse operational knowledge

 * Learn from past incidents

 * Make data-driven decisions

---

#  Future Enhancements

* Real-Time Traffic Feed Integration
* Dynamic Diversion Planning
* Officer Allocation Optimization
* Congestion Heatmaps
* LLM-Powered Traffic Assistant
* Predictive City-Wide Traffic Simulation

---
