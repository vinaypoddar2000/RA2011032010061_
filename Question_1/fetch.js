const axios = require('axios');

const url = process.argv[2];

axios
  .get(url, { timeout: 500 })
  .then((response) => {
    const data = response.data;
    process.stdout.write(JSON.stringify(data));
  })
  .catch(() => {
    process.stdout.write(JSON.stringify({ numbers: [] }));
  });
