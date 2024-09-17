import { api } from "../api/index";
const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    checkUserQuery: build.query({
      query: () => ({
        url: "/auth/profile",
      }),
    }),
    singInRequest: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
    }),
    signUpRequest: build.mutation({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
    }),
    otpVerifyRequest: build.mutation({
      query: (body) => ({
        url: "/auth/send-otp",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const {
  useSingInRequestMutation,
  useSignUpRequestMutation,
  useOtpVerifyRequestMutation,
  useCheckUserQueryQuery,
} = authApi;
