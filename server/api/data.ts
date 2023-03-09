import fs from 'fs';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const IS_PROD = process.env.NODE_ENV === 'production';
    const DATA_PATH = IS_PROD ? '../../public/data/data_v2.json' : './public/data/data_v2.json';

    try { 
        fs.writeFileSync(DATA_PATH, JSON.stringify(body), 'utf-8');
    } catch(e) {
        console.error(e);

        throw createError({
            statusCode: 400,
            statusMessage: 'File writing error. Check server console for details.',
        })       
    }

    return { body }
})
