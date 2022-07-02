import React, { createContext } from 'react'

let nState = {}

const propIsObject = (o,p) => p in o && typeof o[p] === 'object' && o[p] != null && !Array.isArray(o[p])

export const NamedStateContext = createContext()
NamedStateContext.displayName = 'NamedStateContext'


export default function NamedStateProvider({children}) {
	return(
    <NamedStateContext.Provider value={nState} >
		 {children}
    </NamedStateContext.Provider>
	)
}


export function useNamedState(defaultValue,...path) {
  let stp = nState
  let last = path.pop()
  const setState = (newValue)=>{
    for(const p of path) {
      if (!propIsObject(stp,p)) { stp[p]={} }
      stp = stp[p] }
    stp[last] = newValue
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