import CompleteArticle from "../CompleteArticle"


const SelectedArticle = ({article, closeArticle}) => {
    return (
        
        <div >
            <CompleteArticle {...article} updateFunction={closeArticle}/>
        </div>
    )
}

export default SelectedArticle



