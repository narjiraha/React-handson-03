import React, { Component } from 'react'
import FormData from './FormData';

class HandsonThree extends Component {

    state = {
        name: "",
        department: "",
        rating: "",
        click: true,
        data: [],
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = () => {
        const obj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating,
        }

        this.state.data.push(obj)
        this.setState({ data: this.state.data, click: false, name: "", department: "", rating: "" })

    }

    toggleFunction = () => {
        this.setState({ click: !this.state.click })
    }


    render() {
        return (
            <div className='form'>
                {this.state.click ? (
                    <>
                        <h1>Feedback form</h1>
                        {/* name */}
                        <div>
                            Name:
                            <input
                                className='name'
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                placeholder="enter your name"
                                value={this.state.name}
                            />
                        </div>

                        {/* Department */}
                        <div>
                            Department:
                            <input
                                className='department'
                                type="text"
                                name="department"
                                onChange={this.handleChange}
                                placeholder="enter your department"
                                value={this.state.department}
                            />
                        </div>

                        {/* rating */}
                        <div>
                            Rating:
                            <input
                                className='rating'
                                type="text"
                                name="rating"
                                onChange={this.handleChange}
                                value={this.state.rating}
                            />
                        </div>
                        <button className='submit' onClick={this.handleClick}>Submit</button>
                    </>
                ) : (
                    <FormData value={this.state.data} tf={this.toggleFunction} />
                )}
            </div>
        );
    }

}
export default HandsonThree;

// import React, { useState } from 'react';
// import FormData from './FormData';

// const HandsonThree = () => {
//     const [name, setName] = useState('');
//     const [department, setDepartment] = useState('');
//     const [rating, setRating] = useState('');
//     const [click, setClick] = useState(true);
//     const [data, setData] = useState([]);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         if (name === 'name') {
//             setName(value);
//         } else if (name === 'department') {
//             setDepartment(value);
//         } else if (name === 'rating') {
//             setRating(value);
//         }
//     };

//     const handleClick = () => {
//         const obj = {
//             name,
//             department,
//             rating,
//         };

//         setData([...data, obj]);
//         setClick(false);
//         setName('');
//         setDepartment('');
//         setRating('');
//     };

//     const toggleFunction = () => {
//         setClick(!click);
//     };

//     return (
//         <div className='form'>
//             {click ? (
//                 <>
//                     <h1>Feedback form</h1>
//                     {/* name */}
//                     <div>
//                         Name:
//                         <input
//                             className='name'
//                             type="text"
//                             name="name"
//                             onChange={handleChange}
//                             placeholder="enter your name"
//                             value={name}
//                         />
//                     </div>

//                     {/* Department */}
//                     <div>
//                         Department:
//                         <input
//                             className='department'
//                             type="text"
//                             name="department"
//                             onChange={handleChange}
//                             placeholder="enter your department"
//                             value={department}
//                         />
//                     </div>

//                     {/* rating */}
//                     <div>
//                         Rating:
//                         <input
//                             className='rating'
//                             type="text"
//                             name="rating"
//                             onChange={handleChange}
//                             value={rating}
//                         />
//                     </div>
//                     <button className='submit' onClick={handleClick}>Submit</button>
//                 </>
//             ) : (
//                 <FormData value={data} tf={toggleFunction} />
//             )}
//         </div>
//     );
// };

// export default HandsonThree;
