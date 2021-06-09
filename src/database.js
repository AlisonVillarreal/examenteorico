import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-23-22-191-232.compute-1.amazonaws.com',
    user: 'yluqacesfxrzjw',
    password: '1f2e07dbb9abf6e3b3b6730801fb0aa99f519b8f979be5d13fa3e815683759b0',
    database: 'd8k26vtvtseif5',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})