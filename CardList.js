// import React from 'react'
// import Card from './Card'

// export default function Cardlist( {robots}) {
//     // const cardcomponent = robot.map((robot,index) => {
//     //     return <Card id={robot.id} name={robot.name} email={robot.email}/>
//     // })
//     return (
//         <div>{ 
//              robots.map((robot,index) => {
//             return <Card id={robot.id} name={robot.name} email={robot.email}/>
//             })
//         }
            
//       {/* <Card id={robot[0].id} name={robot[0].name} email={robot[0].email}/>
//       <Card id={robot[1].id} name={robot[1].name} email={robot[1].email}/>
//       <Card id={robot[2].id} name={robot[2].name} email={robot[2].email}/>
//       <Card id={robot[3].id} name={robot[3].name} email={robot[3].email}/>
//       <Card id={robot[4].id} name={robot[4].name} email={robot[4].email}/>
//       <Card id={robot[5].id} name={robot[5].name} email={robot[5].email}/> */}
//         </div>
//     )
// }




import React from 'react';
import Card from './Card';

export default function CardList({robots}) {

    return (
        <div>
            {
                robots.map((robot,index) => {
                    return <Card id={robot.id} name={robot.name} email={robot.email}/>
                })
            }
        </div>
    )
}