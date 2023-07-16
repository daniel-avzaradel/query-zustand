import './App.css'
import useFetchRepos from './queries/repo'

function App() {

  const { data } = useFetchRepos();
  console.log(data);
  

  return (
    <>
      
    </>
  )
}

export default App
