import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import { useUserInfo } from '../contexts/UserInfoContext';
import { useWallet } from '../contexts/WalletContext';

const API_URL = 'http://52.188.108.125:8080/api';

export default function useAPI() {
  const {refreshWallet} = useWallet();
  const {account} = useWeb3React();
  const {setUserData, _id} = useUserInfo();
  const login = async (phone: string, password: string)=>{
    return axios.post(`${API_URL}/user/login`, {
      phone,
      password,
    }).then( (res) => {
      const data = res.data;
      setUserData({
        _id: data._id,
        name: data.name,
        phone: data.phone,
        money: data.money,
        points: data.points,
        created_at: data.created_at
      });
      window.localStorage.setItem('token', data.token);
      return data;
    }).catch( (error) => {
      console.log(error);
      throw error.response.data.message;
    });
  };

  const getUser = async (id: string)=>{
    return axios.get(`${API_URL}/user/getUser?user_id=${id}`).then( (res) => {
      return res.data;
    }).catch( (error) => {
      throw error.response.data.message;
    });
  };

  const getMetadata = async (id: string)=>{
    return axios.get(`${API_URL}/metadata/${id}`).then( (res) => {
      return res.data;
    }).catch( (error) => {
      throw error.response.data.message;
    });
  };

  const faucet = async (amount: number)=>{
    return axios.post(`${API_URL}/account/faucetMoney`, {
      user_id: _id,
      amount,
    }).then( (res) => {
      const data = res.data;
      setUserData({
        _id: data._id,
        name: data.name,
        phone: data.phone,
        money: data.money,
        points: data.points,
        created_at: data.created_at
      });
      return res.data;
    }).catch( (error) => {
      console.log(error);
      throw error.response.data.message;
    });
  };

  const purchase = async (amount: number)=>{
    return axios.post(`${API_URL}/account/faucetPoints`, {
      user_id: _id,
      amount,
    }).then( (res) => {
      const data = res.data;
      setUserData({
        _id: data._id,
        name: data.name,
        phone: data.phone,
        money: data.money,
        points: data.points,
        created_at: data.created_at
      });
      return res.data;
    }).catch( (error) => {
      console.log(error);
      throw error.response.data.message;
    });
  };

  const getNFT = async (rarity: number)=>{
    return axios.post(`${API_URL}/blockchain/getNft`, {
      user_id: _id,
      address: account,
      rarity,
    }).then( (res) => {
      const data = res.data;
			refreshWallet();
      return data;
    }).catch( (error) => {
      throw error.response.data.message;
    });
  };

  const redeemPromo = async (tokenId: string)=>{
    return axios.post(`${API_URL}/blockchain/redeemPromo`, {
      user_id: _id,
      token_id: tokenId,
    }).then( (res) => {
      const data = res.data;
			refreshWallet();
      return data;
    }).catch( (error) => {
      throw error.response.data.message;
    });
  };

  return {
    login,
    faucet,
    purchase,
    getUser,
    getNFT,
    getMetadata,
    redeemPromo
  };
}