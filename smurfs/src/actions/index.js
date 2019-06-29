/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

// POST -> CREATE.
// GET -> READ.
// PUT -> UPDATE.
// DELETE -> DELETE.

import axios from 'axios';
export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";



export const getSmurfs = () => dispatch => {
  axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({type: GET_SMURFS, payload: res.data})
      })
      .catch(err => {
        
      })
};


export const addSmurf = (smurf) => dispatch => {
  axios.post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
      console.log("addRes: ", res)
      dispatch({type: ADD_SMURF, payload: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
};

export const deleteSmurf = (id) => dispatch => {
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then ((res) => {
      console.log("deleteRes: ", res)
      dispatch({type: DELETE_SMURF, payload: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
}


export const updateSmurf = (id, updatedSmurf) => dispatch => {
  axios.put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
    .then ((res) => {
      dispatch({type: UPDATE_SMURF, payload: res.data})
    })
    .catch ((err) => {
      console.log(err)
    })
}