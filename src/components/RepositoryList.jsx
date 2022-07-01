import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]) // Variable value exchange is always like this

    useEffect(() => {

        fetch('https://api.github.com/users/edupferraz/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))

    }, [repositories]); // Empty array run only once

    console.log(repositories);

    return(
        <section className="repository-list">
            <h1>List of Repositories</h1>

            <ul>
                { repositories.map(repository => { // Property Key 
                    return <RepositoryItem 
                                repository={repository}
                                key={repository.name}
                            />
                })}

                
            </ul>

        </section>
    );

}