import React, { useState } from 'react';
import { useEffect } from 'react';
import './AvailableSits'


const AvailableSits = (setBooking) => {

  const [name, setName] = useState([])
    const [arrowDown, setArrowDown] = useState(false)
    const [gender, setGender] = useState([])
    const [reservedSeat, setReservedSeat] = useState([]);
    useEffect(() => {
        fetch('seates.json')
        .then(res => res.json())
        .then(data=> setReservedSeat(data)
        );

    }, []);
    const [seatNumber, setSeatnumber] = useState([])

  const getSeatNumber = (e) => {
    renderPassengerData(seatNumber)
    let newSeat = e.target.value
    
    if (reservedSeat.includes(newSeat)) {
        e.disabled = true
        if (seatNumber.includes(newSeat) ) {
            setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
            console.log(setSeatnumber);
        }
    } else {
        setSeatnumber([...seatNumber, newSeat])
        setReservedSeat([...reservedSeat, newSeat])
        console.log(seatNumber)
    }
}
const handleGender = (e, seatNo) => {
    const { value } = e.target
    setGender(gender.concat(value))
    // console.log(value)
    // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
}

const handlePassengerName = (e, seatNo) => {
  e.preventDefault()
  let value = e.target.value
  // console.log(value)
  if (!value) {
      return (setName("name is required"))
  } else {
      setName(name.concat(value))
      // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
  }
}
const handleSubmitDetails = e => {
  e.preventDefault()
  setArrowDown(true)
  localStorage.setItem("reservedSeats", JSON.stringify(seatNumber))
  localStorage.setItem("nameData", JSON.stringify(name))
  console.log(name)
  console.log(gender)
}

const renderPassengerData = (seatArray) => {
  return seatArray.map((seat, idx) => {
      return (
          <form key={idx} className="form seatfrm">
              <p className="text-capitalize text-center">Seat No:{seat}</p>
              <input className="form-control seatInp w-50 text-center m-2 d-flex justify-content-center" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" autoComplete="off" />
              {/* <input className="form-control seatInp d-flex justify-content-center" onBlur={e => handlePassengerName(e, seat)} type="number" name="passenger-phone-number" placeholder="Enter Your Phone Number" autoComplete="off" /> */}
              <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                  <label className="form-check-label" for="male">Male</label>
              </div>
              <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                  <label className="form-check-label" htmlFor="female">Female</label>
              </div>
          </form>)

  })
}
    return (
    //     <div>
          
    //       <div className="sitsBooking">
    //     <div className="plane">
    //     <h1>Available Seats</h1>
    //   <div className="fuselage">
        
    //   </div>
    //   <form onChange={e => getSeatNumber(e)}>
        
    //   <ol className="cabin fuselage">
    //     <li className="row row--1">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="1A" />
    //           <label for="1A">1A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="1B" />
    //           <label for="1B">1B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="1C" />
    //           <label for="1C">1C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" disabled id="1D" />
    //           <label for="1D">Occupied</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="1E" />
    //           <label for="1E">1E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="1F" />
    //           <label for="1F">1F</label>
    //         </li>
    //       </ol>
    //     </li>
    //     <li className="row row--2">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="2A" />
    //           <label for="2A">2A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="2B" />
    //           <label for="2B">2B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="2C" />
    //           <label for="2C">2C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="2D" />
    //           <label for="2D">2D</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="2E" />
    //           <label for="2E">2E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="2F" />
    //           <label for="2F">2F</label>
    //         </li>
    //       </ol>
    //     </li>
    //     <li className="row row--3">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="3A" />
    //           <label for="3A">3A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="3B" />
    //           <label for="3B">3B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="3C" />
    //           <label for="3C">3C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="3D" />
    //           <label for="3D">3D</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="3E" />
    //           <label for="3E">3E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="3F" />
    //           <label for="3F">3F</label>
    //         </li>
    //       </ol>
    //     </li>
    //     <li className="row row--4">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="4A" />
    //           <label for="4A">4A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="4B" />
    //           <label for="4B">4B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="4C" />
    //           <label for="4C">4C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="4D" />
    //           <label for="4D">4D</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="4E" />
    //           <label for="4E">4E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="4F" />
    //           <label for="4F">4F</label>
    //         </li>
    //       </ol>
    //     </li>
    //     <li className="row row--5">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="5A" />
    //           <label for="5A">5A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="5B" />
    //           <label for="5B">5B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="5C" />
    //           <label for="5C">5C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="5D" />
    //           <label for="5D">5D</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="5E" />
    //           <label for="5E">5E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="5F" />
    //           <label for="5F">5F</label>
    //         </li>
    //       </ol>
    //     </li>
    //     <li className="row row--6">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="6A" />
    //           <label for="6A">6A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="6B" />
    //           <label for="6B">6B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="6C" />
    //           <label for="6C">6C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="6D" />
    //           <label for="6D">6D</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="6E" />
    //           <label for="6E">6E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="6F" />
    //           <label for="6F">6F</label>
    //         </li>
    //       </ol>
    //     </li>
    //     <li className="row row--7">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="7A" />
    //           <label for="7A">7A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="7B" />
    //           <label for="7B">7B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="7C" />
    //           <label for="7C">7C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="7D" />
    //           <label for="7D">7D</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="7E" />
    //           <label for="7E">7E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="7F" />
    //           <label for="7F">7F</label>
    //         </li>
    //       </ol>
    //     </li>
    //     <li className="row row--8">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="8A" />
    //           <label for="8A">8A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="8B" />
    //           <label for="8B">8B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="8C" />
    //           <label for="8C">8C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="8D" />
    //           <label for="8D">8D</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="8E" />
    //           <label for="8E">8E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="8F" />
    //           <label for="8F">8F</label>
    //         </li>
    //       </ol>
    //     </li>
    //     <li className="row row--9">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="9A" />
    //           <label for="9A">9A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="9B" />
    //           <label for="9B">9B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="9C" />
    //           <label for="9C">9C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="9D" />
    //           <label for="9D">9D</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="9E" />
    //           <label for="9E">9E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="9F" />
    //           <label for="9F">9F</label>
    //         </li>
    //       </ol>
    //     </li>
    //     <li className="row row--10">
    //       <ol className="seats" type="A">
    //         <li className="seat">
    //           <input type="checkbox" id="10A" />
    //           <label for="10A">10A</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="10B" />
    //           <label for="10B">10B</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="10C" />
    //           <label for="10C">10C</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="10D" />
    //           <label for="10D">10D</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="10E" />
    //           <label for="10E">10E</label>
    //         </li>
    //         <li className="seat">
    //           <input type="checkbox" id="10F" />
    //           <label for="10F">10F</label>
    //         </li>
    //       </ol>
    //     </li>
    //   </ol>
    //   </form>
    //   <div className="fuselage">
    //   <form className="form-group">
    //                         {renderPassengerData(seatNumber)}
    //                     </form>
        
    //   </div>
    //   <button onClick={e => handleSubmitDetails(e)} className="btn btn-info seatBT">
    //                             Confirm Details
    //                         </button>
    //                         <div className={arrowDown ? "activeArrow2" : "nonActive"}>
    //                         <i className="fa fa-angle-double-down" aria-hidden="true"></i>
    //                     </div>
    // </div>
    //     </div>

          
            
    //     </div>

    <div className="ss">
            <div className="row">
                <div className="column1">
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="1A" id="1A" />
                                            <label htmlFor="1A">1A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="1B" value="1B" />
                                            <label htmlFor="1B">1B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="1C" id="1C" />
                                            <label htmlFor="1C">1C</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2A" id="2A" />
                                            <label htmlFor="2A">2A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2B" id="2B" />
                                            <label htmlFor="2B">2B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="2C" id="2C" />
                                            <label htmlFor="2C">2C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="3A" id="3A" />
                                            <label htmlFor="3A">3A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="3B" id="3B" />
                                            <label htmlFor="3B">3B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="3C" id="3C" />
                                            <label htmlFor="3C">3C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="4A" id="4A" />
                                            <label htmlFor="4A">4A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4B" id="4B" />
                                            <label htmlFor="4B">4B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4C" id="4C" />
                                            <label htmlFor="4C">4C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="5A" id="5A" />
                                            <label htmlFor="5A">5A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="5B" id="5B" />
                                            <label htmlFor="5B">5B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="5C" id="5C" />
                                            <label htmlFor="5C">5C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="6A" id="6A" />
                                            <label htmlFor="6A">6A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6B" id="6B" />
                                            <label htmlFor="6B">6B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6C" id="6C" />
                                            <label htmlFor="6C">6C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="7A" id="7A" />
                                            <label htmlFor="7A">7A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7B" id="7B" />
                                            <label htmlFor="7B">7B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7C" id="7C" />
                                            <label htmlFor="7C">7C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="8A" id="8A" />
                                            <label htmlFor="8A">8A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="8B" id="8B" />
                                            <label htmlFor="8B">8B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="8C" id="8C" />
                                            <label htmlFor="8C">8C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="9A" id="9A" />
                                            <label htmlFor="9A">9A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="9B" id="9B" />
                                            <label htmlFor="9B">9B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="9C" id="9C" />
                                            <label htmlFor="9C">9C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="10A" id="10A" />
                                            <label htmlFor="10A">10A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10B" id="10B" />
                                            <label htmlFor="10B">10B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10C" id="10C" />
                                            <label htmlFor="10C">10C</label>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </form>
                    </div>
                </div>
                <div className="column2">
                    <div className="seatInfo">
                        <form className="form-group">
                            {renderPassengerData(seatNumber)}
                        </form>
                        <div>
                            <button onClick={e => handleSubmitDetails(e)} className="btn btn-danger m-2 seatBT">
                                Confirm Details
                            </button>
                        </div>
                        <div className={arrowDown ? "activeArrow2" : "nonActive"}>
                        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AvailableSits;