import {
    useEffect
} from 'react'
import { 
    useSearchPage
} from 'vtex.search-page-context/SearchPageContext'

function SearchBarControl() {
    const searchDetails = useSearchPage()

    useEffect(() => {
        const closeSearchBar = document.querySelector(".close-search-bar")
        if (closeSearchBar) closeSearchBar.click()
    }, [searchDetails])

    return null
}

export default SearchBarControl