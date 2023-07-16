import './App.css'
import Card from './components/card/Card';
import useFetchRepos from './queries/repo';

function App() {

    const {data} = useFetchRepos();
    console.log(data);

    return (
    <div className='App'>
      {data?.map((item: any, i: number) => {
        return <Card key={i} />
      })}
      <Card/>
    </div>
    )
}

export default App
