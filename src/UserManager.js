import GitHubApiManager from "./GitHubApiManager";

const getUserDetails = async () => {
    let user = await GitHubApiManager.getUser().getProfile();
    return {
        login: user.data.login,
        name: user.data.name,
        email: user.data.email
    };
};

const getOrganizations = async () => {
    let organizations = await GitHubApiManager.getUser().listOrgs();
    return organizations.data.map((org) => {
        return {
            id: org.id,
            login: org.login,
            name: org.description
        };
    });
};

export default { getUserDetails, getOrganizations };