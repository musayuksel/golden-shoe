import fetchData from "./fetchData";
//By fetching with any endpoint, updates the related State.
export default async function getAndUpdateState(endpoint, setState) {
	try {
		const response = await fetchData(endpoint);
		const data = await response.json();
		setState(data);
	} catch (error) {
		console.log(error);
	}
}
