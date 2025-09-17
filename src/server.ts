import 'dotenv/config';
import app from './app';

const port = process.env.PORT || 3015;

   const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}) ;

export default server;