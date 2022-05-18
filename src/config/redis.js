import { createClient } from 'redis';
import logger from './logger';

export const client = createClient();

const clientRedis = async() => {
  
    try {
        await client.connect();    
        logger.info("redis connected")
    } catch (error) {
        console.log(error);
    }
}
export default clientRedis;