/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./apiConfigs/axiosConfigs";


export const UsersApi = {
  get: async function (seed: string) {
    const response = await api.request({
      url: `/?seed=${seed}`,
      method: 'GET',
    });

    
    // returning the post returned by the API
    return response;
  },
  getAll: async function (page: number, maxLimit: number) {
    const response: any = await api.request({
      url: `?page=${page}&results=${maxLimit}`,
      method: 'GET',
    });

    const userData = {
      data: response.data.results,
      pagination: {
        page: response.data.info.page,
        pageSize: response.data.info.results,
        pagelength: 500
      },
    }

    return userData;
  },
  search: async function (name: object) {
    const response = await api.request({
      url: '/auth/search',
      method: 'GET',
      params: {
        name: name,
      },
    });

    return response.data.auth;
  },
};
