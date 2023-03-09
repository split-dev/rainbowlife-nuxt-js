import fs from 'fs';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const IS_PROD = process.env.NODE_ENV === 'production';
    const DATA_PATH = IS_PROD ? '../../public/data/data_v2.json' : './public/data/data_v2.json';

    const dirParse = await fs.readdirSync('../', { withFileTypes: true });
    const dirParseNuxt = await fs.readdirSync(process.cwd(), { withFileTypes: true });
    const dirParseVc = await fs.readdirSync('___vc', { withFileTypes: true });
    const dirParseCurr = await fs.readdirSync('.', { withFileTypes: true });
    const dirParseChunks = await fs.readdirSync('chunks', { withFileTypes: true });
    console.log('dirParse', dirParse);
    console.log('dirParseNuxt', dirParseNuxt);
    console.log('dirParseVc', dirParseVc);
    console.log('dirParseCurr', dirParseCurr);
    console.log('dirParseChunks', dirParseChunks);
    console.log('event', event);
    
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
