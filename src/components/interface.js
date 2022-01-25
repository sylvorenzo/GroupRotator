import react, {useState, useEffect} from 'react';
import productivity from '../assets/productivity.png';
import { ref, set , onValue} from 'firebase/database';
import { database } from '../fire';
import "react-alice-carousel/lib/alice-carousel.css";
import { CSVLink } from 'react-csv';

export default function Interface(){

    //create states that would change constants
    const [shuffledArray,setShuffleArray] = useState([]);
    const [Group1, setGroup1] = useState([]);
    const [Group2, setGroup2] = useState([]);
    const [Group3, setGroup3] = useState([]); 
    
    //create an array containing colleague names
    const array = ['Ayanda', 'Vusi', 'Innocentia', 'Castor', 
    'Micah', 'Simphiwe', 'Phiwa', 'Khutso', 'Tyson', 'Tivanni','Tondani',
    'Esta', 'Renzo', 'Molefe', 'Rudolph','Nonhlanhla', 'Sinazo'];

        //store 6 names in three different groups
        const group1 = shuffledArray.slice(0,6);
        const group2 =shuffledArray.slice(6,12);
        const group3 = shuffledArray.slice(12,18);

        //create firebase database instance
        const db = database;

    //create a function that would shuffle the initial array
    function Shuffle(){
        const sA = array.sort((a, b) => 0.5 - Math.random());
        setShuffleArray(sA);
        console.log(shuffledArray);
        //store data in database
        set(ref(db, 'groups/'),{
            group1: group1,
            group2:group2,
            group3:group3
        }).catch(err=>{
            console.log(err);
        })
    }
    const csvData = [
        ['THE ATOMS'],
        [''],
        [Group1[0]],
        [Group1[1]],
        [Group1[2]],
        [Group1[3]],
        [Group1[4]],
        [Group1[5]],
        [''],
        ['THE TECHIES'],
        [''],
        [Group2[0]],
        [Group2[1]],
        [Group2[2]],
        [Group2[3]],
        [Group2[4]],
        [Group2[5]],
        [''],

        ['THE DEV CREW'],
        [''],
        [Group3[0]],
        [Group3[1]],
        [Group3[2]],
        [Group3[3]],
        [Group3[4]],
        [Group3[5]],
    ]
    
    // listens for changes occuring
    useEffect(()=>{
            //create group reference
            const reference = ref(db, 'groups/group1');
            //GROUP1 DATA
            onValue(reference, (snapshot)=>{
                if(snapshot.val() !== null){
                    var data = snapshot.val();
                    console.log('Snapshot values ', data);
                    setGroup1(data);
                }
                
            });

            //GROUP2 DATA
            //create group reference
            const reference1 = ref(db, 'groups/group2');
            onValue(reference1, (snapshot)=>{
                if(snapshot.val() !== null){
                    var data = snapshot.val();
                    console.log('Snapshot values ', data);
                    setGroup2(data);
                }
                
            });

            //GROUP3 DATA
            //create group reference
            const reference2 = ref(db, 'groups/group3');
            onValue(reference2, (snapshot)=>{
                if(snapshot.val() !== null){
                    var data = snapshot.val();
                    console.log('Snapshot values ', data);
                    setGroup3(data);
                }
                
            })
    },[])
   
    return(

        <main className="interface"> 
            <section className='wrapper'>
                <section className='container'>
                    <h1>The Dev Crew</h1>
                    <p>{Group2[0]} <strong>Scrum Master</strong></p>
                    <p>{Group2[1]}</p>
                    <p>{Group2[2]}</p>
                    <p>{Group2[3]}</p>
                    <p>{Group2[4]}</p>
                    <p>{Group2[5]}</p>
                </section>
                <section className='container'>
                    <h1>The Atoms</h1>
                    <p>{Group1[0]} <strong>Scrum Master</strong></p>
                    <p>{Group1[1]}</p>
                    <p>{Group1[2]}</p>
                    <p>{Group1[3]}</p>
                    <p>{Group1[4]}</p>
                    <p>{Group1[5]}</p>
                </section>
                <section className='container'>
                    <h1>The Techies</h1>
                    <p>{Group3[0]} <strong>Scrum Master</strong></p>
                    <p>{Group3[1]}</p>
                    <p>{Group3[2]}</p>
                    <p>{Group3[3]}</p>
                    <p>{Group3[4]}</p>
                    <p>{Group3[5]}</p>
                    
                </section>
            </section>
            <section className='operations'>
            <CSVLink data={csvData} className='downloadLink'>Download New Groups</CSVLink>
            </section>
        </main>
    )
}