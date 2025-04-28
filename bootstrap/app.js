import dotenv from 'dotenv';
import * as helpers from './helpers.js';

/** Init .env file */
dotenv.config();

/** Attach global helpers */
Object.assign(globalThis, helpers);