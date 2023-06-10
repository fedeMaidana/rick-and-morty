import dataStyle from './data.module.css'

const Data = (props) => {
    const {currChar, searchBar} = props

    return(
        <>
            {searchBar
                ?(
                    <>
                        <h1>{currChar?.name}</h1>
                        <div className={dataStyle.dataContainer}>
                            <div className={dataStyle.factContainer}>
                                <p>{currChar?.status}</p>
                            </div>
                            <div className={dataStyle.factContainer}>
                                <p>{currChar?.species}</p>
                            </div>
                            <div className={dataStyle.factContainer}>
                                <p>{currChar?.gender}</p>
                            </div>
                            <div className={dataStyle.factContainer}>
                                <p>{currChar?.origin?.name}</p>
                            </div>
                        </div>
                    </>
                )
                :(
                    ''
                )
            }

        </>
    )
}

export default Data