import './App.css'
import useFetchRepos from './queries/repo';
import Card from './components/card/Card';

function App() {

    const {data} = useFetchRepos('daniel-avzaradel');

    return (
    <div className='App'>
      {data?.map((repo) => {
        return <Card repo={repo} key={repo.id} />
      })}
    </div>
    )
}

export default App
