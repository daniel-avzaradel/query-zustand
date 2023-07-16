import { Repo } from '../../queries/repo/types'
import './styles.css'

interface CardProps {
    repo: Repo
}

const Card = ({repo}: CardProps) => {

  return (
    <div className='card'>
        {repo.name}
        <button className="btn">Favorite</button>
    </div>
  )
}

export default Card