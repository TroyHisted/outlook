import { useState } from 'react';
import { LoadingStatus } from '../page/weather/types/LoadingStatus';

/**
 * Represents an API that will return a piece of json data.
 */
interface Api<Data, Params> {
	// The data returned from the api call
	data: Data;
	//
	loadingStatus: LoadingStatus;
	// Contains a generic error message when the most recent api call fails to return a 200 response.
	error: string;
	// Initiates a fetch request using the 'get' http method using the api url.
	get: (query?: Params) => Promise<Data>;
	// Initiates a fetch request using the 'get' http method against the specified url.
	getUrl: (url: string, query?: Params) => Promise<Data>;
}

/**
 *
 * @param url - The fully qualified url to the api service endpoint.
 * @param init - Fetch settings that will be used for each request.
 * @returns {Api} - The api service.
 */
function useApi<
	Response,
	Params extends Record<string, string> | void = Record<string, string> | void
>(url?: string, init?: RequestInit): Api<Response, Params> {
	const [loadingStatus, setLoadingStatus] =
		useState<LoadingStatus>('NotLoaded');
	const [data, setData] = useState<Response>();
	const [error, setError] = useState<string>();

	const get = (params?: Params) => getUrl(url, params);

	/**
	 * @param url - The api url.
	 * @param params - Query parameters (optional).
	 * @returns The fetch promise.
	 */
	const getUrl = (url: string, params?: Params) => {
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
		requestUrl = `${requestUrl}?${searchParams.toString()}`;
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
		getUrl,
	};
}

export default useApi;
