import ApiService from "./ApiService";

class GymService {
  async fetchAllGyms() {
    return await ApiService.get("/gyms");
  }
}

export default new GymService();
