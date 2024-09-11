export async function getData(limit = '10') {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${limit}`, { method: 'get' });
    const data = await response.json();
    return {
      data: data,
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
    };
  }
}