import app from './app';
 
 

const server = app.listen(3015, () => {
  console.log(`Server running on port  2015`);
});

export default server;