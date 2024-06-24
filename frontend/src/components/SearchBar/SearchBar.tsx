import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({ placeholder }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            console.log(searchTerm)
        }
    }

    return (
        <form className='searchbar-container'>
            <input 
                type='text'
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleEnter}
                placeholder={placeholder}
                className='searchbar'
            />
        </form>
    )
}

interface SearchBarProps {
    placeholder?: string
}
