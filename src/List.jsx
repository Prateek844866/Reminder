import React, { useState } from 'react';
import "./mystyle.css"

export default function List() {
  var [list, setlist] = useState("")
  var [lists, setitems] = useState([])
  function add(e) {
    setlist(e.target.value)
  }
  function addy(e) {
    if (list !== "") {
      setitems((old) => {
        return [...old,
          list]
      })
      setlist("")
    }
  }
  function del(id) {
    setitems((old) => {
      return old.filter((arrElement, index) => {
        return index !== id
      })

    })
  }
  function handleSubmit(event) {
    event.preventDefault();
  }


  return (
    <div className='main'>
      <div className='border rounded-2 border-2 box'>
        <div>
          <form className="d-flex justify-content m-2" onSubmit={handleSubmit}>
            <div className="">
              <input type="text" className="form-control" name="item" style={{ width: "425px",backgroundColor:"#6b6e70", color:"black" }} onChange={add} value={list} />
            </div>

            <div className="" style={{ marginLeft: "5px" }}>
              <button className="btn" onClick={addy} style={{ height: "39px",backgroundColor:"#86c232" }}><span className="material-symbols-outlined">
                add_circle
              </span></button>
            </div>
          </form>
        </div>

        <div style={{ overflow: "auto", height: "530px", margin: "3px" }}>
          {lists.map((list, index) => {
            return (
              <div key={index}>
                <div className="alert items mt-3 row" role="alert">
                  <div className='col-11'>
                    {list}
                  </div>
                  <div className="material-symbols-outlined cancel col-1 cancelbtn" style={{ float: "right" , padding:"0px"}}
                    onClick={() => {
                      del(index)
                    }}>
                    cancel
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

}
