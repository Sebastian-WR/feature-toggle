import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//import { connect } from 'react-redux'
//import { setUser, getUser } from '../../Redux/User/actions'

// const mapStateToProps = state => {
//    return {
//      user: state.user,
//    }
//  }

//  const mapDispatchToProps = dispatch => {
//    return {
//      setUser: () => dispatch(setUser()),

//      getUser: () => dispatch(getUser()),
//    }
//  }

async function loginUser(credentials) {
   return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
   }).then((data) => data.json())
}

const Login = ({ setToken }, props) => {
   const [username, setUserName] = useState()
   const [password, setPassword] = useState()
   const [usernameReg, setUserNameReg] = useState('')
   const [passwordReg, setPasswordReg] = useState('')

   const [show, setShow] = useState(false)

   const [users, setUsers] = useState([
      {
         id: 1,
         username: 'Admin',
         password: '1234',
      },
      {
         id: 2,
         username: 'User',
         password: '1234',
      },
   ])

   const toggleShow = () => {
      setShow(!show)
   }

   const registerUser = async (e) => {
      e.preventDefault()
      const updateUsers = [
         ...users,
         {
            id: users.length + 1,
            username: usernameReg,
            password: passwordReg,
         },
      ]
      setUsers(updateUsers)

      const tokenReg = await loginUser({
         usernameReg,
         passwordReg,
      })
      setToken(tokenReg)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const thisUser = users.find(
         (user) => user.username === username && user.password === password,
      )
      if (thisUser !== undefined) {
         const token = await loginUser({
            username,
            password,
         })
         setToken(token)
      } else {
         alert('Wrong username or password')
      }
   }

   return (
      <Container style={{ paddingTop: '50px', paddingBottom: '50px' }}>
         <Row className="justify-content-md-center">
            <Col sm={4}>
               <Form onSubmit={handleSubmit}>
                  <div id="error"></div>
                  <Form.Text className="text-muted" id="alert"></Form.Text>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Username</Form.Label>
                     <Form.Control
                        type="text"
                        placeholder="Enter email"
                        onChange={(e) => setUserName(e.target.value)}
                     />
                  </Form.Group>

                  <Form.Group
                     className="mb-3"
                     controlId="formBasicPassword"
                     style={{ paddingBottom: '15px' }}
                  >
                     <Form.Label>Password</Form.Label>
                     <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </Form.Group>
                  <Row>
                     <Button variant="primary" type="submit">
                        Submit
                     </Button>
                  </Row>
                  <Row style={{ paddingTop: '30px' }}>
                     <Button type="button" onClick={toggleShow}>
                        Register
                     </Button>
                  </Row>
               </Form>
            </Col>
         </Row>

         {show ? (
            <Row
               className="justify-content-md-center"
               style={{ paddingTop: '30px' }}
            >
               <Col sm={4}>
                  <Form onSubmit={registerUser}>
                     <Form.Text className="text-muted" id="alert"></Form.Text>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Enter email"
                           onChange={(e) => setUserNameReg(e.target.value)}
                        />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           type="password"
                           placeholder="Password"
                           onChange={(e) => setPasswordReg(e.target.value)}
                        />
                     </Form.Group>
                     <Button variant="primary" type="submit">
                        Register
                     </Button>
                  </Form>
               </Col>
            </Row>
         ) : null}
      </Container>
   )
}
export default Login // connect(mapStateToProps, mapDispatchToProps)

Login.propTypes = {
   setToken: PropTypes.func.isRequired,
}
