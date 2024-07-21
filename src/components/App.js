
import React from "react";
import './../styles/App.css';

const App = () => {
   const [dat,setData]=useState([])
  const [loading,setLoading]=useState(true)


  useEffect(()=>{

    const fetchData=async()=>{

      try{

        const res=await axios.get(' https://dummyjson.com/products')

        setData(res.data)
  
        console.log(res)

      }catch(err){
        console.log('Error fetching data:',err)
      }finally{
        setLoading(false)
      }

     
    }

    fetchData()

  },[])
  return (
    <div>
        {/* Do not remove the main div */}
     <h1>Data Fetched from API</h1>

  {
    loading?(<p>Loading....</p>):<pre>{JSON.stringify(dat,null,2)}</pre>
  }
    </div>
  )
}

export default App
