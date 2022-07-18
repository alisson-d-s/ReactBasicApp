export type RepositoriesListProps = {
    repositories: Array<{
        name: string;
    }>
    handleRepoClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export const RepositoriesList = ({ repositories, handleRepoClick }: RepositoriesListProps) => {
    return (
        <div>
            {
                repositories.map((repo, index) => (
                    <h3 className="repo-item" key={index} ><a onClick={(e) => handleRepoClick(e)} href="#">{repo.name}</a></h3>
                ))
            }
        </div>
    );
};
