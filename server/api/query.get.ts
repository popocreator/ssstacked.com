// Sample query /api/query?param1=a&param2=b

export default defineEventHandler((event) => {
	const query = getQuery(event);
	return {a: query.param1, b: query.param2};
});
