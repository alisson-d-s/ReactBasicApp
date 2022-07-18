import React, { useEffect, useState } from "react";
import { RepositoriesList } from "./RepositoriesList";

import "../../css/GithubRepositories.css";

export const GithubRepositories = () => {
    const [link, setLink] = useState<string>("");
    const [username, setUsername] = useState("");
    const [repo, setRepo] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [repoInfo, setRepoInfo] = useState("");

    useEffect(() => {
        setLink(`https://api.github.com/users/${username}/repos`);
    }, [username]);

    const handleUserNameChange = (value: string) => {
        setUsername(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === "") {
            setErrorMessage("Username are empty!");
            setRepo([]);
            return;
        }

        const response = await fetch(link, {
            method: "GET"
        });

        if (!response.ok) {
            setErrorMessage(response.statusText);
            setRepo([]);
            return;
        }        

        setErrorMessage("");
        setRepo(await response.json());
    };

    const handleRepoClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const repoName = e.currentTarget.innerText;

        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);

        if (!response.ok) {
            setRepoInfo(response.statusText)
            return;
        }

        const { language } = await response.json()

        setRepoInfo(language);
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div className="container" >
                    <input 
                        placeholder="GitHub username" 
                        key={"userName"} type={"text"} 
                        className="input-repo-link" 
                        value={username} 
                        onChange={(e) => handleUserNameChange(e.currentTarget.value)} 
                    />
                    <input value={"Search"} type={"submit"} className="button" />
                </div>
                <span className="container">Link: {link}</span>
                <span className="container" >{errorMessage}</span>
            </form>
            <div className="div-repos">
                <div className="repo-list">
                    <RepositoriesList repositories={repo} handleRepoClick={handleRepoClick} />          
                </div>
                <div className="repo-info"><h5>Language: {repoInfo}</h5></div>
            </div>
        </div>
    );
};
