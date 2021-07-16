import React, { useState, useEffect } from 'react'
import { db } from '../Database/Firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '@material-ui/core/Button'
import { useGlobalContext } from '../GlobalState/Context'

export default function ClassTable() {
  const [data, setData] = useState([])
  const { cartItem, setCartItem, seatCount, setSeatCount } = useGlobalContext()

  useEffect(() => {
    async function getData() {
      await db
        .collection('classes')
        .orderBy('date', 'asc')
        .onSnapshot((snapshot) =>
          setData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        )
    }
    getData()
  }, [])

  const handleClick = (id, className, date, to, from) => {
    setCartItem(cartItem + 1)
    setSeatCount(seatCount + 1)
    db.collection('classes').doc(id).update({
      isBooked: true,
    })

    db.collection('users').doc(id).set({
      className: className,
      date: date,
      to: to,
      from: from,
      isBooked: true,
    })
  }

  return (
    <div style={{ marginLeft: '30px', marginRight: '30px' }}>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>Subject</th>
            <th scope='col'>Date</th>
            <th scope='col'>Time</th>
            <th scope='col'>Availablity</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, key = data.id) => {
            return (
              <tr>
                <th scope='row'>{data.data.className}</th>
                <td>{data.data.date.toDate().toString().substring(0, 16)}</td>
                <td>
                  {data.data.to.toDate().toString().substring(16, 21)} to
                  {data.data.from.toDate().toString().substring(16, 21)}
                </td>
                <td>{data.data.availability} seats available</td>
                <td>
                  <Button
                    onClick={() =>
                      handleClick(
                        data.id,
                        data.data.className,
                        data.data.date,
                        data.data.to,
                        data.data.from
                      )
                    }
                    variant='contained'
                    color='secondary'
                    disabled={
                      data.data.availability === 0 ||
                      data.data.isBooked === true
                        ? true
                        : false
                    }
                  >
                    {data.data.availability === 0
                      ? 'Full Batch'
                      : data.data.isBooked
                      ? 'Booked'
                      : 'Book Now'}
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
