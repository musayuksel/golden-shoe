export default async function fetchData(
	endPoint,
	methodObj = { method: "GET" }
) {
	const response = await fetch(`/api${endPoint}`, methodObj);
	return response;
}
