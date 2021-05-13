import {reducer, StateType, TOGGLE_COLLAPSED } from "./reducer"

test('reducer have to invert value of callapsed', () => {
    // data
    const state : StateType = {
        collapsed : false
    }
    // action
    const newState = reducer(state, { type : TOGGLE_COLLAPSED})
    // expection

    expect(newState.collapsed).toBe(true)
})