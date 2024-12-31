import { useAuth } from '../../firebase/contexts/authContext'
import Header from "../header";
import React, { useState, useEffect } from 'react';
import {  db } from "../../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc } from 'firebase/firestore';


const Home = () => {


const [date, setDate] = useState('');
const [date1, setDate1] = useState('');

  const [pushups, setPushups] = useState(0);
  const [pullups, setPullups] = useState(0);
  const [squats, setSquats] = useState(0);
  const [running, setRunning] = useState(0);
  const [dsa, setDsa] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [react, setReact] = useState(0);
  const [algos, setalgos] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    console.log(today)
    setDate(today);
  }, []);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    console.log(today)
    setDate1(today);
  }, []);

//   useEffect(() => {
//     setDate('2025-01-01');
//   }, []);
  



  const handleSubmit = async (e) => {
    e.preventDefault();

    const workoutRef = doc(db, 'workout', date);
    const existingDoc = await getDoc(workoutRef);

    let newValues = {

      date:String(date1),
      pushups: Number(pushups),
      pullups: Number(pullups),
      squats: Number(squats),
      running: Number(running),
      dsa: Number(dsa),
      javascript: Number(javascript),
      react: Number(react),
      algos: Number(algos),
    };


    if (existingDoc.exists()) {
      const existingData = existingDoc.data();
      newValues = {
        pushups: (existingData.pushups || 0) + newValues.pushups,
        pullups:(existingData.pullups || 0 ) + newValues.pullups,
        squats:(existingData.squats || 0 )   + newValues.squats,
        running: (existingData.running || 0) + newValues.running,
        dsa: (existingData.dsa || 0 ) + newValues.dsa,
        javascript:( existingData.javascript || 0)+ newValues.javascript,
        react: (existingData.react || 0)+ newValues.react,
        algos: (existingData.algos || 0)+ newValues.algos,
      };
    }

    try {
      await setDoc(workoutRef, newValues);
      toast.success('Quest results saved successfully!', {
        position: 'top-right',
      });
      
      
      setDate1(0);
      setPushups(0);
      setPullups(0);
      setSquats(0);
      setRunning(0);
      setDsa(0);
      setJavascript(0);
      setReact(0);
      setalgos(0);

    } catch (error) {
      console.error('Error writing document: ', error);
      toast.error('System Failed to log workout. Please try again.', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center py-10">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Quest Details</h2>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between items-center">
            <label className="text-lg font-semibold text-gray-600">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              readOnly
              className="text-gray-600 border-gray-300 border rounded-md px-4 py-2"
            />
          </div>

          {/* Cards for Each Task */}
          <div>
            {/* card for workouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              label="Pushups"
              value={pushups}
              onChange={(e) => setPushups(e.target.value)}
            />
            <Card
              label="Pullups"
              value={pullups}
              onChange={(e) => setPullups(e.target.value)}
            />
            <Card
              label="Squats"
              value={squats}
              onChange={(e) => setSquats(e.target.value)}
            />
            <Card
              label="Running (km)"
              value={running}
              onChange={(e) => setRunning(e.target.value)}
            />
          
            {/* card for studys */}

           
            <Card
              label="dsa"
              value={dsa}
              onChange={(e) => setDsa(e.target.value)}
            />
            <Card
              label="javascript"
              value={javascript}
              onChange={(e) => setJavascript(e.target.value)}
            />
            <Card
              label="react"
              value={react}
              onChange={(e) => setReact(e.target.value)}
            />
            <Card
              label="algos"
              value={algos}
              onChange={(e) => setalgos(e.target.value)}
            />

            
          </div>

          </div>
          

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Log Workout
          </button>
        </form>
      </div>
    </div>
  );
};

const Card = ({ label, value, onChange }) => {
  return (
    <div className="bg-gray-50 p-4 shadow-sm rounded-lg border">
      <label className="block text-gray-600 font-medium mb-2">{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
    </div>
  );
};
    
  
export default Home;