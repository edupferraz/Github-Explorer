import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
        owner: {
            login: string,
            avatar_url: string,
            html_url: string,
        }
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]) // Variable value exchange is always like this

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