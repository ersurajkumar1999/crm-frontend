import React, { useEffect, useState } from 'react';
import {
    Grid, CardContent, Card, Typography,
} from "../../librarys/MUILibrary";
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import { searchUsers } from '../../services/ChatService';
import SearchResult from './components/SearchResult';

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
                                    <UserList searchResults={searchResults} />
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
