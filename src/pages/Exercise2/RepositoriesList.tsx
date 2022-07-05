export type RepositoriesListProps = {
    repositories: Array<{
        name: string;
    }>
};

export const RepositoriesList = ({ repositories }: RepositoriesListProps) => {
    return (
        <div>
            {
                repositories.map((repo) => (
                    <h1>{repo.name}</h1>
                ))
            }
        </div>
    );
};
