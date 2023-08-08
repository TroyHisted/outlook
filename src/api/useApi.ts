import { useState } from 'react';
import { LoadingStatus } from '../page/weather/types/LoadingStatus';

interface ApiResponse<Data, Params> {
	data: Data;
	loadingStatus: LoadingStatus;
	error: string;
	get: (query?: Params) => Promise<Data>;
}

function useApi<
	Response,
	Params extends Record<string, string> | void = Record<string, string> | void
>(url: string, init?: RequestInit): ApiResponse<Response, Params> {
	const [loadingStatus, setLoadingStatus] =
		useState<LoadingStatus>('NotLoaded');
	const [data, setData] = useState<Response>();
	const [error, setError] = useState<string>();

	const get = (params?: Params) => {
		setLoadingStatus('Loading');
		setData({} as Response);

		let requestUrl = url;
		const searchParams = new URLSearchParams();
		if (params !== undefined) {
			Object.entries(params as Record<string, string>).forEach(
				([key, value]) => {
					if (requestUrl.includes(`{${key}}`)) {
						requestUrl = requestUrl.replace(`{${key}}`, value);
					} else {
						searchParams.append(key, value);
					}
				}
			);
		}
		return fetch(requestUrl, init)
			.then((response) => {
				if (response.status === 200) {
					return response.json().then((responseData) => {
						setLoadingStatus('Loaded');
						setData(responseData);
						return responseData;
					});
				} else {
					setLoadingStatus('NotLoaded');
					setError(`Failed lookup ${response.status}`);
					return undefined;
				}
			})
			.catch((e) => {
				setLoadingStatus('NotLoaded');
				setError('Failed lookup');
				throw e;
			});
	};

	return {
		data,
		loadingStatus,
		error,
		get,
	};
}

export default useApi;
