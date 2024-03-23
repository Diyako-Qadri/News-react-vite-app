import MainArticle from "../Article/MainArticle/MainArticle";

const SelectedCategory = ({category, SCupdateFunction}) => {
    return (
       
        <div>
            {category.map((article, index) => <MainArticle key={index} {...article} MaUpdateFunction={SCupdateFunction}/>)}
        </div>
           
    )
};

export default SelectedCategory



