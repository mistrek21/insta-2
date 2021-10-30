import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

function Search() {
    const [usernames, setUsernames] = useState([])
    const [value, setValue] = useState('')

    // useEffect(
    //     () =>
    //         onSnapshot
    //             (collection(db, 'posts'),
    //                 (snapshot) => {
    //                     setUsernames(snapshot.docs);
    //                 }
    //             ),
    //     [db]
    // );

    useEffect(
        () => {
            if (value.length > 0) {
                const idk = onSnapshot
                    (collection(db, 'posts'),
                        (snapshot) => {
                            setUsernames(snapshot.docs);
                        }
                    )
                // setResult([])
                let searchQuery = value.toLocaleLowerCase()
                for (const key in idk) {
                    let username = idk[key].name.toLocaleLowerCase()
                    if (username.slice(0, searchQuery.length).indeOf(searchQuery) !== -1) {
                        setUsernames(prevResult => {
                            return [...prevResult, idk[key].name]
                        })
                    }
                }
            } else {
                setUsernames([])
            }
        }, [value, db])

    return (

        <div>
            <input
                type="text"
                className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"

                onChange={(event) => setValue(event.target.value)}
                value={value}
            />
            {usernames.map((username, i) => (
                <a href="#" key={i}>
                    <div className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-mdr">
                        {/* {username.data().username} */}
                        
                        {username.data().username === username.data().username ? username.data().username : username.data().username}

                    </div>
                </a>
            ))}




        </div >

    )
}

export default Search



