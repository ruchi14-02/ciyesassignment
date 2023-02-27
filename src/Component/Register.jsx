import React, { useState } from 'react'
import './style.css'

function Register () {
  const [userDetail, setUserDetail] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  })

  const [record, setRecord] = useState([])
  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)

    //setting the value in to inout field
    setUserDetail({ ...userDetail, [name]: value })
    // alert("Login successfully")
  }

  const handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('Register', JSON.stringify(userDetail))
    const newRecord = { ...userDetail, id: new Date().getTime().toString() }
    setRecord([...record, newRecord])
    console.log(record)
    setUserDetail({ name: '', phone: '', email: '', password: '' })
  }

  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='offset-md-3 col-md-6 my-2'>
            <div className='card'>
              <div className='card-header text-center'>
                <b>Register</b>
              </div>
              <center>
                <form className='form_size' width='30%' onSubmit={handleSubmit}>
                  <div class='form-group'>
                    <label for='exampleInputEmail1'>Name</label>
                    <input
                      type='text'
                      class='form-control form-control-sm'
                      autocomplete='off'
                      name='name'
                      id='name'
                      value={userDetail.name}
                      onChange={handleInput}
                      aria-describedby='emailHelp'
                      placeholder='Enter name'
                      width='200px'
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputEmail1'>Phone</label>
                    <input
                      type='number'
                      value={userDetail.phone}
                      onChange={handleInput}
                      class='form-control form-control-sm'
                      autocomplete='off'
                      name='phone'
                      id='phone'
                      aria-describedby='emailHelp'
                      placeholder='Enter phone'
                      width='200px'
                    />
                  </div>

                  <div class='form-group'>
                    <label for='exampleInputEmail1'>Email address</label>
                    <input
                      type='email'
                      value={userDetail.email}
                      onChange={handleInput}
                      class='form-control form-control-sm'
                      name='email'
                      id='email'
                      autocomplete='off'
                      aria-describedby='emailHelp'
                      placeholder='Enter email'
                      width='200px'
                    />
                    <small id='emailHelp' class='form-text text-muted'>
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputPassword1'>Password</label>
                    <input
                      type='password'
                      value={userDetail.password}
                      onChange={handleInput}
                      class='form-control'
                      autocomplete='off'
                      id='password'
                      name='password'
                      placeholder='Password'
                    />
                  </div>
                  <br />

                  <button type='submit' class='btn btn-primary'>
                    Register
                  </button>
                </form>
              </center>
              <center>
                <div>
                  <br></br>
                  <table className='border_table'>
                    {record.map(curElem => {
                      const { id, name, email, phone, password } = curElem
                      return (
                        <div className='showData' key={curElem.id}>
                          <tr>
                            <td>
                              <h6>Name:</h6> <p>{curElem.name}</p>
                            </td>
                            <td>
                              <h6>phone:</h6> <p>{curElem.phone}</p>
                            </td>
                            <td>
                              {' '}
                              <h6>email:</h6> <p>{curElem.email}</p>
                            </td>
                            <td>
                              {' '}
                              <h6>password:</h6> <p>{curElem.password}</p>
                            </td>
                          </tr>
                        </div>
                      )
                    })}
                  </table>
                  <br></br>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
