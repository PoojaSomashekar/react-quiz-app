export const fetchQuestionList = async (categoryId) => {
    try{
        const response = await fetch(`https://opentdb.com/api.php?amount=10${
            categoryId && `&category=${categoryId}`
    }&difficulty=medium&type=multiple`);
        // Check status codes and whatnot here and handle accordingly
        const data = await response.json();
        if(!response.ok){
            throw new Error('Failed to fetch!');
        }
        console.log(data);
        return data;
    } catch(error) {
        console.log(error);
    }
   
};