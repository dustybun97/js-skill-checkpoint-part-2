// เริ่มเขียนโค้ดตรงนี้
const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};
const handleResponse = (response) => {
  return response.json();
};

const onSuccess = (data) => {
  console.log(nameOverSeventeen(data));
};
function nameOverSeventeen(data) {
  return data
    .filter((overSeventeen) => overSeventeen.name.length > 17)
    .map((nameOnly) => nameOnly.name);
}

getUsers().then(handleResponse).then(onSuccess);
