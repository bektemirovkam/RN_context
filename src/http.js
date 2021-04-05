export class Http {
  static HEADERS = { "Content-Type": "application/json" };

  static async get(url) {
    try {
      return await request(url);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async post(url, data = {}) {
    try {
      return await request(url, "POST", data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async patch(url, data = {}) {
    try {
      return await request(url, "PATCH", data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async delete(url) {
    try {
      return await request(url);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const request = async (url, method = "GET", data) => {
  const config = {
    method,
    headers: Http.HEADERS,
  };

  if (method === "POST" || method === "PATCH") {
    config.body = data;
  }

  const responce = await fetch(url, config);
  return await responce.json();
};
