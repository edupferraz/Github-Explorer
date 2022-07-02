
interface RepositoryItemProps {
    repository: {
        owner: {
            login: string,
            avatar_url: string,
            html_url: string,
        }
        name: string,
        description: string
        html_url: string
    }    
}

export function RepositoryItem(props: RepositoryItemProps) {

    return(
        <li>
            <a href={props.repository.owner.html_url}>
                <img src={props.repository.owner.avatar_url} alt="" />
            </a>
            
            <div>
                <strong>{props.repository.name ?? 'Default'}</strong>
                <strong>{props.repository.owner.login}</strong>
            </div>
            
            <div className="group-link">
                <a href={props.repository.html_url}>
                    Acess Repository
                </a>

                <a href="">
                    Download Repository
                </a>
            </div>
            
        </li>
    );
}