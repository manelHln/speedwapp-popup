async function postData(url = "", data = {}) {
  setIsLoading(true);
  // Default options are marked with *
  try {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", //
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
  } catch (error) {
    alert(error.message);
  } finally {
    setIsLoading(false);
  }
}
