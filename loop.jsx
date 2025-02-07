
import { Reuse } from "../input_fild/Reuse";
function Loop() {

   
   
    const UserData = [
        {
            id:1,
            name: 'harshal Chunilal Tamboli',
            age: 21,
            email: 'harshaltamboli72@gmail.com'

        },

        {
            id:2,
            name: 'Bhavesh Prakash Pansare',
            age: 24,
            email: 'harshaltamboli721@gmail.com'

        },

        {
            id:3,
            name: 'Ganesh Iswar Patil',
            age: 23,
            email: 'harshaltamboli72@gmail.com'

        },

        {
            id:4,
            name: 'nilesh santosh patil',
            age: 24,
            email: 'harshaltamboli72@gmail.com'

        },

        {
            id:5,
            name: 'Nayan shyam patil',
            age: 27,
            email: 'harshaltamboli72@gmail.com'

        },



    ]

    return (
        <>
            <h1>Looping statements</h1>
            <table border={1}>

            <thead>
                <tr>
                        <td>Name</td>
                        <td>age</td>
                        <td>Email</td>
                </tr>
            </thead>
            {
            UserData.map((user)=>(
                
                <tr key={user.id}>
                    <td> {user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email} </td>
                    

                </tr>
                
            ))
        }
            </table>

            

            <h2>Without loop have a user data </h2>
            <table border={1}>
                <thead>

                    <tr>
                        <td>Name</td>
                        <td>age</td>
                        <td>Email</td>


                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Harshal tamboli</td>
                        <td>21</td>
                        <td>harshaltamboli72@gmail.com</td>
                    </tr>

                    <tr>
                        <td>Bhavesh Pansare</td>
                        <td>24</td>
                        <td>bhaveshp72@gmail.com</td>
                    </tr>

                    <tr>
                        <td>Ganesh patil</td>
                        <td>23</td>
                        <td>ganeshp72@gmail.com</td>
                    </tr>

                    <tr>
                        <td>Nilesh p</td>
                        <td>25</td>
                        <td>nileshpatil72@gmail.com</td>
                    </tr>

                    <tr>
                        <td>Nayan p</td>
                        <td>35</td>
                        <td>nayan patil72@gmail.com</td>
                    </tr>




                </tbody>

            </table>

            <Reuse/>
            <usersdata/>
        </>
    )
}

export default Loop;