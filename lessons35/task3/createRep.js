export const createReposElem = () => {
  const userinfomElem = document.querySelector('.user__info');
  const userReposElem = document.createElement('span');
  userReposElem.classList.add('repos_url');

  userinfomElem.append(userReposElem);
};
export const createRepoListElem = (reposName) => {
  const userRepListElem = document.querySelector('.repo-list');
  const reposListItemElem = document.createElement('li');
  reposListItemElem.classList.add('repo-list__item');
  reposListItemElem.textContent = reposName;

  userRepListElem.append(reposListItemElem);
  return reposListItemElem;
};
