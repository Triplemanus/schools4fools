export const fetchAllSchools = async (querySchools) => {
  const url = `https://api.schooldigger.com/v1.2/schools?st=${querySchools.state}&level=${querySchools.level}&isMagnet=false&isCharter=false&isVirtual=false&isTitleI=true&isTitleISchoolwide=false&nearLatitude=${querySchools.locLatitude}&nearLongitude=${querySchools.locLongitude}&distanceMiles=${querySchools.maxDistance}&perPage=30&sortBy=distance&appID=d04b0481&appKey=0c80520db8adfa4e8be1ea61724e1f24`;
  //const url = 'https://api.schooldigger.com/v1.2/schools?st=CO&level=High&nearLatitude=39.7506294&nearLongitude=-104.9966207&distanceMiles=20&appID=d04b0481&appKey=0c80520db8adfa4e8be1ea61724e1f24';
  //console.log('querySchools latLong: ', querySchools, querySchools.latLocation, querySchools.longLocation);
  //console.log('fetchAllSchools url is ', url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error ('There was an error getting your school data.');
  }
  const schools = await response.json();
  return schools;
}