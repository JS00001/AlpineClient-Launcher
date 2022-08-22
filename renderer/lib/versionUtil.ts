export const convertToAllowedVersions = (initialVersions: PartnerVersions) => {
	// remove the key "id" from the object
	const { id, ...versions } = initialVersions;

	// get the first value in the object that is true
	const lowestVersion = Object.keys(versions).find((key) => versions[key]);

	// get the last value in the object that is true
	const highestVersion = Object.keys(versions)
		.reverse()
		.find((key) => versions[key]);

	// get any values in the object, between the lowest and highest version, that is false
	const unsupportedVersions = Object.keys(versions)
		.filter((key) => {
			return versions[key] === false && key > lowestVersion && key < highestVersion;
		})
		.map((key) => key);

	// if there are no versions that are true, return a message saying that the partner is not supported
	if (!lowestVersion) {
		return 'No versions are currently supported';
	}

	const readableLowestVersion = convertToHumanReadableVersions(lowestVersion);
	const readableHighestVersion = convertToHumanReadableVersions(highestVersion);
	const readableUnsupportedVersions = unsupportedVersions.map((version) =>
		convertToHumanReadableVersions(version)
	);

	return `Versions: ${readableLowestVersion} - ${readableHighestVersion} ${
		readableUnsupportedVersions.length > 0
			? `(Excluding ${readableUnsupportedVersions.join(', ')})`
			: ''
	}`;
};

export const convertToHumanReadableVersions = (version: string) => {
	// remove the v from the version string, and every 2 characters, add to the array
	const versionArray = version.replace('v', '').match(/.{1,2}/g);

	// remove the first char from each item in the array, if it is a 0
	const versionArrayClean = versionArray.map((item) => {
		if (item.charAt(0) === '0') {
			return item.slice(1);
		}
		return item;
	});

	// join the array back together, and return the string
	return versionArrayClean.join('.');
};
