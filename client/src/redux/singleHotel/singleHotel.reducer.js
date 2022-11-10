import { ADD_ADULT, ADD_CHILDREN, CREATE_ROOM, REMOVE_ROOM, SINGLE_HOTEL_ERROR, SINGLE_HOTEL_LOADING, SINGLE_HOTEL_PHOTOS, SINGLE_HOTEL_SUCCESS, SUB_ADULT, SUB_CHILDREN } from "./singleHotel.types";

const initState = {
    loading: false,
    error: false,
    data: {},
    pictures: [],
    rooms: [{
        adults: 2, children: 0
    }]
}

export const singleHotelReducer = (state = initState, action) => {
    switch (action.type) {
        case SINGLE_HOTEL_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case SINGLE_HOTEL_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data: action.data
            }
        }
        case SINGLE_HOTEL_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case SINGLE_HOTEL_PHOTOS: {
            // console.log(action,1)
            return {
                ...state,
                loading: false,
                error: false,
                pictures: action.pictures
            }
        }
        case CREATE_ROOM: {
            return {
                ...state,
                rooms: [...state.rooms, {
                    adults: 1, children: 0
                }]
            }
        }
        case REMOVE_ROOM: {
            let updatedRooms = state.rooms.filter((ele, i) => i !== action.id);
            return {
                ...state,
                rooms: updatedRooms
            }
        }
        case ADD_ADULT: {
            let updatedRooms = state.rooms.map((ele, i) => {
                if (i === action.id) {
                    ele = { ...ele, adults: ele.adults + 1 };
                    return ele;
                }
                else return ele;
            })
            return {
                ...state,
                rooms: updatedRooms
            }
        }
        case ADD_CHILDREN: {
            let updatedRooms = state.rooms.map((ele, i) => {
                if (i === action.id) {
                    ele = { ...ele, children: ele.children + 1 };
                    return ele;
                }
                else return ele;
            })
            return {
                ...state,
                rooms: updatedRooms
            }
        }
        case SUB_ADULT: {
            let updatedRooms = state.rooms.map((ele, i) => {
                if (i === action.id) {
                    ele = { ...ele, adults: ele.adults - 1 };
                    return ele;
                }
                else return ele;
            })
            return {
                ...state,
                rooms: updatedRooms
            }
        }
        case SUB_CHILDREN: {
            let updatedRooms = state.rooms.map((ele, i) => {
                if (i === action.id) {
                    ele = { ...ele, children: ele.children - 1 };
                    return ele;
                }
                else return ele;
            })
            return {
                ...state,
                rooms: updatedRooms
            }
        }
        default: {
            return state;
        }
    }
}