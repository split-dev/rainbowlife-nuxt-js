import fs from 'fs';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try { 
        fs.writeFileSync('./data/data_v2.json', JSON.stringify(body), 'utf-8');
    } catch(e) {
        console.error(e);

        throw createError({
            statusCode: 400,
            statusMessage: 'File writing error. Check server console for details.',
        })       
    }

    return { body }
})
