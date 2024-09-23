const loadUsers = async (username) => {

    const response = await fetch(`https://api.github.com/users/${username}`)

    if (!response.ok) {
        throw new Error(`GitHub API returned status code ${response.status}`)
    }

    const user = await response.json()

    return user
}

const loadRepositories = async (username) => {

    const response = await fetch(`https://api.github.com/users/${username}/repos`)

    if (!response.ok) {
        throw new Error(`GitHub API returned status code ${response.status}`)
    }

    const repositories = await response.json()

    return repositories.map((repo) => ({ id: repo.id, name: repo.name }))
}