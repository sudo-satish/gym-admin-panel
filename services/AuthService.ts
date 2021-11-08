import ApiService from "./ApiService";

class AuthService {
  async verifyOtp({
    mobileNumber,
    otp,
  }: {
    mobileNumber: string;
    otp: string;
  }) {
    return ApiService.post("/auth/verify-otp", { mobileNumber, otp });
  }
}

export default new AuthService();
