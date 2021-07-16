import React, { useState, useEffect } from 'react'
import { db } from '../Database/Firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '@material-ui/core/Button'
import { useGlobalContext } from '../GlobalState/Context'

function UserTable() {
  const [userData, setUserData] = useState([])
  const { cartItem, setCartItem, seatCount, setSeatCount } = useGlobalContext()

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  useEffect(() => {
    async function getData() {
      await db
        .collection('users')
        .orderBy('date', 'asc')
        .onSnapshot((snapshot) =>
          setUserData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        )
    }
    getData()
  }, [])

  const handleClick = (id) => {
    db.collection('classes').doc(id).update({
      isBooked: false,
    })
    setCartItem(cartItem - 1)
    setSeatCount(seatCount - 1)
    db.collection('users').doc(id).delete()
  }

  return (
    <div style={{ marginLeft: '30px', marginRight: '30px' }}>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>Subject</th>
            <th scope='col'>Date</th>
            <th scope='col'>Time</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, key = data.id) => {
            return (
              <tr>
                <th scope='row'>{data.data.className}</th>
                <td>{data.data.date.toDate().toString().substring(0, 16)}</td>
                <td>
                  {data.data.to.toDate().toString().substring(16, 21)} to
                  {data.data.from.toDate().toString().substring(16, 21)}
                </td>
                <td>
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => handleClick(data.id)}
                  >
                    Cancel
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

export default UserTable
