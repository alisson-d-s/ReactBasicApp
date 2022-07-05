import { useEffect, useState } from "react";
import { RepositoriesList, RepositoriesListProps } from "./RepositoriesList";

export const GithubRepositories = () => {
    const [repo, setRepo] = useState<RepositoriesListProps>();

    useEffect(() => {
        fetch("https://api.github.com/users/alisson-d-s/repos")
        .then(async response => setRepo(await response.json()));
    }, []);

    if (!repo) {
        return <h1>Aguarde...</h1>
    }

    return (
        <RepositoriesList repositories={repo} />
    );
};
