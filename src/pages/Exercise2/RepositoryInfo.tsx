import { RepositoriesReturn } from "./GithubRepositories";

export const RepositoryInfo = ({ error, language, name, description, html_url }: RepositoriesReturn) => {
    if (error) {
        return (
            <h1>Error: {error}</h1>
        );
    };

    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Description: {description}</h4>
            <h4>Language: {language}</h4>
            <h4>URL: <a href="#" onClick={() => window.open(html_url)} >{html_url}</a></h4>
        </div>
    );
};
