'use client';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [tid, setTid] = useState('');
  const [uid, setUid] = useState('');
  const [sin, setSin] = useState([]);
  const [ready, setReady] = useState(false);
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  useEffect(() => {
    const r = async () => {
      const d = await axios('http://localhost:9001/users');
      setUsers(d.data);
    };
    r();
  }, []);
  useEffect(() => {
    setReady(true);
  }, []);
  const getTasks = async (uid) => {
    const d = await axios(`http://localhost:9001/tasks/users/${uid}`);
    setTasks(d.data);
  };
  const delUser = async (uid) => {
    const d = await axios.delete(`http://localhost:9001/users/${uid}`);
  };
  const delTask = async (id) => {
    const d = await axios.delete(`http://localhost:9001/tasks/${id}`);
  };
  const updTask = async (d) => {
    await axios.patch(`http://localhost:9001/tasks/${tid}`, { name, desc });
  };
  const updUsr = async (d) => {
    await axios.patch(`http://localhost:9001/users/${uid}`, { city, email });
  };
  const getSin = async () => {
    const d = await axios(`http://localhost:9001/sin`);
    setSin(d.data.val.map((v) => ({ val: v })));
  };
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowUser = () => setShowUser(true);
  const handleCloseUser = () => setShowUser(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Desc</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              updTask({ name, desc });
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showUser} onHide={handleCloseUser}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUser}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              updUsr({ city, email });
              handleCloseUser();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{ width: '100%' }} className="flex flex-col items-center">
        <Button onClick={getSin}>Show sin</Button>
        {sin?.length ? (
          <div style={{ width: '100%', height: '500px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={sin}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="val" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="val"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          ''
        )}
      </div>
      {ready && (
        <>
          <div style={{ fontSize: '1.5rem' }}>Users</div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>E-mail</th>
                <th>City</th>
                <th>Postcode</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.length &&
                users.map((u) => {
                  return (
                    <tr>
                      <td>{u.email}</td>
                      <td>{u.city}</td>
                      <td>{u.pcode}</td>
                      <td>{u.addr}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={(e) => getTasks(u.id)}
                        >
                          Megtekintes
                        </Button>{' '}
                        <Button
                          variant="primary"
                          onClick={(e) => {
                            setUid(u.id);
                            setEmail(u.email);
                            setCity(u.city);
                            handleShowUser();
                          }}
                        >
                          Szerk
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={(e) => delUser(u.id)}
                        >
                          Torles
                        </Button>{' '}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <div style={{ fontSize: '1.5rem' }}>Tasks</div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Cim</th>
                <th>Leiras</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.length
                ? tasks.map((t) => {
                    return (
                      <tr>
                        <td>{t.name}</td>
                        <td>{t.desc}</td>
                        <td>
                          <Button variant="primary">Megtekintes</Button>{' '}
                          <Button
                            variant="primary"
                            onClick={(e) => {
                              setTid(t.id);
                              setName(t.name);
                              setDesc(t.name);
                              handleShow();
                            }}
                          >
                            Szerk
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={(e) => {
                              delTask(t.id);
                            }}
                          >
                            Torles
                          </Button>{' '}
                        </td>
                      </tr>
                    );
                  })
                : 'Select a user or user has no tasks'}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
}
