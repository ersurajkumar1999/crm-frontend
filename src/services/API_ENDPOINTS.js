// Users end points 
const AUTH_LOGIN = "auth/login";
const AUTH_SIGNUP = "auth/signup";

// Common end points
const PROFILE = "profile";


// user chat
const SEARCH_USER = "search-users";
const FETCH_ALL_CHATS = "fetch-all-chats";

const USER_LIST_FOR_CONNECTIONS = "user-list-for-connections";
const MY_RECEIVED_CONNECTIONS = "my-received-connections";
const MY_SEND_CONNECTIONS = "my-send-connections";

// connections
const SEND_REQUEST = "send-request";
const ACCEPT_REQUEST = "accept-request";

// Exporting all variables at once
export {
    AUTH_LOGIN, AUTH_SIGNUP, PROFILE, SEARCH_USER, FETCH_ALL_CHATS,
    USER_LIST_FOR_CONNECTIONS, SEND_REQUEST, ACCEPT_REQUEST,
    MY_RECEIVED_CONNECTIONS, MY_SEND_CONNECTIONS
};