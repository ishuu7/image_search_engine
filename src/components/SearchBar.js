import { Navbar, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch     } from "react-redux";
import { getPhotos, getCurrentQuery } from '../actions/getPhotos';
import { useEffect, useState } from 'react';



const SearchBar = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [finalQuery, setFinalQuery] = useState('');

    const submitHandler = async (e) => {
        setFinalQuery(query);
        dispatch((getCurrentQuery(query)));
        
    }

    useEffect(() => {
        dispatch((getPhotos(finalQuery)));
    }, [dispatch, finalQuery])

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >ImageSearchEngine</Navbar.Brand>
            <InputGroup >
                    <FormControl
                        placeholder="Search Photos"
                        aria-label="Search Photos"
                        aria-describedby="Search-Bar"
                        onChange = {(e) => setQuery(e.target.value)}
                    />
                    <InputGroup.Append>
                        <Button variant="primary" type = "submit" onClick = {submitHandler}>Search</Button>
                    </InputGroup.Append>
            </InputGroup>
        </Navbar>
    )
}

export default SearchBar;