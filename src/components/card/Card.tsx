import { useState, useEffect } from 'react';
import { Repo } from '../../queries/repo/types'
import useFavoriteRepos from '../../store/useFavoriteRepos'
import './styles.css'

interface CardProps {
    repo: Repo
}

const Card = ({ repo }: CardProps) => {
    
    const favoriteRepoIds = useFavoriteRepos(state => state.favoriteRepoIds)
    const addToFavorites = useFavoriteRepos(state => state.addToFavorites)
    const removeFromFavorites = useFavoriteRepos(state => state.removeFromFavorites)

    const [active, setActive] = useState(favoriteRepoIds.includes(repo.id))

    const isFavorite = (id: number) => {
        return favoriteRepoIds.includes(id) ? 'Unfavorite' : 'Favorite'
    }

    const handleBtn = (id: number) => {
        if (favoriteRepoIds.includes(id)) {
            setActive(false)
            return removeFromFavorites(id)
        } else {
            setActive(true)
            return addToFavorites(id)
        }
    }

    return (
    <div className='card'>
        <div>{repo.name}</div>
        <button className={`btn ${active && 'active'}`} onClick={() => handleBtn(repo.id)}> {isFavorite(repo.id)}</button>
    </div>)
}

export default Card
