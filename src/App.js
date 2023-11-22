import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const [userData, setUserData] = useState([])


  const getData = async () => {
    try {
      const response = await fetch(' https://randomuser.me/api/?page=1&results=1&seed=abc')
      const result = await response.json()
      setUserData(result.results)
    } catch (error) {
      throw new Error({ error })
    }
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="w-full h-screen box-border flex justify-center items-center	bg-slate-300">
      {
        userData.map(user => {
          return <Card user={user} />
        })
      }    </div>
  );
}

export default App;
