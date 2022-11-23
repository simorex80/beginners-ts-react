// https://reactjs.org/docs/hooks-effect.html

// https://www.w3schools.com/react/react_useeffect.asp
// https://www.geeksforgeeks.org/reactjs-useeffect-hook/
// https://dmitripavlutin.com/react-useeffect-explanation/
// https://www.freecodecamp.org/italian/news/hook-useeffect-react/
// https://medium.com/webeetle/guida-ai-react-hooks-parte-1-510693ea60f8
// https://www.robinwieruch.de/react-hooks-fetch-data/

import { useEffect, useState } from "react";

interface Result {
    hits?: [{
        objectID: string;
        url: string;
        title: string;
    }];
};

function Effect() {

    console.log(`hooks:effect::re-render`);

    const [query, setQuery] = useState("react");
    const [search, setSearch] = useState("");
    const [data, setData] = useState<Result>();

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
        // 1 - Could return a function to "unmount" the effect (ex. remove event listener, reset window elements, ...
        // return () => {
        //     window.removeEventListener("keyup", handleKeyUp);
        // };
    },
        // 2 - Could also be applied to props of component
        // 3 - Could be called with [] deps for "initialize" the component after the first rendering
        [search]
    );

    const handleSearch = () => {
        setSearch(query);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <button type="button" onClick={handleSearch}>
                Search
            </button>

            {data && data.hits &&
                <ul className="App-list">
                    {data.hits.slice(0, 5).map(item => (item.title &&
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
            }
        </div >
    );
}

export default Effect;