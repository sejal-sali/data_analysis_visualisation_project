# City Happiness Dashboard – Web Visualization

An interactive dashboard built with **Node.js**, **Express**, and **Chart.js** to visualize and explore the City Happiness Index based on urban indicators like air quality, healthcare, mobility, and more.

---

## Features

*  Bar chart of Top 10 Cities by Composite Happiness Index
*  Radar chart comparing Sub-Indices across top cities
*  Line chart showing monthly trend for selected cities
*  Pie chart visualizing traffic density distribution
*  Heatmap-style bar chart of different indicators across cities
*  Fully client-side rendering with API served by Express

---

##  Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript, [Chart.js](https://www.chartjs.org/)
* **Backend**: Node.js, Express.js
* **Data Format**: JSON (converted from CSV)

---

##  Folder Structure

```
city-happiness-visualization/
├── public/                # Frontend files
│   ├── index.html         # Main dashboard UI
│   ├── style.css          # Styling for charts and layout
│   └── script.js          # Chart rendering and interactions
├── data/
│   └── data.json          # Processed dataset in JSON format
├── Final_Happiness_Index_Data_Processed.csv  # Original data
├── convert.js             # Script to convert CSV to JSON
├── server.js              # Express server
├── package.json           # Node project config
```

---

##  Installation

### 1. Clone the Repository

```bash
git clone <repo-url>
cd city-happiness-visualization
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Convert CSV to JSON (Only Once)

```bash
mkdir data
node convert.js
```

>  Ensure `Final_Happiness_Index_Data_Processed.csv` exists at project root.

### 4. Start the Server

```bash
node server.js
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

##  Data Source

The dataset is based on a fictional City Happiness Index, created from real-world-style indicators:

* `Air_Quality_Index`
* `Cost_of_Living_Index`
* `Healthcare_Index`
* `Environmental_Quality_Index`
* `Mobility_Comfort_Index`
* `Health_Wellness_Index`
* `Composite_Happiness_Index`

Data spans multiple months for each city to enable temporal comparisons.

---

##  Visualizations Included

###  Composite Bar Chart

> Shows the top 10 cities with the highest average happiness index.

###  Sub-Index Radar Chart

> Compares environmental, health, and mobility indices of top cities.

###  Monthly Line Chart

> Select a city to see how its happiness index changes month-to-month.

###  Traffic Pie Chart

> See how traffic density categories are distributed across all cities.

###  Heatmap-like Bar Chart

> Compare average Air Quality, Cost of Living, and Healthcare across cities.

---

##  Future Enhancements

*  Search/filter for cities
*  Toggle between normalized/raw index data
*  Download filtered reports
*  Add more chart types like stacked bars or bubble maps
*  Deploy using Vercel, Render, or Railway


##  License

MIT License – Free to use, modify, and distribute.

---

Enjoy exploring the city happiness trends! 
