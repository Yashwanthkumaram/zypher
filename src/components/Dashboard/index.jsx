// import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

// const Dashboard = () => {
//   const [workouts, setWorkouts] = useState([]);

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const querySnapshot = await getDocs(collection(db, 'workouts'));
//       const data = querySnapshot.docs.map(doc => doc.data());
//       setWorkouts(data);
//     };
//     fetchWorkouts();
//   }, []);

//   return (
//     <div>
//       <h2>Workout Dashboard</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Pushups</th>
//             <th>Pullups</th>
//             <th>Squats</th>
//             <th>Running (km)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {workouts.map((workout, index) => (
//             <tr key={index}>
//               <td>{workout.date}</td>
//               <td>{workout.pushups}</td>
//               <td>{workout.pullups}</td>
//               <td>{workout.squats}</td>
//               <td>{workout.running}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
// import { db } from "./firebase"; // Firebase configuration
// import { collection, getDocs } from "firebase/firestore";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState("pushups");
  const [chartData, setChartData] = useState(null);

  const activities = [
    { label: "Pushups", value: "pushups" },
    { label: "Pullups", value: "pullups" },
    { label: "Squats", value: "squats" },
    { label: "Running (km)", value: "running" },
    { label: "DSA (Problems Solved)", value: "dsa" },
    { label: "JavaScript (Hours)", value: "javascript" },
    { label: "React (Hours)", value: "react" },
  ];

  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const querySnapshot = await getDocs(collection(db, "workouts"));
  //     const data = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     data.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
  //     setWorkouts(data);
  //   };
  //   fetchWorkouts();
  // }, []);

  // useEffect(() => {
  //   if (workouts.length > 0) {
  //     const labels = workouts.map((workout) => workout.date);
  //     const data = workouts.map((workout) => workout[selectedActivity] || 0);

     


  //     setChartData({
  //       labels,
  //       datasets: [
  //         {
  //           label: `Progress: ${selectedActivity}`,
  //           data,
  //           borderColor: "#4f46e5",
  //           backgroundColor: "rgba(79, 70, 229, 0.2)",
  //           tension: 0.4,
  //         },
  //       ],
  //     });
  //   }
  // }, [selectedActivity, workouts]);

  
  useEffect(() => {
    const fetchWorkouts = async () => {
      const querySnapshot = await getDocs(collection(db, "workouts"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        date: doc.data().date, // Assuming 'date' is a field in your documents
        pushups: parseInt(doc.data().pushups, 10), // Convert to number
        pullups: parseInt(doc.data().pullups, 10),
        squats: parseInt(doc.data().squats, 10),
        running: parseFloat(doc.data().running), // Convert to number
        dsa: parseInt(doc.data().dsa, 10),
        javascript: parseFloat(doc.data().javascript), // Convert to number
        react: parseFloat(doc.data().react), // Convert to number
      }));
      data.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
      setWorkouts(data);

      console.log("Firestore Data:", data); 
    };
    fetchWorkouts();
  }, []);

  useEffect(() => {
    if (workouts.length > 0) {
      const labels = workouts.map((workout) => workout.date);
      const data = workouts.map((workout) => workout[selectedActivity] || 0);

      setChartData({
        labels,
        datasets: [
          {
            label: `Progress: ${selectedActivity}`,
            data,
            borderColor: "#4f46e5",
            backgroundColor: "rgba(79, 70, 229, 0.2)",
            tension: 0.4,
          },
        ],
      });
    }
  }, [selectedActivity, workouts]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Progress Dashboard</h1>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Select Activity</label>
        <select
          value={selectedActivity}
          onChange={(e) => setSelectedActivity(e.target.value)}
          className="w-full p-2 border rounded-lg focus:border-indigo-600"
        >
          {activities.map((activity) => (
            <option key={activity.value} value={activity.value}>
              {activity.label}
            </option>
          ))}
        </select>
      </div>

      {chartData ? (
        <div className="p-4 border rounded-lg shadow-lg bg-white">
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: "top",
                },
              },
            }}
          />
        </div>
      ) : (
        <p className="text-center text-gray-500">No data available for the selected activity.</p>
      )}
    </div>
  );
};

export default Dashboard;
