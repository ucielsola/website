export function errorHandler(error: unknown) {
	let output;

	if (error == null) {
		output = 'unknown error';
	}

	if (typeof error === 'string') {
		output = error;
	}

	if (error instanceof Error) {
		output = error.message;
	}

	output = JSON.stringify(error);

	console.log(output);

	return '';
}
