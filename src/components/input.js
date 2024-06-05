"use client"
import React, { useEffect, useState, useRef } from 'react'
export default function Inputfiled(props) {
  const [getvalue, setvalue] = useState('')
  const [hidename, sethidename] = useState('')
  const [hideproperty, sethideproperty] = useState('')
  if (props.value) {
    setvalue(props.value)
  }

  useEffect(() => {
    const inputplaceholder = document.getElementById('placeholder' + props.name)
    if (getvalue.length > 0) {
      inputplaceholder.style.cssText = 'top:0px !important'
    } else {
      inputplaceholder.style.cssText = 'top:30px !important'
    }
    if (props.onValueChange) {
      props.onValueChange(getvalue) // Notify parent component about value changes
    }
   
  }, [getvalue])
  useEffect(() => {
    if (props.language === 'AR') {
      sethidename('عرض')
      sethideproperty('showpasswordar')
    } else {
      sethidename('show')
      sethideproperty('showpassword')
    }
  }, [props.language])

  useEffect(() => {
    if (props.currentvalue) {
      setvalue(props.currentvalue)
    }
  }, [])

  const showpassword = () => {
    var inputid = document.getElementById(props.name)
    var showpasswordclass = document.getElementById('show' + props.name)
    if (props.language == 'AR') {
      if (inputid.type === 'password') {
        inputid.type = 'text'
        showpasswordclass.innerHTML = 'اخفاء'
      } else {
        inputid.type = 'password'
        showpasswordclass.innerHTML = 'عرض'
      }
    } else {
      if (inputid.type === 'password') {
        inputid.type = 'text'
        showpasswordclass.innerHTML = 'hide'
      } else {
        inputid.type = 'password'
        showpasswordclass.innerHTML = 'show'
      }
    }
  }

  return (
    <div className="inputfild">
      <div className="inputplaceholder" id={'placeholder' + props.name}>
        {props.placeholder}
      </div>
      <input
        type={props.type}
        //   placeholder="Enter Your Name"
        name={props.name}
        id={props.name}
        value={getvalue}
        onChange={(e) => {
          setvalue(e.target.value)
        }}
        ref={useRef(props.name)}
        required
      />
      {props.mood === 'password' ? (
        <>
          <div
            className={hideproperty}
            id={'show' + props.name}
            onClick={showpassword}
          >
            {hidename}
          </div>
        </>
      ) : null}
    </div>
  )
}