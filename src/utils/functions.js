import { allArticle } from "../Data/data";

export const getImageURL = imageName =>{
    return new URL(`../assets/image/${imageName}`, import.meta.url).href
}

export const removeArticle = targetArray => {
    const randomIndex = Math.floor(Math.random() * targetArray.length);
    const randomArticle = targetArray[randomIndex];
    targetArray.splice(targetArray.indexOf(randomArticle), 1);
    return randomArticle;
  };

  export const getArticle = headline => {
        allArticle.find(article => article.headline === headline)
  }