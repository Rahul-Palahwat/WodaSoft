import { create } from 'apisauce'

import {user_data , user_comment} from '../baseURL'


export const data_all = create({
    baseURL: user_data,
	headers: {
		Accept: "application/json",
		"Cache-Control": "no-cache",
		"Content-Type": "application/json",
	},
	timeout: 45000,
})

export const data_comment = create({
    baseURL: user_comment,
	headers: {
		Accept: "application/json",
		"Cache-Control": "no-cache",
		"Content-Type": "application/json",
	},
	timeout: 45000,
})