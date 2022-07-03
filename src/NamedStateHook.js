import React, { createContext, useContext, useState, useCallback } from 'react'

let nState = {}
let forceUpdate = ()=>{}

const isObject = (o) => o != null && typeof o === 'object' && !Array.isArray(o)
const propIsObject = (o,p) => p in o && typeof o[p] === 'object' && o[p] != null && !Array.isArray(o[p])

export const NamedStateContext = createContext()
NamedStateContext.displayName = 'NamedStateContext'

function forceRender(mergeState) {
  nState = Object.assign({}, nState, mergeState) 
  window.nState = nState // DEBUG
  console.log('>>>>>>>>>>>>>>> forceUpdate ',nState)
  forceUpdate()
}

export function setInitialState(initState) {
  if( isObject(initState) ) {
    forceRender(initState) 
  } else {
    throw new Error('Invalid InitialState')
  }  
}

export default function NamedStateProvider({children}) {
  const [, updateState] = useState()
  forceUpdate = useCallback(() => updateState({}), [])
  
  console.log('>>>>>>>>>>>>>>> NamedStateProvider ',nState)
	return(
    <NamedStateContext.Provider value={nState} >
		 {children}
    </NamedStateContext.Provider>
	)
}

// *****************************************************

export function useNamedState(defaultValue,...path) {
  let stp = useContext(NamedStateContext) // nState
  let last = path.pop()
  const setState = (newValue)=>{
    console.log('>>>>>>>>>>>>>>> setNamedState',newValue,[...path,last])
    let stp = nState
    for(const p of path) {
      if (!propIsObject(stp,p)) { stp[p]={} }
      stp = stp[p] }
    stp[last] = newValue
    forceRender()
  } 
  for(const p of path) {
    if (propIsObject(stp,p)) {
      stp = stp[p]
    } else {
      return [defaultValue, setState]
    }
  }
  return [last in stp && stp[last] || defaultValue, setState]
}