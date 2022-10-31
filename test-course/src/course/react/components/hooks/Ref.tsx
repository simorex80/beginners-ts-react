// https://reactjs.org/docs/hooks-reference.html#useref

// https://www.w3schools.com/react/react_useref.asp
// https://www.geeksforgeeks.org/react-js-useref-hook/
// https://dmitripavlutin.com/react-useref-guide/
// https://medium.com/trabe/react-useref-hook-b6c9d39e2022

import { useEffect, useRef, useState } from "react";

interface Result {
    hits?: [{
        objectID: string;
        url: string;
        title: string;
    }];
};

function Ref() {

    console.log(`hooks:ref::re-render`);

    const queryRef = useRef<HTMLInputElement>(null);
    const [search, setSearch] = useState("");
    const [data, setData] = useState<Result>();
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (search) {
            const fetchData = async () => {
                const result = await fetch(`http://hn.algolia.com/api/v1/search?query=${search}`);
                setData(await result.json() as Result);
            };
            fetchData();
        } else {
            setData(undefined);
        }
    }, [search]);

    const handleSearch = () => {
        if (queryRef.current) {
            setSearch(queryRef.current.value);
        }
        console.log(`hooks:ref::re-render::search: ${divRef.current?.getBoundingClientRect()}`);
    };

    return (
        <div ref={divRef}>
            <input
                type="text"
                ref={queryRef}
                defaultValue={"react"}
            />
            <button type="button" onClick={handleSearch}>
                Search
            </button>

            <ul className="App-list">
                {data && data.hits && data.hits.slice(0, 5).map(item => (item.title &&
                    <li key={item.objectID}>
                        <a
                            className="App-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Ref;