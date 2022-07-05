export type RepositoriesListProps = {
    repositories: Array<{
        name: string;
    }>
};

export const RepositoriesList = ({ repositories }: RepositoriesListProps) => {
    return (
        <div>
            {
                repositories.map((repo, index) => (
                    <div className="container-repo-list" key={index}>
                        <h1>{repo.name}</h1>
                        <input type={"checkbox"}></input>
                    </div>
                ))
            }
        </div>
    );
};
