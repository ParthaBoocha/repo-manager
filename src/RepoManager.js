import GitHubApiManager from "./GitHubApiManager";

const getOrganizationRepos = async (org) => {
    const repos = await GitHubApiManager().getOrganization(org).getRepos();

    return repos.data;
};

export default { getOrganizationRepos };