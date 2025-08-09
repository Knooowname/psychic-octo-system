import path from 'path';
import fs from 'fs';

export default function handler(req:any, res:any,) {
  const configPath = path.resolve(process.cwd(), '../wt_config/config.json');
  try {
    const configData = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configData);
    console.log(config)
    res.status(200).json(config);
  } catch (error:any) {
    console.error('Error reading config:', error);
    res.status(500).json({ error: 'Cannot read config', details: error.message });
  }
}