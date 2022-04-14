import axios from "axios"



(async (id) => {


    const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)

    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts/${users.id}`)

   

       
        console.log(users,"Users'dan Gelen")
        console.log(posts,"Posts'dan Gelen")
       
})();