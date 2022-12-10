import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TuitListItem from './TuitItem'
import { findTuitsThunk } from '../../services/tuits-thunks'

const TuitList = () => {
  const { tuits = [] } = useSelector((state) => state.tuitsData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findTuitsThunk())
  })

  console.log('tuits', tuits)

  return (
    <ul className="list-group">
      {tuits.map &&
        tuits.map((tuit) => <TuitListItem key={tuit._id} tuit={tuit} />)}
    </ul>
  )
}

export default TuitList
