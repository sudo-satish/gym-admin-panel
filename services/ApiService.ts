class ApiService {
  getHeaders(options = {}) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return myHeaders;
  }

  async get(url: string, options?: any) {
    const requestOptions = {
      method: "GET",
      headers: this.getHeaders(options),
      redirect: "follow",
    };

    const completeUrl = this.getCompleteUrl(url);
    return this.fetch(completeUrl, requestOptions);
  }

  async post(url: string, body: any, options?: any) {
    const requestOptions = {
      method: "POST",
      headers: this.getHeaders(options),
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const completeUrl = this.getCompleteUrl(url);

    return this.fetch(completeUrl, requestOptions);
  }

  async fetch(url: string, requestOptions: any) {
    return fetch(url, requestOptions).then((response) => response.json());
  }

  getCompleteUrl(url: string): string {
    const API_HOST_URL = process.env.API_HOST_URL || "http://localhost:3001";
    return `http://localhost:3001${url}`;
  }
}

export default new ApiService();
