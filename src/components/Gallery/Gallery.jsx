import galleryStyle from './gallery.module.css'

const Gallery = (props) => {
    const {characters, prevChar, currChar, nextChar, searchBar, prevCharFunc, nextCharFunc, isFav, handleFavorite} = props

    return(
        <>
            {searchBar
                ?(
                    <figure className={galleryStyle.imgContainer}>
                        {characters.length > 1 ? <img src={prevChar?.image} alt={prevChar?.name} onClick={prevCharFunc} /> : ''}
                        <div>
                            <img src={currChar?.image} alt={currChar?.name} />
                            {isFav
                                ?(
                                    <button onClick={handleFavorite}>❤️</button>
                                )
                                :(
                                    <button onClick={handleFavorite}>🤍</button>
                                )
                            }
                        </div>
                        {characters.length > 1 ? <img src={nextChar?.image} alt={nextChar?.name} onClick={nextCharFunc} /> : ''}
                    </figure>
                )
                :(
                    <div className={galleryStyle.errorContainer}>
                        <p>No se encontró el personaje solicitado</p>
                    </div>
                )
            }
        </>
    )
}

export default Gallery