import { useState, useEffect } from 'react';
import { Repo } from '../../queries/repo/types'
import useFavoriteRepos from '../../store/useFavoriteRepos'
import './styles.css'

interface CardProps {
    repo: Repo
}

const Card = ({ repo }: CardProps) => {

    const [active, setActive] = useState(false)

    const store = useFavoriteRepos(state => state)
    const isFavorite = (id: number) => {
        return store.favoriteRepoIds.includes(id) ? 'Unfavorite' : 'Favorite'
    }

    const handleBtn = (id: number) => {
        if (store.favoriteRepoIds.includes(id)) {
            console.log(active);
            setActive(false)
            return store.removeFromFavorites(id)
        } else {
            console.log(active);
            setActive(true)
            return store.addToFavorites(id)
        }
    }

    

    return (
    <div className='card'>
        <div>{repo.name}</div>
        <button className={`btn ${active && 'active'}`} onClick={() => handleBtn(repo.id)}> {isFavorite(repo.id)}</button>
    </div>)
}

export default Card
