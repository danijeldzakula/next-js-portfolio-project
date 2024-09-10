export async function getData(limit: string) {

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${limit || 30}`, { method: 'get' });
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