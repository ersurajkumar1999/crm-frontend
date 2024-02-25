import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
    Grid, CardContent, Card, Typography,
} from "../../librarys/MUILibrary";
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import { fetchAllChats, searchUsers } from '../../services/ChatService';
import SearchResult from './components/SearchResult';
import { AuthContext } from '../../contexts/AuthContext';

const ChatHome = () => {
    const userName = "Hello User";
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState("")


    const handleSearchUser = (event) => {
        const { value } = event.target;
        setSearch(value);
    }

    useEffect(() => {
        const userSearching = async () => {
            setIsLoading(true)
            try {
                const { data } = await searchUsers({ search });
                console.log("data==>", data);
                setSearchResults(data)
            } catch (error) {

            }
            setIsLoading(false)
        }
        userSearching();
    }, [search])
    const { user } = useContext(AuthContext);
    const loginUserId = user.userInfo.userId;
    const [state, setState] = useState({
        users: [],
        data: [],
        loading: true,
        page: 1,
        pageSize: 15,
    });
    const { users, data, loading, page, pageSize } = state;
    const observer = useRef(null);

    useEffect(() => {
        const userSearching = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true
            }));

            try {
                const { data } = await fetchAllChats({ page, pageSize });
                setState(prevState => ({
                    ...prevState,
                    data: data.data,
                    users: [...prevState.users, ...data.data],
                    loading: false
                }));
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false
                }));
            }
        };

        userSearching();
    }, [page, pageSize]);

    const lastUserElementRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && data.length > 0) {
                setState((prevState) => ({
                    ...prevState,
                    page: prevState.page + 1
                }));
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, data.length]);

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <UserSearch handleSearchUser={handleSearchUser} search={search} />
                            {
                                search ? (
                                    <SearchResult searchResults={searchResults} isLoading={isLoading} />
                                ) : (
                                    <UserList users={users} />
                                )
                            }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={8} >
                    <Card style={{ height: '600px', justifyContent: "center", alignItems: "center" }}>
                        <CardContent >
                            <Typography variant="h5" component="h2">
                                Welcome {userName}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default ChatHome;
