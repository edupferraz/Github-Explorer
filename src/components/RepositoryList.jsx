import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform', 
    description: 'Forms in React',
    link: "https://github.com/edupferraz"
}

export function RepositoryList() {

    return(
        <section className="repository-list">
            <h1>List of Repositories</h1>

            <ul>

                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>

            </ul>

        </section>
    );

}