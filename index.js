import fetch from "node-fetch";
export const getRandomUser = async () => (await fetch('https://randomuser.me/api/')).json();